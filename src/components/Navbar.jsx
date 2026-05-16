import { NavLink } from 'react-router';
import { Home, Clock, BarChart2 } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl text-gray-900 tracking-tight">KeenKeeper</span>
          </div>

          {/* Navigation */}
          <nav className="flex space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#2b4a3f] text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </NavLink>

            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#2b4a3f] text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <Clock className="w-4 h-4 mr-2" />
              Timeline
            </NavLink>

            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#2b4a3f] text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <BarChart2 className="w-4 h-4 mr-2" />
              Stats
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
