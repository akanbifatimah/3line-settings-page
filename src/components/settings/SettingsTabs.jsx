const TABS = [
  'My details', 'Profile', 'Password', 'Team', 'Plan',
  'Roles', 'Notifications', 'Integrations', 'API',
]

export default function SettingsTabs({ active, onChange }) {
  return (
    <div className="flex shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] overflow-x-auto">
      {TABS.map((tab, i) => {
        const isFirst = i === 0
        const isLast = i === TABS.length - 1
        const isCurrent = tab === active

        const radiusClass = isFirst ? 'rounded-l-md' : isLast ? 'rounded-r-md' : 'rounded-none'
        const outerBorder = isFirst || isLast ? 'border border-gray-300' : 'border-t border-b border-gray-300'
        const innerBorder = !isFirst && !isLast ? 'border-l border-gray-300' : ''

        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={[
              'flex flex-col items-center shrink-0 cursor-pointer transition-colors duration-150',
              radiusClass,
              outerBorder,
              innerBorder,
              isCurrent ? 'bg-gray-50' : 'bg-white hover:bg-gray-50',
            ].join(' ')}
          >
            <div className="h-px w-full bg-gray-300" />
            <span
              className={`px-4 py-2.5 text-sm font-medium leading-[1.43] whitespace-nowrap ${
                isCurrent ? 'text-gray-800' : 'text-gray-700'
              }`}
            >
              {tab}
            </span>
            <div className="h-px w-full bg-gray-300" />
          </button>
        )
      })}
    </div>
  )
}
