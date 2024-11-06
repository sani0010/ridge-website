import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
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
    }, 200); // 300ms delay before closing
  };

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    {
      name: 'International Students',
      path: '/international',
      dropdownItems: [
        { name: 'Living and Studying in Australia', path: '/international/living-studying' },
        { name: 'Student Support Services', path: '/international/support-services' },
        { name: 'Useful Information', path: '/international/useful-information' },
      ]
    },
    {
      name: 'Admissions',
      path: '/admissions',
      dropdownItems: [
        { name: 'Entry Requirements', path: '/requirements' },
        { name: 'Unique Student Identifiers', path: '/admissions/unique-student-identifiers' },
        { name: 'Schedule of Fees and Charges', path: '/schedule' },
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      dropdownItems: [
        { name: 'Forms', path: '/resources/forms' },
        { name: 'Notices', path: '/resources/notices' },
        { name: 'Policies', path: '/resources/policies' },
        { name: 'Events', path: '/resources/events' },
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
      {/* Added padding to create larger hover area */}
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
          
          <ul className="flex space-x-5 justify-center items-center flex-grow">
            {navigationItems.map((item) => (
              <li
                key={item.path}
                className="relative"
              >
                {/* Added padding-bottom to create larger hover area */}
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

          <div className="relative ml-6 group"
               onMouseEnter={() => setIsLoginHovered(true)}
               onMouseLeave={() => setIsLoginHovered(false)}>
            <a
              href="https://app.axcelerate.com/auth/user/"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center px-6 py-2.5 
                overflow-hidden relative
                group-hover:scale-105
                rounded-lg transition-all duration-300
                ${isLoginHovered 
                  ? 'bg-gradient-to-r from-[#F26722] to-[#ff8142] text-white shadow-lg' 
                  : 'bg-white text-[#F26722] border-2 border-[#F26722]'
                }
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 mr-2 transition-transform duration-300 ${
                  isLoginHovered ? 'rotate-12' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
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
      </div>
    </header>
  );
};

export default Header;