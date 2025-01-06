import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisteredEvents = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const navigate = useNavigate(); // Use navigate for back button

  // Load registered events when component mounts
  useEffect(() => {
    const savedEvents = localStorage.getItem('registeredEvents');
    if (savedEvents) {
      setRegisteredEvents(JSON.parse(savedEvents));
    }
  }, []);

  // Function to remove a registration
  const handleRemoveRegistration = (eventId) => {
    const updatedEvents = registeredEvents.filter(event => event.id !== eventId);
    setRegisteredEvents(updatedEvents);
    localStorage.setItem('registeredEvents', JSON.stringify(updatedEvents));
  };

  if (registeredEvents.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">No Registered Events</h2>
          <p className="text-gray-600 mt-4">You haven't registered for any events yet.</p>
        </div>
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#3554a5] hover:bg-[#254a8a]"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)} // Navigate to the previous page
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#3554a5] bg-white hover:bg-gray-50 mr-4"
          >
            ← Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">My Registered Events</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registeredEvents.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h2>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <h3 className="text-md font-semibold text-gray-900 mb-2">Registration Details</h3>
                  <p className="text-sm text-gray-600">
                    <strong>Name:</strong> {event.registrationDetails.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong> {event.registrationDetails.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Phone:</strong> {event.registrationDetails.phone}
                  </p>
                </div>

                <button
                  onClick={() => handleRemoveRegistration(event.id)}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                >
                  Cancel Registration
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisteredEvents;
