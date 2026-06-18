import { useState } from 'react'
import { Mail, Plus } from 'lucide-react'
import { activeRoles as initialRoles } from '@/data/roles'
import RoleCard from './RoleCard'

export default function UserRolesFormSection() {
  const [emailOption, setEmailOption] = useState('alternative')
  const [altEmail, setAltEmail] = useState('billing@untitledui.com')
  const [roles, setRoles] = useState(initialRoles)

  function selectRole(id) {
    setRoles(roles.map((r) => ({ ...r, selected: r.id === id })))
  }

  return (
    <section className="flex flex-col gap-5">
      {/* Section header */}
      <div className="flex flex-col gap-5 pb-px">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-medium text-gray-900 leading-[1.56]">User Roles</h2>
          <p className="text-sm text-gray-500 leading-[1.43]">
            Update your roles details and information.
          </p>
        </div>
        <div className="h-px bg-gray-200" />
      </div>

      {/* Connected email row */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col lg:w-50 shrink-0">
          <span className="text-sm font-medium text-gray-700 leading-[1.43]">Connected email</span>
          <span className="text-sm text-gray-500 leading-[1.43]">Select role account</span>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          {/* Radio: account email */}
          <label className="flex items-start gap-2 cursor-pointer">
            <span className="pt-0.5">
              <span
                className={`flex items-center justify-center w-4 h-4 rounded-full border mt-0.5 transition-colors ${
                  emailOption === 'account' ? 'bg-purple-50 border-purple-500' : 'bg-white border-gray-300'
                }`}
                onClick={() => setEmailOption('account')}
              >
                {emailOption === 'account' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                )}
              </span>
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-700 leading-[1.43]">My account email</span>
              <span className="text-sm text-gray-500 leading-[1.43]">olivia@untitledui.com</span>
            </div>
          </label>

          {/* Radio: alternative email */}
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <span
                className={`flex items-center justify-center w-4 h-4 rounded-full border shrink-0 transition-colors ${
                  emailOption === 'alternative' ? 'bg-purple-50 border-purple-500' : 'bg-white border-gray-300'
                }`}
                onClick={() => setEmailOption('alternative')}
              >
                {emailOption === 'alternative' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                )}
              </span>
              <span className="text-sm font-medium text-gray-700 leading-[1.43]">An alternative email</span>
            </label>

            <div className="pl-6">
              <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3.5 py-2.5 bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] focus-within:border-purple-300 focus-within:shadow-[0_0_0_4px_rgba(244,235,255,1),0_1px_2px_0_rgba(16,24,40,0.05)] transition-shadow">
                <Mail size={20} className="text-gray-500 shrink-0" strokeWidth={1.67} />
                <input
                  type="email"
                  value={altEmail}
                  onChange={(e) => setAltEmail(e.target.value)}
                  className="flex-1 text-base text-gray-900 bg-transparent outline-none placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-200" />

      {/* Active Role row */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col lg:w-50 shrink-0">
          <span className="text-sm font-medium text-gray-700 leading-[1.43]">Active Role</span>
          <span className="text-sm text-gray-500 leading-[1.43]">
            Select active role available to the user.
          </span>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-3">
            {roles.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                onSelect={selectRole}
                onEdit={(id) => console.log('edit', id)}
                onSetDefault={(id) => console.log('setDefault', id)}
              />
            ))}
          </div>

          <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors self-start">
            <Plus size={20} strokeWidth={1.67} />
            Add role to user
          </button>
        </div>
      </div>
    </section>
  )
}
