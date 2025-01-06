
import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

const UniqueStudentIdentifier = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Unique Student Identifiers (USI)</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <p className="text-gray-700 mb-6">
            All students are required to have a Unique Student Identifier (USI). If you already have a USI, please provide it to us when you complete the Enrolment Form. If you do not have one, please provide us with permission to access or create your USI on your behalf when you complete the enrolment form, or apply for it yourself:
          </p>

          <div className="flex items-center gap-3 mb-6">
            <LinkIcon className="w-4 h-4 text-blue-600" />
            <a
              href="https://www.usi.gov.au/students"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Apply for USI
            </a>
          </div>

          <p className="text-gray-700 mb-6">
            Please note that under the Unique Student Identifiers Act 2014, we are unable to issue a qualification or a statement of attainment unless we have a valid USI or a notice of exemption from the registrar.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-4">How to Create a Unique Student Identifier (USI)</h2>
          <p className="text-gray-700 mb-4">
            Below is a video tutorial demonstrating how to create a USI.
          </p>

          <div className="relative w-full h-[80vh] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/QD8eXcYvlNk?autoplay=1&mute=1&rel=0"
              title="How to Create a Unique Student Identifier (USI)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueStudentIdentifier;
