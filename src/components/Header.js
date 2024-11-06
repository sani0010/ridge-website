import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path to where your logo is located

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-gray-50 shadow sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <img src={logo} alt="Ridge International College Logo" className="h-16" />
        </Link>
        <ul className="flex space-x-8 justify-center items-center flex-grow">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Courses', path: '/courses' },
            { name: 'Admissions', path: '/admissions' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${
                  location.pathname === item.path ? 'text-[#F26722] font-semibold' : 'text-black'
                } hover:text-[#F26722]`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://app.axcelerate.com/auth/user/" 
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 bg-[#F26722] text-white rounded-full hover:bg-[#d4551f] transition-colors"
        >
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
