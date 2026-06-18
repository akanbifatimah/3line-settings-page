import Sidebar from '@/components/settings/Sidebar'
import MobileNav from '@/components/settings/MobileNav'
import SettingsPage from '@/pages/SettingsPage'

export default function App() {
  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <MobileNav />
        <SettingsPage />
      </div>
    </div>
  )
}
