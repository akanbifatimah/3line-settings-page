import { useState } from 'react'
import { DownloadCloud, Check, ChevronDown, AlertCircle } from 'lucide-react'
import { useRoles } from '@/hooks/useRoles'

function StatusBadge({ status }) {
  const isActive = status === 'Active'
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-lg leading-normal ${
        isActive
          ? 'bg-green-50 text-green-700'
          : 'bg-[#F2994A] text-[#F2F2F2]'
      }`}
    >
      {isActive
        ? <Check size={12} className="text-green-500" strokeWidth={1.5} />
        : <span className="w-1.5 h-1.5 rounded-full bg-[#F2994A] shrink-0" />
      }
      {status}
    </span>
  )
}

const AVATARS = [
  '/Avatar.svg',
  '/Avatar (1).svg',
  '/Avatar (2).svg',
  '/Avatar (3).svg',
  '/Avatar (4).svg',
]

function AvatarGroup({ count = 6 }) {
  const shown = Math.min(count, AVATARS.length)
  const extra = count - shown
  return (
    <div className="flex items-center">
      <div className="flex">
        {AVATARS.slice(0, shown).map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-6 h-6 rounded-full border-2 border-white object-cover"
            style={{ marginLeft: i === 0 ? 0 : '-8px', zIndex: shown - i }}
          />
        ))}
        {extra > 0 && (
          <div
            className="w-6 h-6 rounded-full bg-gray-50 border-2 border-white flex items-center justify-center"
            style={{ marginLeft: '-8px' }}
          >
            <span className="text-[10px] font-medium text-gray-600">+{extra}</span>
          </div>
        )}
      </div>
    </div>
  )
}

function SkeletonRow() {
  return (
    <>
      <tr>
        <td colSpan={6} className="p-0"><div className="h-px bg-gray-200" /></td>
      </tr>
      <tr>
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-md bg-gray-200 animate-pulse shrink-0" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
        </td>
        <td className="px-6 py-4 border-l border-gray-200">
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
        </td>
        <td className="px-6 py-4">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        </td>
        <td className="px-6 py-4">
          <div className="h-5 w-16 bg-gray-200 rounded-lg animate-pulse" />
        </td>
        <td className="px-6 py-3.5">
          <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
        </td>
        <td className="px-4 py-4">
          <div className="w-8 h-8 rounded-md bg-gray-200 animate-pulse" />
        </td>
      </tr>
    </>
  )
}

export default function RolesTableSection() {
  const { data: rolesTableData = [], isLoading, isError } = useRoles()
  const [selected, setSelected] = useState(new Set())
  const allSelected = rolesTableData.length > 0 && selected.size === rolesTableData.length

  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(rolesTableData.map((r) => r.id)))
  }

  function toggle(id) {
    const next = new Set(selected)
    next.has(id) ? next.delete(id) : next.add(id)
    setSelected(next)
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="flex sm:w-full w-[50%] sm:items-center flex-col sm:flex-row justify-between gap-4">
        <h2 className="text-lg font-medium text-gray-900 leading-[1.56]">User Roles</h2>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] hover:bg-gray-50 transition-colors shrink-0">
          <DownloadCloud size={20} className="text-gray-700" strokeWidth={1.67} />
          Download all
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-md shadow-[0_2px_4px_-2px_rgba(16,24,40,0.06),0_4px_8px_-2px_rgba(16,24,40,0.1)] overflow-x-auto">
        <table className="w-full min-w-160">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left">
                <div className="flex items-center gap-3">
                  <span
                    onClick={toggleAll}
                    className={`w-5 h-5 rounded-md border flex items-center justify-center cursor-pointer transition-colors ${
                      allSelected ? 'bg-purple-500 border-purple-500' : 'bg-white border-gray-300'
                    }`}
                  >
                    {allSelected && <Check size={12} className="text-white" strokeWidth={2} />}
                  </span>
                  <span className="text-xs font-medium text-gray-500 leading-normal flex items-center gap-1">
                    Name
                    <ChevronDown size={16} className="text-gray-500" strokeWidth={1.33} />
                  </span>
                </div>
              </th>
              <th className="px-6 py-3 text-left border-l border-gray-200">
                <span className="text-xs font-medium text-gray-500 leading-normal">Type</span>
              </th>
              <th className="px-6 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 leading-normal">Date created</span>
              </th>
              <th className="px-6 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 leading-normal">Status</span>
              </th>
              <th className="px-6 py-3 text-left">
                <span className="text-xs font-medium text-gray-500 leading-normal">Users</span>
              </th>
              <th className="px-6 py-3 text-left" />
            </tr>
          </thead>
          <tbody>
            {isLoading && Array.from({ length: 7 }).map((_, i) => <SkeletonRow key={i} />)}

            {isError && (
              <tr>
                <td colSpan={6} className="px-6 py-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <AlertCircle size={16} className="text-[#F2994A] shrink-0" strokeWidth={1.67} />
                    <span>Failed to load roles. Please try refreshing the page.</span>
                  </div>
                </td>
              </tr>
            )}

            {!isLoading && !isError && rolesTableData.map((row, idx) => (
              <>
                {idx > 0 && (
                  <tr key={`div-${row.id}`}>
                    <td colSpan={6} className="p-0"><div className="h-px bg-gray-200" /></td>
                  </tr>
                )}
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        onClick={() => toggle(row.id)}
                        className={`w-5 h-5 rounded-md border flex items-center justify-center cursor-pointer shrink-0 transition-colors ${
                          selected.has(row.id) ? 'bg-purple-500 border-purple-500' : 'bg-white border-gray-300'
                        }`}
                      >
                        {selected.has(row.id) && <Check size={12} className="text-white" strokeWidth={2} />}
                      </span>
                      <span className="text-sm font-medium text-gray-900 leading-[1.43]">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-l border-gray-200">
                    <span className="text-sm text-gray-500 leading-[1.43]">{row.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500 leading-[1.43]">{row.dateCreated}</span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-6 py-3.5">
                    <AvatarGroup count={row.users} />
                  </td>
                  <td className="px-4 py-4">
                    <button className="p-2.5 rounded-md hover:bg-gray-50 transition-colors">
                      <DownloadCloud size={20} className="text-gray-500" strokeWidth={1.67} />
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
