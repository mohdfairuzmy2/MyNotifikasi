export const agencyLogos: Record<string, { logo: string; fallback: string }> = {
  jim: { logo: '/logos/jim.png', fallback: 'JIM' },
  kkm: { logo: '/logos/kkm.png', fallback: 'KKM' },
  lhdn: { logo: '/logos/lhdn.png', fallback: 'LHDN' },
  perkeso: { logo: '/logos/perkeso.png', fallback: 'PK' },
  japen: { logo: '/logos/japen.png', fallback: 'JAPEN' },
  met: { logo: '/logos/met.png', fallback: 'MET' },
  jpj: { logo: '/logos/jpj.png', fallback: 'JPJ' },
  kpm: { logo: '/logos/kpm.png', fallback: 'KPM' },
  mynotifikasi: { logo: '/logos/mynotifikasi.png', fallback: 'MN' },
}

export function getAgencyLogo(agencyId: string) {
  return agencyLogos[agencyId] ?? { logo: '/logos/mynotifikasi.png', fallback: agencyId.slice(0, 3).toUpperCase() }
}
