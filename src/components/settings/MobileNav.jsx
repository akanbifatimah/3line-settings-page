import { useState } from 'react'
import { Menu, X, Search, Home, BarChart2, Layers, CheckSquare, Flag, Users, LifeBuoy, Settings, LogOut } from 'lucide-react'

const allNavItems = [
  { icon: Home, label: 'Home' },
  { icon: BarChart2, label: 'Dashboard', badge: '10' },
  { icon: Layers, label: 'Projects' },
  { icon: CheckSquare, label: 'Tasks' },
  { icon: Flag, label: 'Reporting' },
  { icon: Users, label: 'Users' },
  { icon: LifeBuoy, label: 'Support' },
  { icon: Settings, label: 'Settings', active: true },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <header className="lg:hidden flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-linear-to-b from-gray-300 to-white border border-gray-300 flex items-center justify-center shadow-sm">
            <div className="w-4 h-4 rounded-full bg-linear-to-br from-purple-700 to-purple-600" />
          </div>
          <span className="text-gray-900 font-semibold text-base">Untitled UI</span>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Menu size={24} className="text-gray-500" strokeWidth={2} />
        </button>
      </header>

      {/* Overlay drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />

          <aside className="relative z-10 w-70 bg-white flex flex-col h-screen overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>

            {/* Top: logo + search + nav */}
            <div className="flex flex-col gap-6 pt-8">
              {/* Logo */}
              <div className="px-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-linear-to-b from-gray-300 to-white border border-gray-300 flex items-center justify-center shadow-sm">
                    <div className="w-4 h-4 rounded-full bg-linear-to-br from-purple-700 to-purple-600" />
                  </div>
                  <span className="text-gray-900 font-semibold text-base">Untitled UI</span>
                </div>
              </div>

              {/* Search */}
              <div className="px-6">
                <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3.5 py-2.5 bg-white">
                  <Search size={20} className="text-gray-500 shrink-0" strokeWidth={1.67} />
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 text-base text-gray-900 placeholder:text-gray-500 bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Nav */}
              <nav className="flex flex-col gap-1 px-4">
                {allNavItems.map(({ icon: Icon, label, badge, active }) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-3 py-2 rounded-sm cursor-pointer transition-colors ${
                      active ? 'bg-gray-50' : 'hover:bg-gray-50'
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
                ))}
              </nav>
            </div>

            {/* Bottom: featured card + divider + account */}
            <div className="flex flex-col gap-6 px-4 pb-8 mt-auto pt-6">
              {/* Featured card */}
              <div className="bg-gray-50 rounded-md p-5 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-gray-900">New features available!</p>
                  <p className="text-sm text-gray-500">
                    Check out the new dashboard view. Pages now load faster.
                  </p>
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
        </div>
      )}
    </>
  )
}
