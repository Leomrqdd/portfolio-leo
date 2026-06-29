import type { ReactNode } from 'react'

/** Two-column row: muted label on the left, content on the right (stacks on mobile). */
export function Section({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: ReactNode
  delay?: number
}) {
  return (
    <section
      className="reveal grid grid-cols-1 gap-2 sm:grid-cols-[6rem_1fr] sm:gap-8"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="group flex w-fit cursor-default items-center font-pixel text-sm uppercase tracking-wide text-muted transition-colors duration-150 hover:text-ink sm:pt-1">
        {title}
        <span className="ml-1 inline-block h-[0.85em] w-[6px] bg-ink opacity-0 transition-opacity group-hover:opacity-100 motion-safe:group-hover:animate-blink" />
      </h2>
      <div>{children}</div>
    </section>
  )
}
