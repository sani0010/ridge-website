import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail } from 'lucide-react';

const agentData = [
  {
    name: "Aadhar Holdings Pty.Ltd.",
    country: "Australia",
    location: "NSW, Parramatta",
    address: "2 O' Connell St.",
    email: "fsw.partnerships@firstsourceworld.com",
    phone: "+61 426 992 880"
  },
  {
    name: "Ausgateway Pty.Ltd.",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 614, Level 6, 343 Little Collins Street",
    email: "education@noblecareergurus.com",
    phone: "03 9078 6300"
  },
  {
    name: "Australian Migration and Education Consultancy",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Level 5 Suite 11, 530 Little Collins St",
    email: "education@ameconsultancy.com.au",
    phone: "03 9620 3195"
  },
  {
    name: "Bigstep Migration Visa Processing Services",
    country: "Philippines",
    location: "Tagum City, Davao Del Norte 8100",
    address: "JFM BLDG, City of Arcade of Tagum, Apokon Road",
    email: "apply@downundermigrationsolutions.com",
    phone: "+639156063362"
  },
  {
    name: "BMW Educational Consultancy Melbourne",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 218 Level 2, 530 Little Collins Street",
    email: "info@bmweducationmelbourne.com",
    phone: "03 9614 3440"
  },
  {
    name: "BSMate's Pty Ltd",
    country: "Australia",
    location: "QLD, Brisbane",
    address: "Suite 7D, Level 7, 190 Edward Street",
    email: "binfo@matesinternational.com.au",
    phone: "07 3012 9202"
  },
  {
    name: "Cloud Education and Visa Services PTY LTD",
    country: "Australia",
    location: "NSW, Sydney",
    address: "York St -49/51",
    email: "info@cloudedu.com.au",
    phone: "+61 418 873 636"
  },
  {
    name: "Danfe International Pty Ltd",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Level 6, 85 Queen St Melbourne",
    email: "apply@danfeinternational.com",
    phone: "+61 421 939 255"
  },
  {
    name: "Dot Education and Visa Services",
    country: "Nepal",
    location: "Bagmati, Kathmandu",
    address: "10 Baneshwor",
    email: "sujan@doteducationnepal.com",
    phone: "+977 01 4485411"
  },
  {
    name: "ECN TRAINING AND RECRUITING",
    country: "Australia",
    location: "VIC, Taylors Lakes",
    address: "05 Parr Court",
    email: "ecn@ecnauto.com.au",
    phone: "+61 418 579 949"
  },
  {
    name: "EDUCATION PLANET GLOBAL PTY LTD",
    country: "Australia",
    location: "WA, INGLEWOOD PERTH",
    address: "UNIT 16, 872 BEAUFORT STREET",
    email: "admissions@eplanetintl.com",
    phone: "+61 862 708 105"
  },
  {
    name: "Educonnecx Consultancy & Migration",
    country: "Australia",
    location: "NSW, Sydney",
    address: "Suite 23, L3 301 Castlereagh Street",
    email: "info@educonnecx.com.au",
    phone: "02 9182 0936"
  },
  {
    name: "ET EDUCATION AND VISA SERVICES PTY LTD",
    country: "Australia",
    location: "NSW, Hurstville",
    address: "Suite 132 & 133 10 Park Road",
    email: "admin@eteducation.com.au",
    phone: "02 9171 7740"
  },
  {
    name: "FEWA Education & Migration",
    country: "Australia",
    location: "NSW, Auburn",
    address: "Commercial 2 22 Northumberland Rd",
    email: "admissions@fewa.com.au",
    phone: "02 9055 5339"
  },
  {
    name: "First One Education Migration",
    country: "Australia",
    location: "NSW, Sydney",
    address: "Shop 27-31 Town Hall Square 464-480 Kent St",
    email: "info@firstedumigration.com.au",
    phone: "02 9267 0718"
  },
  {
    name: "Future Select Pty Ltd",
    country: "Australia",
    location: "NSW, Parramatta",
    address: "3/39 Marion Street",
    email: "admin@futureselect.com.au",
    phone: "02 8057 1415"
  },
  {
    name: "FUTUREXM PTY LTD",
    country: "Australia",
    location: "NSW, Sydney",
    address: "Level 13 Suite 5, 307 Pitt Street",
    email: "deepak@visaconnex.com",
    phone: "02 7804 6926"
  },
  {
    name: "Genuine Education & Visa Services",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "2.14/365 Little Collins Street",
    email: "info@genuineconsultancy.com.au",
    phone: "03 9670 1660"
  },
  {
    name: "Global Consulting and Business Services Pty Ltd",
    country: "Australia",
    location: "NSW, Haymarket",
    address: "Suite 474 311-315 Castlereagh Street",
    email: "info@globalconsult.com.au",
    phone: "02 8958 6749"
  },
  {
    name: "Global Heights Consulting",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 714, Exchange Tower, 530 Little Collins Street",
    email: "info@globalheights.com.au",
    phone: "+61 430 192 325"
  },
  {
    name: "Gorkha's Group Pty Ltd",
    country: "Australia",
    location: "NSW, Parramatta",
    address: "20 Hunter Street",
    email: "ceo@gorkhasgroup.com",
    phone: "+61 406 054 044"
  },
  {
    name: "Grace International Group",
    country: "Australia",
    location: "ACT, Canberra",
    address: "Suite 1.04/17-21 University Avenue City",
    email: "canberra@graceintlgroup.com",
    phone: "02 5114 2688"
  },
  {
    name: "Himalayan Education and Visa Services",
    country: "Australia",
    location: "NSW, Sydney",
    address: "Level 8, 804/307 Pitt Street",
    email: "info@himalayanedu.com",
    phone: "+61 405 297 017"
  },
  {
    name: "Innovative Creation Services Pvt Ltd",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 114 level 1 / 343 Little Collins Street",
    email: "ksapkota.ics@gmail.com",
    phone: "+61 452 569 177"
  },
  {
    name: "Interpass Vietnam Company Limited",
    country: "Vietnam",
    location: "Hanoi, 100000",
    address: "Hai Ba Trung district",
    email: "director@interpass.edu.vn",
    phone: "+84904509896"
  },
  {
    name: "KAM MIGRATION AND EDUCATION",
    country: "Australia",
    location: "NSW, Campbeltown",
    address: "Shop L080 Macarthur Square 200 Gilchrist Drive",
    email: "karol@kammigration.com.au",
    phone: "+61 468 944 832"
  },
  {
    name: "KBS VIC PTY LTD",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 1.01, Level 21, Queen Street",
    email: "bimal@goodluck.services",
    phone: "03 8630 3366"
  },
  {
    name: "KTM Consulting Group Pvt Ltd",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 1307 / 530 Little Collins Street",
    email: "admin@ktmconsultingroup.com",
    phone: "02 8021 1000"
  },
  {
    name: "Maximax Education and Migration Services",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite-1, Level 5 342 Flinders Street",
    email: "shankar@maximax.com.au",
    phone: "+61 451 232 076"
  },
  {
    name: "Merit Melbourne Education and Migration Services Pty Ltd",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 200, 530 Little Collins Street",
    email: "info.melbourne@meritservices.com.au",
    phone: "03 9972 8483"
  },
  {
    name: "MIRAGE CONSULTING PTY LTD",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 806, LVL 8 365 Little Collins Street",
    email: "info@themirage.com.au",
    phone: "+61 435 377 179"
  },
  {
    name: "New Horizon Migration and Education Solutions",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 7.10, Level 7, 365 Little Collins Street",
    email: "study.newhorizon@gmail.com",
    phone: "03 8394 9678"
  },
  {
    name: "OZ Migration",
    country: "Australia",
    location: "VIC, Cranbourne West",
    address: "3 Nandaly Pl",
    email: "gslegal111@gmail.com",
    phone: "+61 430 446 799"
  },
  {
    name: "Pictor Services",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 10.09, Level 10, 365 Little Collins St",
    email: "education@pictorservices.com",
    phone: "03 9600 2052"
  },
  {
    name: "Primo Education and Visa Services",
    country: "Australia",
    location: "NSW, Sydney",
    address: "Suite 01, Ground Floor 233 Castlereagh Street",
    email: "admin@primoedu.com.au",
    phone: "02 8056 9505"
  },
  {
    name: "Promise Services",
    country: "Australia",
    location: "NSW, Auburn",
    address: "Shop P11 &P10 62-72 Queen Street",
    email: "admissions@promiseservices.com.au",
    phone: "02 8664 4541"
  },
  {
    name: "Sajha Education Consultancy Pty Ltd",
    country: "Australia",
    location: "NSW, Sydney",
    address: "Suite 1004, Level 10 276 Pitt Street",
    email: "info@westlinkeducation.com.au",
    phone: "02 8970 2959"
  },
  {
    name: "Sincere Migration and Education",
    country: "Australia",
    location: "VIC, Melbourne CBD",
    address: "LVL 14 330 Collins Street",
    email: "info@sinceremigration.com.au",
    phone: "+61 420 958 374"
  },
  {
    name: "SNAP EDUCATION AND VISA SERVICES",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "3 ALBERT COATES LANE",
    email: "admission@snapeducations.com",
    phone: "03 8763 2894"
  },
  {
    name: "Solution Mode Consultancy Pty Ltd",
    country: "Australia",
    location: "VIC, Chelsea Heights",
    address: "Suite 38 1st Floor 93 Wells Road",
    email: "sandy.partola@solutionmode.com",
    phone: "+61 425 724 854"
  },
  {
    name: "Solve Education Consultancy",
    country: "Australia",
    location: "VIC, Coburg",
    address: "5/95 Bell Street",
    email: "info@solveeducation.com.au",
    phone: "03 9041 5055"
  },
  {
    name: "Student Destiny Education and Visa",
    country: "Australia",
    location: "VIC, Glenroy",
    address: "Suite 10 785 Pascoe Vale Road",
    email: "info@studentdestiny.com.au",
    phone: "+61 420 472 727"
  },
  {
    name: "Sydney Express Education Consultancy Pty Ltd",
    country: "Australia",
    location: "NSW, Sydney",
    address: "SUITE 301, LEVEL 3, 491 KENT ST SYDNEY",
    email: "admissions@sydneyxpress.com",
    phone: "02 9299 1908"
  },
  {
    name: "The Trustee for Grace International Australia Trust",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 302C, Level 3 The Block Arcade 282 Collins ST",
    email: "dipak@graceintlgroup.com",
    phone: "03 9662 9020"
  },
  {
    name: "Tilicho Consulting Group",
    country: "Australia",
    location: "NSW, Sydney",
    address: "1003 Market Street",
    email: "info@tilicho.com.au",
    phone: "02 8592 5506"
  },
  {
    name: "Tingo Education Australia Pty Ltd",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 504 Level 5 / 530 Little Collins Street",
    email: "enrolments@tingoeducation.com.au",
    phone: "+61 396 146 615"
  },
  {
    name: "Uniq Turn Pty Ltd",
    country: "Australia",
    location: "NSW, Parramatta",
    address: "Suite 42 48/50 George Street",
    email: "admin@uniqturn.com.au",
    phone: "+61 405 450 451"
  },
  {
    name: "V & L ASSOCIATES PTY LTD",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Suite 1, Level 2, 85 Queen Street",
    email: "laxmi@mymavenedu.com",
    phone: "+61 451 23 5562"
  },
  {
    name: "Vantage Education and Migration",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "39 Finsbury Crescent, Manor Lakes",
    email: "info@vemw.com.au",
    phone: "+61 433 117 305"
  },
  {
    name: "Victory International and Migration Services",
    country: "Australia",
    location: "NSW, Sydney",
    address: "Level 1 Suite 2/18 Fushcombe road, Blacktown",
    email: "admissions@victorymigration.com.au",
    phone: "02 9621 2808"
  },
  {
    name: "Visa Direct Migration and Education Services",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Level 12, Suite 1212/530 Little Collins Street",
    email: "kiranvisadirect@gmail.com",
    phone: "03 9973 4873"
  },
  {
    name: "Winners Circle Education and Visa Services Pty Ltd",
    country: "Australia",
    location: "NSW, Auburn",
    address: "32/6171 Queen Street",
    email: "admin@winnersedu.com.au",
    phone: "+61 425 454 988"
  },
  {
    name: "World Connect Consultancy Services",
    country: "Philippines",
    location: "Bicol, Legazpi City",
    address: "2F RRL Bldg LANDCO Business Park",
    email: "cathy@worldconnectph.com",
    phone: "+63 9177108743"
  },
  {
    name: "XPERT Education Center",
    country: "Thailand",
    location: "Chiang Rai, Mueang Chiang Rai",
    address: "97/22 Village No. 2, Thasud Sub-district",
    email: "info@xpert-edu.com",
    phone: "+66 635256656"
  },
  {
    name: "Younis Visa Advisor Services",
    country: "Philippines",
    location: "Bicol, Camarines Sur",
    address: "Naga City",
    email: "admin@younisvisaadvisor.com",
    phone: "+63 9771061275"
  },
  {
    name: "ZEN Migration & Education Services",
    country: "Australia",
    location: "VIC, Melbourne",
    address: "Level 8 99 Queen Street",
    email: "education@zenmigration.com.au",
    phone: "03 9939 1375"
  }
];

const FindAgent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');

  // Get unique countries for filter dropdown
  const countries = ['All', ...new Set(agentData.map(agent => agent.country))];

  // Filter agents based on search and country selection
  const filteredAgents = agentData.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'All' || agent.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Find an Agent</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or location..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{agent.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">{agent.location}</p>
                      <p className="text-gray-600">{agent.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <a href={`mailto:${agent.email}`} className="text-blue-600 hover:text-blue-800 break-all">
                      {agent.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <a href={`tel:${agent.phone}`} className="text-blue-600 hover:text-blue-800">
                      {agent.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No agents found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindAgent;