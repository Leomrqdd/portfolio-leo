import type { ReactNode } from 'react'

/** UPPERCASE pixel section label — 12px, dim blue. */
export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 font-pixel text-[18px] uppercase tracking-wide text-accent-dim">
      {children}
    </h2>
  )
}
