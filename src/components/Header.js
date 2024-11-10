import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (dropdownName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    {
      name: 'Admissions',
      path: '/admissions',
      dropdownItems: [
        { name: 'Entry Requirements', path: '/requirements' },
        { name: 'Unique Student Identifiers', path: '/identifier' },
        { name: 'Schedule of Fees and Charges', path: '/schedule' },
      ]
    },
    {
      name: 'International Students',
      path: '/international',
      dropdownItems: [
        { name: 'Living and Studying in Australia', path: '/living' },
        { name: 'Student Support Services', path: '/services' },
        { name: 'Useful Information', path: '/info' },
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      dropdownItems: [
        { name: 'Forms', path: '/forms' },
        { name: 'Notices', path: '/notice' },
        { name: 'Policies', path: '/resources/policies' },
        { name: 'Events', path: '/events' },
        { name: 'Blogs', path: '/blogs' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const renderDropdown = (item) => (
    <div
      className="dropdown-menu absolute top-full left-1/2 transform -translate-x-1/2 
                 bg-white border rounded-lg shadow-lg w-64 z-50"
      onMouseEnter={() => handleMouseEnter(item.name)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="py-2 px-1">
        {item.dropdownItems.map((dropdownItem) => (
          <Link
            key={dropdownItem.path}
            to={dropdownItem.path}
            className="block px-4 py-2.5 text-gray-700 hover:text-[#F26722] hover:bg-gray-50 
                       rounded-md transition-all duration-150 text-sm mx-1"
          >
            {dropdownItem.name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center px-6 py-3">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Ridge International College Logo" className="h-16" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-5 justify-center items-center flex-grow">
            {navigationItems.map((item) => (
              <li key={item.path} className="relative">
                <div
                  className="pb-3"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`
                      flex items-center px-3 py-2 rounded-md transition-colors duration-200
                      ${location.pathname === item.path
                        ? 'text-[#F26722] font-semibold'
                        : 'text-gray-700 hover:text-[#F26722]'
                      }
                    `}
                  >
                    {item.name}
                    {item.dropdownItems && (
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.dropdownItems && activeDropdown === item.name && renderDropdown(item)}
                </div>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Login Button */}
          <div className="hidden lg:flex relative ml-6 group"
               onMouseEnter={() => setIsLoginHovered(true)}
               onMouseLeave={() => setIsLoginHovered(false)}>
            <a
              href="https://app.axcelerate.com/auth/user/"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center px-6 py-2.5 
                rounded-lg transition-all duration-300
                ${isLoginHovered 
                  ? 'bg-gradient-to-r from-[#F26722] to-[#ff8142] text-white shadow-lg' 
                  : 'bg-white text-[#F26722] border-2 border-[#F26722]'
                }
              `}
            >
              <span className="font-semibold text-sm">Student Login</span>
            </a>
            <div className={`
              absolute -bottom-12 left-1/2 transform -translate-x-1/2 
              bg-gray-800 text-white text-xs py-1 px-3 rounded-md whitespace-nowrap
              transition-all duration-200
              ${isLoginHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}
            `}>
              Access your student portal
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg px-6 py-4 space-y-4">
            <ul className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center px-3 py-2 rounded-md transition-colors duration-200
                      ${location.pathname === item.path
                        ? 'text-[#F26722] font-semibold'
                        : 'text-gray-700 hover:text-[#F26722]'
                      }
                    `}
                    onClick={toggleMobileMenu} // Close menu on item click
                  >
                    {item.name}
                  </Link>
                  {item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="block text-gray-600 hover:text-[#F26722] text-sm"
                          onClick={toggleMobileMenu} // Close menu on item click
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href="https://app.axcelerate.com/auth/user/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#F26722] to-[#ff8142] text-white rounded-lg"
              >
                Student Login
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
