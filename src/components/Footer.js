import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3554a5] text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* College Information */}
        <div>
          <h4 className="font-bold text-lg">Courselog University – CU</h4>
          <p>ABN: 18 624 550 741</p>
          <p>RTO No: 45472</p>
          <p>CRICOS Provider No: 03747K</p>
        </div>

        {/* Useful Links */}
        <div>
          <h5 className="font-bold text-lg">Useful Links</h5>
          <ul className="mt-2 space-y-1">
            <li><a href="https://www.homeaffairs.gov.au" className="hover:text-gray-200">www.homeaffairs.gov.au</a></li>
            <li><a href="https://www.australia.gov.au" className="hover:text-gray-200">www.australia.gov.au</a></li>
            <li><a href="https://www.ombudsman.gov.au" className="hover:text-gray-200">www.ombudsman.gov.au</a></li>
            <li><a href="https://www.asqa.gov.au" className="hover:text-gray-200">www.asqa.gov.au</a></li>
            <li><a href="https://www.education.gov.au" className="hover:text-gray-200">www.education.gov.au</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="font-bold text-lg">Resources</h5>
          <ul className="mt-2 space-y-1">
            <li><a href="/forms" className="hover:text-gray-200">Forms</a></li>
            <li><a href="/policy" className="hover:text-gray-200">Policies</a></li>
            <li><a href="/find-an-agent" className="hover:text-gray-200">Find an Agent</a></li>
            <li><a href="/become-agent" className="hover:text-gray-200">Become a Ridge Representative Agent</a></li>
            <li><a href="/notice" className="hover:text-gray-200">Notice</a></li>
            <li><a href="/events" className="hover:text-gray-200">Events</a></li>
            <li><a href="/news" className="hover:text-gray-200">News and Articles</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-3">
          <h5 className="font-bold text-lg">Contact Us</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {/* Melbourne Campus */}
            <div>
              <p className="font-semibold">Melbourne Campus</p>
              <p>Level 5/ 85 Queen Street, Melbourne VIC 3000, Australia</p>
              <p>+61 03 9620 7738</p>
              <p>admin@ridge.edu.au</p>
            </div>

            {/* Fitzroy Campus */}
            <div>
              <p className="font-semibold">Fitzroy Campus</p>
              <p>97 Smith Street, Fitzroy VIC 3065, Australia</p>
              <p>+61 03 9620 7738</p>
              <p>admin@ridge.edu.au</p>
            </div>

            {/* Sydney Campus */}
            <div>
              <p className="font-semibold">Sydney Campus</p>
              <p>Office 101, 30 Cowper Street, Parramatta, New South Wales 2150</p>
              <p>+61 03 9620 7738</p>
              <p>admin@ridge.edu.au</p>
            </div>
          </div>
        </div>

        {/* Footer Links */}

        <p className='flex justify-center text-center mt-4 md:col-span-3'>© Ridge International College. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
