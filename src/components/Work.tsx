import { work, type WorkItem } from '../data'
import { SectionTitle } from './Section'

export function Work() {
  return (
    <section>
      <SectionTitle>work</SectionTitle>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {work.map((item) => (
          <article
            key={item.name}
            className="border-2 border-accent/40 bg-[#0c1426] p-4 shadow-[4px_4px_0_#060912]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-accent-dim">{item.period}</span>
              <StatusBadge status={item.status} />
            </div>
            <h3 className="mt-3 font-pixel text-sm text-accent">{item.name}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink/80">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function StatusBadge({ status }: { status: WorkItem['status'] }) {
  return status === 'active' ? (
    <span className="text-xs text-success">● active</span>
  ) : (
    <span className="text-xs text-accent-dim">✓ shipped</span>
  )
}
