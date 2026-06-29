import type { ReactNode } from 'react'

/** Two-column row: muted label on the left, content on the right (stacks on mobile). */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] sm:gap-8">
      <h2 className="font-pixel text-sm uppercase tracking-wide text-ink sm:pt-1">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  )
}
