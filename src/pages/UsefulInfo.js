import React from 'react';
import { MapPin, Phone, Link as LinkIcon, AlertCircle } from 'lucide-react';

const UsefulInfo = () => {
  const amenities = [
    {
      title: "Nearest Metropolitan Train Stations",
      details: [
        "Melbourne Central Train Station",
        "Flinders Street Train Station"
      ]
    },
    {
      title: "Local Taxi Companies",
      details: [
        { name: "13CABS", website: "https://13cabs.com.au", phone: "132 227" },
        { name: "Silvertop", website: "https://silvertop.com.au", phone: "131 008" }
      ]
    },
    {
      title: "Transport",
      details: [
        "Public Transport Information for Trains, Trams and Buses",
        {
          name: "PTV Melbourne",
          website: "https://www.ptv.vic.gov.au/",
          description: "Download the free smartphone app and try the journey planner"
        },
        "Ridge International College is within Melbourne’s 'Free Tram Zone' (includes all areas of the CBD). You do not need to buy a ticket if you are getting on and off within the CBD.",
        "For all other travel on buses, trams, and trains, you must carry a MYKI card, pay for journeys, and ensure you 'tap on' and 'tap off'. More info: http://ptv.vic.gov.au/tickets/myki/"
      ]
    },
    {
      title: "Libraries",
      details: [
        { name: "City Library", address: "253 Flinders Lane, Melbourne, VIC 3000", phone: "03 9658 950", website: "https://www.melbourne.vic.gov.au" },
        { name: "State Library of Victoria", address: "328 Swanston St, Melbourne, VIC 3000", phone: "03 8664 7000", website: "https://www.slv.vic.gov.au/" }
      ]
    },
    {
      title: "Health Services",
      details: [
        { name: "National Health Services Directory", phone: "1800 022 222", website: "https://www.healthdirect.gov.au/australian-health-services" }
      ]
    }
  ];

  const emergencyContacts = [
    { name: "Ridge International College", phone: "0430 478 330", description: "After hours emergency contact" },
    { name: "Police, Fire, Ambulance", phone: "000", description: "Emergency Telephone Number" },
    { name: "Department of Home Affairs", phone: "131 881" }
  ];

  const additionalContacts = [
    {
      title: "Hospital",
      name: "St Vincent’s Hospital Melbourne",
      address: "41 Victoria Parade, Fitzroy, VIC, 3065, Australia",
      phone: "03 9231 2211"
    },
    {
      title: "Police Station",
      name: "Melbourne East Police Station",
      address: "226 Flinders Ln, Melbourne, VIC, 3000, Australia",
      phone: "(03) 9637 1100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Useful Information</h1>
        
        {/* Amenities Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Local Amenities</h2>
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">{amenity.title}</h3>
              <ul className="space-y-2">
                {amenity.details.map((detail, idx) =>
                  typeof detail === "string" ? (
                    <li key={idx} className="text-gray-600">{detail}</li>
                  ) : (
                    <li key={idx} className="flex items-center gap-3">
                      <LinkIcon className="w-4 h-4 text-blue-600" />
                      <a href={detail.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {detail.name}
                      </a>
                      {detail.phone && (
                        <span className="text-gray-600">| Phone: {detail.phone}</span>
                      )}
                      {detail.description && <p className="text-gray-600">{detail.description}</p>}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Contacts Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Emergency Contacts</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <li key={index} className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="text-xl font-bold text-blue-900">{contact.name}</p>
                    <p className="text-gray-600">Phone: {contact.phone}</p>
                    {contact.description && <p className="text-gray-600">{contact.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Contacts Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Additional Contacts</h2>
          {additionalContacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-blue-900">{contact.title}</h3>
              <p className="text-gray-600">{contact.name}</p>
              <p className="text-gray-600">{contact.address}</p>
              <p className="text-gray-600">Phone: {contact.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefulInfo;
