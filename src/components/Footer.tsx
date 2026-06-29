import { footerLinks } from '../data'

export function Footer() {
  return (
    <footer className="flex flex-col gap-3 border-t-2 border-accent/20 pt-4 text-xs text-accent-dim sm:flex-row sm:items-center sm:justify-between">
      <span>2026 LMRQD</span>
      <nav className="flex items-center gap-3">
        {footerLinks.map((link, i) => (
          <span key={link.label} className="flex items-center gap-3">
            {i > 0 && <span aria-hidden="true">/</span>}
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              {link.display}
            </a>
          </span>
        ))}
      </nav>
    </footer>
  )
}
