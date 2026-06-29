// Placeholder portfolio data — typed, kept separate from components.

export interface Profile {
  avatar: string
  quote: string
  quoteBy: string
  tagline: string
}

export interface StatusItem {
  key: string
  value: string
}

export interface WorkItem {
  period: string
  name: string
  description: string
  status: 'active' | 'shipped'
}

export interface ContactLink {
  label: string
  href: string
  display: string
}

export type TermLine =
  | { type: 'command'; text: string }
  | { type: 'output'; text: string }

export const profile: Profile = {
  avatar: 'L',
  quote: 'The best way to predict the future is to build it.',
  quoteBy: 'Alan Kay',
  tagline: 'software / infra dev · solana validator ops · co-founder @ kevred',
}

export const status: StatusItem[] = [
  { key: 'building', value: 'Kevred — RPC load balancer & validator infra on Solana' },
  { key: 'validator', value: 'Solana mainnet + testnet · Marinade Select' },
  { key: 'community', value: 'Ferno · DoubleZero Ambassador' },
  { key: 'open to', value: 'systems / infra engineering roles' },
  { key: 'location', value: 'Rennes, France · remote-friendly' },
]

export const stack: string[] = [
  'Rust',
  'Solana/Anchor',
  'SBF programs',
  'TypeScript',
  'Node.js',
  'XDP/eBPF',
  'NUMA/EPYC',
  'Linux',
  'Jito/MEV',
]

export const work: WorkItem[] = [
  {
    period: '2023—now',
    name: 'Kevred',
    status: 'active',
    description: 'RPC load balancing on Solana. Validator ops. XDP/NUMA on EPYC.',
  },
  {
    period: '2024—now',
    name: 'Marinade Select',
    status: 'active',
    description: 'Validator onboarding. PSR/SAM, bond mechanics, stake auction.',
  },
  {
    period: '2023',
    name: 'BlockEvent',
    status: 'shipped',
    description: 'NFT ticket marketplace. On-chain VRF lottery. School of Solana S8.',
  },
  {
    period: '2024',
    name: 'gmgm.fr',
    status: 'shipped',
    description: 'Front-end web app, shipped solo.',
  },
]

export const contacts: ContactLink[] = [
  { label: 'x', href: 'https://x.com/handle', display: '@handle' },
  { label: 'github', href: 'https://github.com/handle', display: 'github.com/handle' },
  { label: 'email', href: 'mailto:you@domain.com', display: 'you@domain.com' },
  { label: 'linkedin', href: 'https://linkedin.com/in/handle', display: 'linkedin.com/in/handle' },
]

export const footerLinks: ContactLink[] = [
  { label: 'GITHUB', href: 'https://github.com/handle', display: 'GITHUB' },
  { label: 'X', href: 'https://x.com/handle', display: 'X' },
  { label: 'TELEGRAM', href: 'https://t.me/handle', display: 'TELEGRAM' },
]

export const terminalLines: TermLine[] = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'leo · software / infra dev' },
  { type: 'command', text: 'cat identity.toml' },
  { type: 'output', text: 'role     = "infra / systems engineer"' },
  { type: 'output', text: 'training = "School of Solana S8"' },
  { type: 'output', text: 'org      = "kevred"' },
]

export const TERMINAL_PROMPT = 'leo@kevred:~$ '
