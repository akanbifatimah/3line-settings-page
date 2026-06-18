import { useState } from 'react'
import SettingsTabs from '@/components/settings/SettingsTabs'
import UserRolesFormSection from '@/components/settings/UserRolesFormSection'
import RolesTableSection from '@/components/settings/RolesTableSection'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('Roles')

  return (
    <main className="flex-1 bg-gray-50 flex flex-col gap-8 py-8 pb-12">
      {/* Page header + tabs */}
      <div className="flex flex-col gap-6 px-4 lg:px-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl lg:text-3xl font-medium text-gray-900 leading-snug">
            Settings
          </h1>
          <p className="text-base text-gray-500 leading-normal">
            Manage your team and preferences here.
          </p>
        </div>
        <SettingsTabs active={activeTab} onChange={setActiveTab} />
      </div>

      {/* Roles tab content */}
      {activeTab === 'Roles' && (
        <div className="flex flex-col gap-6 px-4 lg:px-8">
          <UserRolesFormSection />
          <RolesTableSection />
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab !== 'Roles' && (
        <div className="flex items-center justify-center h-48 px-4 lg:px-8">
          <p className="text-sm text-gray-500">{activeTab} — coming soon</p>
        </div>
      )}
    </main>
  )
}
