import React, { useEffect, useRef } from 'react';
import aqflogo from '../assets/aqflogo.jpg';
import velgtraining from '../assets/velgtraining.jpg';
import nrtlogo from '../assets/nrtlogo.png';
import eduworks from '../assets/eduworks.png';
import rtoworks from '../assets/rtoworks.png';
import commonwealthbank from '../assets/commonwealthbank.jpg';
import nswit from '../assets/nsit.png';
import allianzlogo from '../assets/axcelerate.png';

const affiliations = [
  { id: 1, image: aqflogo, name: "AQF" },
  { id: 2, image: velgtraining, name: "Velg Training" },
  { id: 3, image: nrtlogo, name: "NRT" },
  { id: 4, image: eduworks, name: "EduWorks" },
  { id: 5, image: rtoworks, name: "RTO Works" },
  { id: 6, image: commonwealthbank, name: "Commonwealth Bank" },
  { id: 8, image: nswit, name: "NSW IT" },
  { id: 9, image: allianzlogo, name: "Allianz" },
];

const AffiliationsPartners = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0; // Reset scroll
        }
      }
    };

    const intervalId = setInterval(scroll, 30); // Adjust scroll speed by changing interval

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
          Affiliations & Partners
        </h2>
        <div
          className="mt-8 overflow-hidden flex space-x-8"
          ref={scrollRef}
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
        >
          {affiliations.map((affiliation) => (
            <div key={affiliation.id} className="flex-shrink-0 w-1/4 p-4">
              <img
                src={affiliation.image}
                alt={affiliation.name}
                className="mx-auto h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliationsPartners;
