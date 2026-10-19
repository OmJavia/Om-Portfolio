import { useEffect, useRef, useState } from "react";

export default function MermaidDiagram({ chart, accessibleDescription = "", className = "" }) {
  const ref = useRef(null);
  const [svg, setSvg] = useState("");
  const [error, setError] = useState(null);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!chart) return;

    let cancelled = false;
    const timer = setTimeout(() => {
      if (!cancelled && !svg) {
        setTimedOut(true);
      }
    }, 3500);

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

        const uniqueId = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart);

        if (!cancelled) {
          setSvg(renderedSvg);
          setError(null);
          setTimedOut(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Mermaid render error:", err);
          setError("Diagram rendering unavailable in current browser environment.");
        }
      }
    };

    render();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [chart, svg]);

  // If timed out or error occurred, render accessible semantic fallback
  if (error || timedOut) {
    return (
      <div className={`rounded-2xl border border-neutral-200 dark:border-[#27272a] bg-neutral-50 dark:bg-[#18181b] p-6 text-neutral-800 dark:text-neutral-200 ${className}`}>
        <p className="font-mono text-xs uppercase tracking-wider text-[#f97316] font-bold mb-2">
          System Architecture (Text Representation)
        </p>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 mb-4">
          {accessibleDescription || "The pipeline processes hardware motion data via BLE, interprets swing metrics, and coordinates gameplay on the connected application."}
        </p>
        <pre className="font-mono text-xs p-4 rounded-xl bg-white dark:bg-[#09090b] border border-neutral-200 dark:border-[#27272a] overflow-x-auto text-neutral-700 dark:text-neutral-300">
          {chart.trim()}
        </pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className={`flex items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 p-8 ${className}`}>
        <div className="flex items-center gap-2 text-sm text-neutral-400 font-mono">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-300 border-t-[#f97316]" />
          Loading system diagram…
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      role="img"
      aria-label={accessibleDescription || "System architecture diagram"}
      className={`overflow-x-auto rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
