import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { eventData } from '../data/eventData';

const Events = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const eventsOnSelectedDate = selectedDate
    ? eventData.filter(
        (item) => new Date(item.date).toDateString() === selectedDate.toDateString()
      )
    : eventData;

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            News and Events
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Stay updated with the latest happenings at Ridge International College
          </p>
        </div>

        {/* Events Section */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventsOnSelectedDate.length > 0 ? (
            eventsOnSelectedDate.map((item) => (
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
            ))
          ) : (
            <p className="text-gray-500">No events on this date.</p>
          )}
        </div>

        {/* Calendar Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
            Event Calendar
          </h3>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={({ date }) => {
              return eventData.some(
                (item) => new Date(item.date).toDateString() === date.toDateString()
              )
                ? 'bg-[#3554a5] text-white rounded-full'
                : null;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
