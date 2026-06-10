import type { NotificationFilter } from '../types'
import { useTranslations } from '../hooks/useTranslations'
import './FilterTabs.css'

const filters: NotificationFilter[] = ['all', 'important', 'services', 'promotions']

interface FilterTabsProps {
  active: NotificationFilter
  onChange: (filter: NotificationFilter) => void
}

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  const t = useTranslations()

  return (
    <div className="filter-tabs" role="tablist">
      {filters.map((filter) => (
        <button
          key={filter}
          role="tab"
          aria-selected={active === filter}
          className={`filter-tabs__tab ${active === filter ? 'active' : ''}`}
          onClick={() => onChange(filter)}
        >
          {t.home.filters[filter]}
        </button>
      ))}
    </div>
  )
}
