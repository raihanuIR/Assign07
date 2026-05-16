import { NavLink } from 'react-router';
import { Home, Clock, BarChart2 } from 'lucide-react';
import logoIcon from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between sm:h-16 items-center py-4 sm:py-0">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mb-3 sm:mb-0">
            <img src={logoIcon} alt="KeenKeeper Logo" className="h-8 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center sm:justify-end gap-2">
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
};

export default Navbar;
