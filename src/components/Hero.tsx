import { profile } from '../data'

export function Hero() {
  return (
    <header className="flex items-center gap-5">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center border-2 border-accent font-pixel text-2xl text-accent shadow-[4px_4px_0_#060912]">
        {profile.avatar}
      </div>
      <div>
        <h1 className="text-xl leading-snug text-ink">
          <span className="text-accent">“</span>
          {profile.quote}
          <span className="text-accent">”</span>
          <span className="ml-2 text-sm text-accent-dim">— {profile.quoteBy}</span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/80">
          {profile.tagline}
        </p>
      </div>
    </header>
  )
}
