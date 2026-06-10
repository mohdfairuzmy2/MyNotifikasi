interface IconProps {
  active?: boolean
}

const activeColor = '#4B2C8C'
const inactiveColor = '#6B7280'

export function HomeIcon({ active }: IconProps) {
  const color = active ? activeColor : inactiveColor
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill={active ? '#EDE9FE' : 'none'}
      />
    </svg>
  )
}

export function BellIcon({ active }: IconProps) {
  const color = active ? activeColor : inactiveColor
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 16H6l-1.5-2.5A5 5 0 0118 8.5V7a4 4 0 00-8 0"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.5 18a1.5 1.5 0 01-3 0"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 3v1M5.5 5.5l.7.7M18.5 5.5l-.7.7"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GridIcon({ active }: IconProps) {
  const color = active ? activeColor : inactiveColor
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1" stroke={color} strokeWidth="1.8" />
      <rect x="14" y="4" width="6" height="6" rx="1" stroke={color} strokeWidth="1.8" />
      <rect x="4" y="14" width="6" height="6" rx="1" stroke={color} strokeWidth="1.8" />
      <rect x="14" y="14" width="6" height="6" rx="1" stroke={color} strokeWidth="1.8" />
    </svg>
  )
}

export function ProfileIcon({ active }: IconProps) {
  const color = active ? activeColor : inactiveColor
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" stroke={color} strokeWidth="1.8" />
      <path
        d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function HeaderBellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c-2.5 0-4.5 2-4.5 4.5V11l-1.5 2.5h12L17 11V7.5C17 5 15 3 12 3z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M10 16.5a2 2 0 004 0" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
