import React, { useEffect, useRef } from 'react';
import aqflogo from '../assets/aqflogo.jpg';
import velgtraining from '../assets/velgtraining.jpg';
import nrtlogo from '../assets/nrtlogo.png';
import eduworks from '../assets/eduworks.png';
import rtoworks from '../assets/rtoworks.png';
import commonwealthbank from '../assets/commonwealthbank.jpg';
import nswit from '../assets/nsit.png';
import allianzlogo from '../assets/allianzlogo.png';
import axcelerate from '../assets/axcelerate.png';

const affiliations = [
  { id: 1, image: aqflogo, name: 'AQF' },
  { id: 2, image: velgtraining, name: 'Velg Training' },
  { id: 3, image: nrtlogo, name: 'NRT' },
  { id: 4, image: eduworks, name: 'EduWorks' },
  { id: 5, image: rtoworks, name: 'RTO Works' },
  { id: 6, image: commonwealthbank, name: 'Commonwealth Bank' },
  { id: 8, image: nswit, name: 'NSW IT' },
  { id: 9, image: allianzlogo, name: 'Allianz' },
  { id: 10, image: axcelerate, name: 'Axcelerate' },
];

const AffiliationsPartners = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer) {
        // If scrolled to the end, reset scroll position
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scroll, 30); // Adjust scroll speed by changing interval

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className="bg-white py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center text-gray-900">
          Affiliations & Partners
        </h2>
        <div
          className="mt-4 sm:mt-6 md:mt-8 overflow-hidden flex space-x-4 sm:space-x-6 md:space-x-8"
          ref={scrollRef}
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
        >
          {[...affiliations, ...affiliations].map((affiliation, index) => (
            <div
              key={`${affiliation.id}-${index}`}
              className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 p-2 sm:p-3 md:p-4"
            >
              <img
                src={affiliation.image}
                alt={affiliation.name}
                className="mx-auto h-16 sm:h-20 md:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliationsPartners;
