import { stack, status } from '../data'
import { SectionTitle } from './Section'

export function Status() {
  return (
    <section>
      <SectionTitle>status</SectionTitle>
      <dl className="space-y-2 text-sm">
        {status.map((item) => (
          <div key={item.key} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <dt className="w-28 shrink-0 text-accent-dim">{item.key}</dt>
            <dd className="text-ink/90">{item.value}</dd>
          </div>
        ))}
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
          <dt className="w-28 shrink-0 text-accent-dim">stack</dt>
          <dd className="text-ink/90">{stack.join(' · ')}</dd>
        </div>
      </dl>
    </section>
  )
}
