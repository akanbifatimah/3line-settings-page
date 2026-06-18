import { Check, CreditCard, Users } from 'lucide-react'

export default function RoleCard({ role, onSelect, onEdit, onSetDefault }) {
  const { name, lastActive, selected } = role

  return (
    <div
      className={[
        'flex items-start gap-1 p-4 rounded-md border cursor-pointer transition-colors duration-150',
        selected ? 'bg-purple-50 border-purple-300' : 'bg-white border-gray-200 hover:bg-gray-50',
      ].join(' ')}
      onClick={() => onSelect(role.id)}
    >
      {/* Content */}
      <div className="flex gap-3 flex-1 min-w-0">
        {/* Icon */}
        <div className="w-11.5 h-8 rounded-sm bg-white border border-gray-100 flex items-center justify-center shrink-0">
          <Users size={22} className="text-gray-500" strokeWidth={2} />
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="flex flex-col">
            <span className={`text-sm font-medium leading-[1.43] ${selected ? 'text-purple-700' : 'text-gray-700'}`}>
              {name}
            </span>
            <span className={`text-sm leading-[1.43] ${selected ? 'text-purple-500' : 'text-gray-450'}`}>
              {lastActive}
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={(e) => { e.stopPropagation(); onSetDefault(role.id) }}
              className={`text-sm font-medium leading-[1.43] transition-colors ${
                selected ? 'text-purple-400 hover:text-purple-500' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Set as default
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onEdit(role.id) }}
              className="text-sm font-medium text-purple-600 hover:text-purple-700 leading-[1.43] transition-colors"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Check circle */}
      <div
        className={[
          'w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors',
          selected ? 'bg-purple-500 border-purple-500' : 'bg-white border-gray-300',
        ].join(' ')}
      >
        {selected && <Check size={10} className="text-white" strokeWidth={1.67} />}
      </div>
    </div>
  )
}
