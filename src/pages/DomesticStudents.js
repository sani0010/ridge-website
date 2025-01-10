import React, { useState, useEffect } from 'react';

const DomesticStudents = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#3554a5] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div
            className={`max-w-2xl transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Domestic Students</h1>
            <p className="text-xl text-white/90">
              Your pathway to success starts here. Join Ridge International College
              and benefit from quality education.
            </p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-4 mt-8 mb-12">
        <div className="bg-gray-100 rounded-md p-6">
          <h3 className="text-2xl font-semibold text-[#3554a5] mb-4">Useful Links</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li className="mb-2">
              <a
                href="https://skills.education.nsw.gov.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit Smart & Skilled Website
              </a>
            </li>
            <li>
              <a
                href="https://www.nsw.gov.au/education-and-training/vocational"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More About NSW Vocational Training
              </a>
            </li>
            <li>
              <a
                href="https://www2.education.vic.gov.au/pal/vet-delivered-school-students/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Victoria
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DomesticStudents;
