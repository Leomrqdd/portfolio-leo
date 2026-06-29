// Portfolio content — typed, kept separate from components.

export interface Profile {
  name: string
  role: string
}

/** Plain text, or text with one inline link. */
export type RichText =
  | string
  | { pre: string; link: { label: string; href: string }; post: string }

export interface WorkItem {
  period: string
  name: string
  /** A single paragraph, or several bulleted lines. */
  description: string | string[]
  href?: string
}

export interface Link {
  label: string
  href: string
  display: string
}

export const profile: Profile = {
  name: 'Léo Marquand',
  role: 'Software engineer & technical lead',
}

export const KEVRED_URL = 'https://validator.kevred.com/'

export const now: RichText[] = [
  {
    pre: 'Running a mainnet Solana validator focused on performance, you can learn more about it ',
    link: {
      label: 'here',
      href: 'https://app.jpool.one/validators/Gvt8s5Bwnhg4G27VbnT1Zkfh7Jsztq6CNvZcc5anPonS?epoch=992&activeTab=distribution',
    },
    post: '.',
  },
  {
    pre: '',
    link: { label: 'DoubleZero', href: 'https://doublezero.xyz/' },
    post: ' Ambassador.',
  },
  {
    pre: 'Active in the ',
    link: { label: 'Ferno', href: 'https://ferno.ag/' },
    post: ' community.',
  },
  'Based in France. Remote-friendly, but ready to move or travel for work.',
  'Open for jobs, feel free to reach out!',
]

export const work: WorkItem[] = [
  {
    period: '2023 — now',
    name: 'Kevred Load-Balancer',
    description:
      'An RPC load-balancer for Solana that reduces latency and improves reliability for devs and users. Based on Cloudflare Workers, written in TypeScript, and open-source.',
    href: 'https://www.kevred.com/',
  },
  {
    period: '2024 — now',
    name: 'Roshambo',
    description:
      'A Solana Mobile dApp: on-chain Rock-Paper-Scissors where players bet SOL in a trustless, winner-takes-all game. Live on the dApp Store. Built for fun, as an educational project.',
    href: 'https://roshambo.kevred.com/',
  },
  {
    period: '2023',
    name: 'Onchain Lottery',
    description: 'An on-chain lottery on Solana, using VRF for verifiable on-chain randomness.',
  },
  {
    period: '2024',
    name: 'AI Agents',
    description: [
      'An agent that summarizes Solana X news into Telegram.',
      'A DeFi agent optimized for high-frequency trading, fully built in Rust.',
    ],
  },
]

export const socials: Link[] = [
  { label: 'Telegram', href: 'https://t.me/Leomrqd', display: '@Leomrqd' },
  { label: 'GitHub', href: 'https://github.com/Leomrqdd', display: 'github.com/Leomrqdd' },
  { label: 'X', href: 'https://x.com/mrqd_leo', display: '@mrqd_leo' },
]
