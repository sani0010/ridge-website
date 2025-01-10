import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eventData } from '../data/eventData';
import { Calendar, Bell } from 'lucide-react';

// Sample pinned notices data
const pinnedNotices = [
  {
    id: 1,
    title: 'Sydney – 2025 January Orientation 1',
    date: 'January 15, 2025',
  },
  {
    id: 2,
    title: 'Melbourne – 2025 January Orientation 1',
    date: 'January 17, 2025',
  }
];


const NewsAndEvents = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  // Sort events by date in descending order and get the latest 3
  const latestEvents = eventData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="bg-white py-16 mb-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Important Notices Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#f26722]" />
              <h3 className="text-2xl font-semibold text-gray-900">Important Notices</h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {pinnedNotices.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-lg border-l-4 border-[#f26722] shadow-sm hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {notice.title}
                  </h3>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  {notice.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Events
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Stay updated with the latest happenings at Ridge International College
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestEvents.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleEventClick(item.id)}
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#3554a5]">
                    {item.date}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4">
                  <button className="text-[#3554a5] hover:text-[#f26722]">
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;