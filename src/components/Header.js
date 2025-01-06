import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png'

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  const handleNavClick = () => {
    scrollToTop();
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Courses', 
      path: '/courses',
      dropdownItems: [
        { name: 'ELICOS General English', path: '/course/general-english'},
        { name: 'Aged Care', path: '/course/aged-care'},
        { name: 'Leadership and Management', path: '/course/leadership-and-management'},
        { name: 'Community Service', path: '/course/community-service'},
        { name: 'Early Childhood Education and Care', path: '/course/early-childhood-education'},
        { name: 'Disability Care', path: '/course/disability-care'},
        { name: 'Information technology', path: '/course/information-technology'},
        { name: 'Commercial Cookery and Hospitality Management', path: '/course/commercial-cookery-hospitality-management'}
      ]
     },
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
      path: '/living',
      dropdownItems: [
        { name: 'Living and Studying in Australia', path: '/living' },
        { name: 'Student Support Services', path: '/services' },
        { name: 'Useful Information', path: '/info' },
      ]
    },
    {
      name: 'Resources',
      path: '/forms',
      dropdownItems: [
        { name: 'Forms', path: '/forms' },
        { name: 'Notices', path: '/notice' },
        { name: 'Policies', path: '/policy' },
        { name: 'Events', path: '/events' },
        { name: 'Blogs', path: '/blogs' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const renderDropdown = (item) => (
    <div
      className="dropdown-menu absolute top-full left-1/2 transform -translate-x-1/2 
                 bg-white rounded-xl shadow-2xl w-72 z-50
                 border border-gray-100 backdrop-blur-lg"
      onMouseEnter={() => handleMouseEnter(item.name)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="py-2">
        <div className="px-4 pb-2 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-400">{item.name}</h3>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {item.dropdownItems.map((dropdownItem) => (
            <Link
              key={dropdownItem.path}
              to={dropdownItem.path}
              onClick={handleNavClick}
              className="group flex items-center justify-between px-4 py-2 hover:bg-gray-50 
                         transition-all duration-200"
            >
              <span className="text-gray-700 group-hover:text-[#F26722] 
                             transition-colors duration-200 text-sm">
                {dropdownItem.name}
              </span>
              <ChevronRight 
                className="w-4 h-4 text-gray-400 group-hover:text-[#F26722] 
                           transform group-hover:translate-x-1 transition-all duration-200" 
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center px-6 py-2">
          <Link to="/" className="flex-shrink-0" onClick={handleNavClick}>
            <img src={logo} alt="Ridge International College Logo" className="h-14" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-5 justify-center items-center flex-grow">
            {navigationItems.map((item) => (
              <li key={item.path} className="relative">
                <div
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
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
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200" 
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>

          {/* Login Button */}
          <div 
            className="hidden lg:flex relative ml-6 group"
            onMouseEnter={() => setIsLoginHovered(true)}
            onMouseLeave={() => setIsLoginHovered(false)}
          >
            <a
              href="https://app.axcelerate.com/auth/user/"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center px-6 py-2 
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
              absolute -bottom-10 left-1/2 transform -translate-x-1/2 
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
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="h-[72px] bg-white shadow-md flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <Link to="/" onClick={handleNavClick}>
                  <img src={logo} alt="Ridge International College Logo" className="h-14" />
                </Link>
              </div>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center gap-2 text-gray-600"
              >
                <span className="text-sm font-medium"></span>
                <X size={24} />
              </button>
            </div>
            
            <div className="overflow-y-auto h-[calc(100vh-72px)] pb-6">
              <div className="px-4 py-4 space-y-4">
                <ul className="flex flex-col space-y-1">
                  {navigationItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`
                          flex items-center px-3 py-2 rounded-md transition-colors duration-200
                          ${location.pathname === item.path
                            ? 'text-[#F26722] font-semibold bg-orange-50'
                            : 'text-gray-700 hover:text-[#F26722] hover:bg-gray-50'
                          }
                        `}
                        onClick={handleNavClick}
                      >
                        {item.name}
                      </Link>
                      {item.dropdownItems && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="block pl-4 pr-3 py-2 text-gray-600 hover:text-[#F26722] 
                                       hover:bg-gray-50 rounded-r-md text-sm transition-colors duration-200"
                              onClick={handleNavClick}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-gray-100">
                  <a
                    href="https://app.axcelerate.com/auth/user/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-2 
                             bg-gradient-to-r from-[#F26722] to-[#ff8142] text-white rounded-lg
                             transition-all duration-200 hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
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
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;