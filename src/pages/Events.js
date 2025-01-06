import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { eventData } from '../data/eventData';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState('past');

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Filter events based on date and selected tab
  const filterEvents = () => {
    let filteredEvents = eventData;

    // First apply date selection filter if a date is selected
    if (selectedDate) {
      filteredEvents = eventData.filter(
        (item) => new Date(item.date).toDateString() === selectedDate.toDateString()
      );
    } else {
      // If no date is selected, filter based on tab
      if (activeTab === 'upcoming') {
        filteredEvents = eventData.filter(
          (item) => new Date(item.date) >= today
        );
      } else {
        filteredEvents = eventData.filter(
          (item) => new Date(item.date) < today
        );
      }
    }

    // Sort events by date
    return filteredEvents.sort((a, b) => {
      if (activeTab === 'upcoming') {
        return new Date(a.date) - new Date(b.date);
      }
      return new Date(b.date) - new Date(a.date);
    });
  };

  const eventsToDisplay = filterEvents();

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Calendar Column */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-40 w-full">
              <div className="flex items-center mb-6">
                <CalendarIcon className="w-8 h-8 text-[#3554a5] mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Event Calendar
                </h2>
              </div>
              <Calendar
                className="w-full h-[350px] text-lg custom-calendar"
                onChange={handleDateChange}
                value={selectedDate}
                tileClassName={({ date }) => {
                  const isSunday = date.getDay() === 0;
                  const hasEvents = eventData.some(
                    (item) => new Date(item.date).toDateString() === date.toDateString()
                  );
                  return [
                    isSunday ? 'text-red-500 font-bold' : '',
                    hasEvents ? 'bg-[#3554a5] text-[#f26722] rounded-full' : ''
                  ].filter(Boolean).join(' ');
                }}
              />
            </div>
          </div>

          {/* Events Column */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                  College Events
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Explore the exciting events happening at Ridge International College
                </p>
              </div>

              {/* Tabs */}
              {!selectedDate && (
                <div className="flex justify-center space-x-4 mb-6">
                  <button
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                      activeTab === 'upcoming'
                        ? 'bg-[#3554a5] text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveTab('upcoming')}
                  >
                    Upcoming Events
                  </button>
                  <button
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                      activeTab === 'past'
                        ? 'bg-[#3554a5] text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveTab('past')}
                  >
                    Past Events
                  </button>
                </div>
              )}

              {/* Event Cards */}
              {eventsToDisplay.length > 0 ? (
                <div className="space-y-6">
                  {eventsToDisplay.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleEventClick(item.id)}
                      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="md:w-1/3 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover object-center"
                        />
                      </div>
                      <div className="p-6 md:w-2/3 flex flex-col justify-between">
                        <div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                          <h2 
                            className="text-2xl font-bold text-gray-900 mb-2 md:mb-0 truncate md:max-w-[60%]" 
                            title={item.title} // Tooltip for full title
                          >
                            {item.title}
                          </h2>
                          <span className="bg-[#3554a5] text-white px-3 py-1 rounded-full text-sm md:ml-4 md:mt-0 mt-2 text-center">
                            {item.date}
                          </span>
                        </div>
                          <p className="text-gray-600 mb-4">
                            {item.description}
                          </p>
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600 mb-4">
                            <div className="flex items-center">
                              <MapPin className="w-5 h-5 mr-2 text-[#3554a5]" />
                              <span>Campus Main Hall</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-5 h-5 mr-2 text-[#3554a5]" />
                              <span>2:00 PM</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <button 
                            className="text-[#3554a5] hover:text-[#f26722] font-semibold flex items-center"
                            onClick={() => handleEventClick(item.id)}
                          >
                            View Event Details
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-5 w-5 ml-2" 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                                clipRule="evenodd" 
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <p className="text-gray-500 text-xl">
                    No events {selectedDate ? 'scheduled for the selected date' : activeTab === 'upcoming' ? 'scheduled for the future' : 'from the past'}.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;