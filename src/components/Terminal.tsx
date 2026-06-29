import { TERMINAL_PROMPT, terminalLines } from '../data'

/** Terminal window. Static content for now (auto-typing comes later). */
export function Terminal() {
  return (
    <div className="border-2 border-accent/60 bg-[#070b16] shadow-[4px_4px_0_#060912]">
      <div className="flex items-center gap-2 border-b-2 border-accent/60 px-3 py-2">
        <span className="h-3 w-3 bg-[#fb4d3d]" />
        <span className="h-3 w-3 bg-warn" />
        <span className="h-3 w-3 bg-success" />
        <span className="ml-2 text-xs text-accent-dim">leo@kevred — bash</span>
      </div>
      <div className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        {terminalLines.map((line, i) =>
          line.type === 'command' ? (
            <div key={i} className="whitespace-pre">
              <span className="text-accent">{TERMINAL_PROMPT}</span>
              <span className="text-ink">{line.text}</span>
            </div>
          ) : (
            <div key={i} className="whitespace-pre text-ink/60">
              {line.text}
            </div>
          ),
        )}
        <div className="whitespace-pre">
          <span className="text-accent">{TERMINAL_PROMPT}</span>
          <span className="inline-block h-[15px] w-[8px] translate-y-[2px] bg-accent" />
        </div>
      </div>
    </div>
  )
}
