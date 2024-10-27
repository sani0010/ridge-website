import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path to where your logo is located

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-10"> {/* Set background color and shadow */}
      <nav className="container mx-auto flex justify-between items-center p-4"> {/* Padding added here */}
        <Link to="/">
          <img src={logo} alt="Ridge International College Logo" className="h-16" /> {/* Logo size */}
        </Link>
        <ul className="flex space-x-8 justify-center items-center flex-grow"> {/* Center navigation items */}
          <li><Link to="/" className="text-black hover:text-[#F26722]">Home</Link></li>
          <li><Link to="/courses" className="text-black hover:text-[#F26722]">Courses</Link></li>
          <li><Link to="/about" className="text-black hover:text-[#F26722]">About</Link></li>
          <li><Link to="/admissions" className="text-black hover:text-[#F26722]">Admissions</Link></li>
          <li><Link to="/contact" className="text-black hover:text-[#F26722]">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
