// Portfolio content — typed, kept separate from components.

export interface Profile {
  name: string
  role: string
  bio: string
}

export interface WorkItem {
  period: string
  name: string
  description: string
}

export interface Link {
  label: string
  href: string
  display: string
}

export const profile: Profile = {
  name: 'Léo Marquand',
  role: 'Software & infrastructure engineer',
  bio: 'I build low-level infrastructure on Solana — RPC load balancing, validator operations and high-performance networking. Co-founder at Kevred.',
}

export const now: string[] = [
  'Building Kevred — an RPC load balancer and validator infrastructure on Solana.',
  'Running mainnet & testnet validators, selected by Marinade.',
  'DoubleZero Ambassador, active in the Ferno community.',
  'Based in Rennes, France. Remote-friendly.',
]

export const work: WorkItem[] = [
  {
    period: '2023 — now',
    name: 'Kevred',
    description: 'RPC load balancing and validator ops on Solana. XDP / NUMA on EPYC.',
  },
  {
    period: '2024 — now',
    name: 'Marinade Select',
    description: 'Validator onboarding. PSR / SAM, bond mechanics, stake auction.',
  },
  {
    period: '2023',
    name: 'BlockEvent',
    description: 'NFT ticket marketplace with an on-chain VRF lottery. School of Solana S8.',
  },
  {
    period: '2024',
    name: 'gmgm.fr',
    description: 'Front-end web app, shipped solo.',
  },
]

export const socials: Link[] = [
  { label: 'Email', href: 'mailto:leo@kevred.com', display: 'leo@kevred.com' },
  { label: 'GitHub', href: 'https://github.com/lmqrd', display: 'github.com/lmqrd' },
  { label: 'X', href: 'https://x.com/lmqrd', display: '@lmqrd' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/lmqrd', display: 'linkedin.com/in/lmqrd' },
]
