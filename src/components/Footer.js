import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/white.png';
import bridgeBackground from '../assets/bridge.jpg';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Clipboard 
} from 'lucide-react';

const Footer = () => {
  const campuses = [
    { 
      name: "Melbourne Campus", 
      address: "Level 5/ 85 Queen Street, Melbourne VIC 3000",
      phone: "+61 03 9620 7738", 
      email: "admin@ridge.edu.au",
      googleMapsLink: "https://maps.google.com/maps?q=85+Queen+Street,+Melbourne+VIC+3000,+Australia"
    },
    { 
      name: "Fitzroy Campus", 
      address: "97 Smith Street, Fitzroy VIC 3065", 
      phone: "+61 03 9620 7738", 
      email: "admin@ridge.edu.au",
      googleMapsLink: "https://maps.google.com/maps?q=97+Smith+Street,+Fitzroy+VIC+3065,+Australia"
    },
    { 
      name: "Sydney Campus", 
      address: "Office 101, 30 Cowper Street, Parramatta, NSW 2150", 
      phone: "+61 03 9620 7738", 
      email: "admin@ridge.edu.au",
      googleMapsLink: "https://maps.google.com/maps?q=30+Cowper+Street,+Parramatta,+NSW+2150,+Australia"
    }
  ];

  return (
    <footer 
      className="relative bg-gradient-to-br from-[#2c3e50] to-[#34495e] text-white py-16 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bridgeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Blur and Overlay Effect */}
      <div className="absolute inset-0 bg-[#14202c] opacity-85 backdrop-blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {/* College Logo and Description */}
          <div className="col-span-full md:col-span-1 flex flex-col items-start">
            <div className="flex items-center mb-6 w-full">
              <Link to="/" className="block mx-auto md:mx-0">
                <img 
                  src={logo}
                  alt="Ridge International College Logo" 
                  className="max-h-32 max-w-full w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-gray-300 text-base ml-3 leading-relaxed">
              ABN: <span className="text-lg">{'18 624 550 741'}</span><br />
              RTO No: <span className="text-lg">{'45472'}</span><br />
              CRICOS Provider No: <span className="text-lg">{'03747K'}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#f26722] pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {[{ name: "Home Affairs", url: "https://www.homeaffairs.gov.au" },
                { name: "Australia Gov", url: "https://www.australia.gov.au" },
                { name: "Ombudsman", url: "https://www.ombudsman.gov.au" },
                { name: "ASQA", url: "https://www.asqa.gov.au" },
                { name: "Education Gov", url: "https://www.education.gov.au" }]
                .map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {link.name}
                    </a>
                  </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#f26722] pb-2">Resources</h4>
            <ul className="space-y-3">
              {[{ name: "Forms", url: "/forms" },
                { name: "Policies", url: "/policy" },
                { name: "Find an Agent", url: "/find-an-agent" },
                { name: "Become Agent", url: "/become-agent" },
                { name: "Notice", url: "/notice" },
                { name: "Events", url: "/events" },
                { name: "News", url: "/news" }]
                .map((resource) => (
                  <li key={resource.name}>
                    <a 
                      href={resource.url} 
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <Clipboard className="mr-2 h-4 w-4" />
                      {resource.name}
                    </a>
                  </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#f26722] pb-2">Contact Us</h4>
            <div className="space-y-6">
              {campuses.map((campus) => (
                <div key={campus.name} className="bg-[#2c3e50]/70 rounded-lg p-4">
                  <h5 className="font-medium text-white mb-2">{campus.name}</h5>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p className="flex items-center">
                      <a 
                        href={campus.googleMapsLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-white transition-colors"
                      >
                        <MapPin className="mr-2 h-4 w-4 text-[#f26722]" /> {campus.address}
                      </a>
                    </p>
                    <p className="flex items-center">
                      <a 
                        href={`tel:${campus.phone.replace(/\s+/g, '')}`}
                        className="flex items-center hover:text-white transition-colors"
                      >
                        <Phone className="mr-2 h-4 w-4 text-[#f26722]" /> {campus.phone}
                      </a>
                    </p>
                    <p className="flex items-center">
                      <a 
                        href={`mailto:${campus.email}`}
                        className="flex items-center hover:text-white transition-colors"
                      >
                        <Mail className="mr-2 h-4 w-4 text-[#f26722]" /> {campus.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-[#f26722] text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Ridge International College. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;