import { assetUrl } from '../utils/assetUrl'

export interface AgencyLogoConfig {
  logo: string
  fallback: string
  scale?: number
  objectPosition?: string
}

const configs: Record<string, Omit<AgencyLogoConfig, 'logo'> & { file: string }> = {
  jim: { file: 'jim.png', fallback: 'JIM', scale: 1.05 },
  kkm: { file: 'kkm.png', fallback: 'KKM', scale: 1.65, objectPosition: 'center 32%' },
  lhdn: { file: 'lhdn.png', fallback: 'LHDN', scale: 0.92 },
  perkeso: { file: 'perkeso.png', fallback: 'PK', scale: 1.05 },
  japen: { file: 'japen.png', fallback: 'JAPEN', scale: 1.15 },
  met: { file: 'met.png', fallback: 'MET', scale: 1.1 },
  jpj: { file: 'jpj.png', fallback: 'JPJ', scale: 1.05 },
  kpm: { file: 'kpm.png', fallback: 'KPM', scale: 1.1, objectPosition: 'center 35%' },
  mynotifikasi: { file: 'mynotifikasi.png', fallback: 'MN', scale: 1.1 },
}

function toConfig(entry: (typeof configs)[string]): AgencyLogoConfig {
  return {
    logo: assetUrl(`logos/${entry.file}`),
    fallback: entry.fallback,
    scale: entry.scale,
    objectPosition: entry.objectPosition,
  }
}

export function getAgencyLogo(agencyId: string): AgencyLogoConfig {
  const entry = configs[agencyId] ?? configs.mynotifikasi
  return toConfig(entry)
}
