export default function ArchitectureDiagram({ title }) {
  const nodes = title === 'Mars Rover Path Planning'
    ? ['HiRISE imagery', 'CV model', 'Terrain map', 'A* / Dijkstra', 'Rover route']
    : title === 'Metashot'
      ? ['Video input', 'YOLO inference', 'FastAPI', 'Redis', 'Player insights']
      : ['Next.js UI', 'API layer', 'Business logic', 'Data layer', 'Edge delivery'];

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-black/30 p-4">
      <div className="flex min-w-[620px] items-center gap-2">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center gap-2">
            <div className="rounded-xl border border-electric/25 bg-electric/5 px-3 py-3 text-center font-mono text-[10px] text-zinc-200 shadow-[0_0_24px_rgba(56,189,248,.05)]">{node}</div>
            {i < nodes.length - 1 && <span className="font-mono text-electric">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
