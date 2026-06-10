import { useState } from 'react'
import { getAgencyLogo } from '../data/agencyLogos'
import './AgencyAvatar.css'

interface AgencyAvatarProps {
  agencyId: string
  size?: 'sm' | 'md' | 'lg'
}

export function AgencyAvatar({ agencyId, size = 'sm' }: AgencyAvatarProps) {
  const { logo, fallback, scale = 1, objectPosition = 'center' } = getAgencyLogo(agencyId)
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`agency-avatar agency-avatar--${size}`}
      data-agency={agencyId}
      aria-hidden="true"
    >
      {!failed ? (
        <img
          src={logo}
          alt=""
          className="agency-avatar__img"
          style={{
            transform: `scale(${scale})`,
            objectPosition,
          }}
          onError={() => setFailed(true)}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="agency-avatar__fallback">{fallback}</span>
      )}
    </div>
  )
}
