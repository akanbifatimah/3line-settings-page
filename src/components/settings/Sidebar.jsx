import {
  Home, BarChart2, Layers, CheckSquare, Flag, Users,
  LifeBuoy, Settings, Search, LogOut,
} from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: BarChart2, label: 'Dashboard', badge: '10' },
  { icon: Layers, label: 'Projects' },
  { icon: CheckSquare, label: 'Tasks' },
  { icon: Flag, label: 'Reporting' },
  { icon: Users, label: 'Users' },
]

function NavItem({ icon: Icon, label, badge, active }) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-sm cursor-pointer transition-colors duration-150 hover:bg-gray-50 ${
        active ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={24} className="text-gray-500" strokeWidth={2} />
        <span className={`text-base font-medium leading-normal ${active ? 'text-gray-900' : 'text-gray-700'}`}>
          {label}
        </span>
      </div>
      {badge && (
        <span className="bg-gray-100 text-gray-700 text-sm font-medium px-2.5 py-0.5 rounded-lg">
          {badge}
        </span>
      )}
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col justify-between w-70 shrink-0 bg-white border-r border-gray-200 min-h-screen">
      <div className="flex flex-col gap-6 pt-8">
        {/* Logo */}
        <div className="px-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-linear-to-b from-gray-300 to-white border border-gray-300 flex items-center justify-center shadow-sm">
              <div className="w-4 h-4 rounded-full bg-linear-to-br from-purple-700 to-purple-600" />
            </div>
            <span className="text-gray-900 font-semibold text-base tracking-tight">Untitled UI</span>
          </div>
        </div>

        {/* Search */}
        <div className="px-6">
          <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3.5 py-2.5 bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] focus-within:border-purple-300 focus-within:shadow-[0_0_0_4px_rgba(244,235,255,1),0_1px_2px_0_rgba(16,24,40,0.05)] transition-shadow">
            <Search size={20} className="text-gray-500 shrink-0" strokeWidth={1.67} />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 text-base text-gray-900 placeholder:text-gray-500 bg-transparent outline-none font-normal"
            />
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 px-4">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} active={false} />
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-6 px-4 pb-8">
        <nav className="flex flex-col gap-1">
          <NavItem icon={LifeBuoy} label="Support" active={false} />
          <NavItem icon={Settings} label="Settings" active />
        </nav>

        {/* Featured card */}
        <div className="bg-gray-50 rounded-md p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-900">New features available!</p>
            <p className="text-sm text-gray-500">Check out the new dashboard view. Pages now load faster.</p>
          </div>
          <div className="bg-purple-100 h-34 rounded-sm overflow-hidden">
            <img src="/3line-woman.svg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3">
            <button className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
              Dismiss
            </button>
            <button className="text-sm font-medium text-purple-600 transition-colors hover:text-purple-700">
              What&apos;s new?
            </button>
          </div>
        </div>

        <div className="h-px bg-gray-200" />

        {/* Account */}
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-300 flex items-center justify-center text-purple-500 font-semibold text-sm shrink-0">
              OR
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">Olivia Rhye</span>
              <span className="text-sm text-gray-500">olivia@untitledui.com</span>
            </div>
          </div>
          <button className="p-2 rounded-md hover:bg-gray-50 transition-colors">
            <LogOut size={20} className="text-gray-500" strokeWidth={1.67} />
          </button>
        </div>
      </div>
    </aside>
  )
}
