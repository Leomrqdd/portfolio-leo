import { contacts } from '../data'
import { SectionTitle } from './Section'

export function Contact() {
  return (
    <section>
      <SectionTitle>contact</SectionTitle>
      <ul className="space-y-2 text-sm">
        {contacts.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink hover:text-accent"
            >
              <span className="text-accent">→</span>
              <span className="w-20 shrink-0 text-accent-dim">{c.label}</span>
              <span>{c.display}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
