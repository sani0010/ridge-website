import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Ridge International College. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li><a href="/privacy-policy" className="hover:text-gray-200">Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="hover:text-gray-200">Terms of Service</a></li>
          <li><a href="/contact" className="hover:text-gray-200">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
