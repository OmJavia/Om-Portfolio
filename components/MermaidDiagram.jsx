import { useEffect, useRef, useState } from "react";

export default function MermaidDiagram({ chart, className = "" }) {
  const ref = useRef(null);
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!chart) return;

    let cancelled = false;

    const render = async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            primaryColor: "#f5f4f2",
            primaryTextColor: "#0a0a0a",
            primaryBorderColor: "#e5e5e5",
            lineColor: "#737373",
            secondaryColor: "#ffffff",
            tertiaryColor: "#fafafa",
            background: "#ffffff",
            mainBkg: "#ffffff",
            nodeBorder: "#d4d4d4",
            clusterBkg: "#f9fafb",
            titleColor: "#0a0a0a",
            edgeLabelBackground: "#f5f4f2",
            fontFamily: "Outfit, ui-sans-serif, system-ui, sans-serif",
            fontSize: "13px",
          },
          flowchart: {
            curve: "basis",
            padding: 20,
            nodeSpacing: 50,
            rankSpacing: 60,
          },
        });

        const uniqueId = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart);

        if (!cancelled) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Mermaid render error:", err);
          setError("Diagram could not be rendered.");
        }
      }
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <div className={`rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-600 ${className}`}>
        {error}
      </div>
    );
  }

  if (!svg) {
    return (
      <div className={`flex items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 p-12 ${className}`}>
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-600" />
          Loading diagram…
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`overflow-x-auto rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
