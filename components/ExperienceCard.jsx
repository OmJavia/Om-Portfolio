import Image from "next/image";

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  logo,
  tags = [],
  highlights = [],
}) {
  return (
    <div className="group p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white/70 dark:bg-neutral-900/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3.5">
          {logo && (
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white p-1 shrink-0 flex items-center justify-center shadow-xs">
              <Image src={logo} alt={company} width={40} height={40} className="object-contain" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-[#ff6b00] dark:group-hover:text-[#ff6b00] transition-colors">
              {company}
            </h3>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              {role}
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right font-mono text-xs text-neutral-500 dark:text-neutral-400">
          <p className="font-semibold text-neutral-700 dark:text-neutral-300">{period}</p>
          <p className="text-[11px]">{location}</p>
        </div>
      </div>

      {/* Tech Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Highlights */}
      {highlights.length > 0 && (
        <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1.5 list-disc pl-4">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
