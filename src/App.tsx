import { profile, now, work, socials } from './data'
import { Section } from './components/Section'

function App() {
  return (
    <main className="reveal mx-auto max-w-[640px] px-6 py-24 sm:py-32">
      <header className="mb-16">
        <Avatar />
        <h1 className="mt-6 text-base font-medium text-ink">{profile.name}</h1>
        <p className="text-muted">{profile.role}</p>
        <p className="mt-5 max-w-prose text-ink/90">{profile.bio}</p>
      </header>

      <div className="space-y-12">
        <Section title="Now">
          <ul className="space-y-2">
            {now.map((line) => (
              <li key={line} className="text-ink/90">
                {line}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Work">
          <ul className="divide-y divide-line">
            {work.map((item) => (
              <li key={item.name} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium text-ink">{item.name}</span>
                  <span className="shrink-0 font-pixel text-[10px] uppercase tracking-wide text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Connect">
          <ul className="space-y-1.5">
            {socials.map((s) => (
              <li key={s.label} className="flex gap-4">
                <span className="w-20 shrink-0 text-muted">{s.label}</span>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {s.display}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <footer className="mt-24 border-t border-line pt-6 font-pixel text-[10px] uppercase tracking-wide text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  )
}

/** Large circular pixel-art avatar with an 8-bit hard offset shadow. */
function Avatar() {
  return (
    <div className="h-40 w-40 overflow-hidden rounded-full">
      <img
        src="/monkey_pfp.png"
        alt={profile.name}
        className="h-full w-full object-cover [image-rendering:pixelated]"
      />
    </div>
  )
}

export default App
