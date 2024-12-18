import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { eventData } from '../data/eventData';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const event = eventData.find(item => item.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState(() => {
    const savedEvents = localStorage.getItem('registeredEvents');
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  useEffect(() => {
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }
  }, [location.state]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Event not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#3554a5] hover:bg-[#3554a5]"
          >
            Return to Events
          </button>
        </div>
      </div>
    );
  }

  const isEventRegistered = registeredEvents.some(regEvent => regEvent.id === event.id);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#3554a5] bg-white hover:bg-gray-50"
          >
            ← Back to Events
          </button>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-lg font-semibold">{event.date}</p>
              <h1 className="text-4xl font-bold mt-2">{event.title}</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {event.fullDescription}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Event Highlights</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {event.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date</p>
                    <p className="mt-1 text-gray-900">{event.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Time</p>
                    <p className="mt-1 text-gray-900">{event.time}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="mt-1 text-gray-900">{event.location}</p>
                  </div>
                </div>

                <button
                  className={`mt-6 w-full text-white py-2 px-4 rounded-md transition-colors duration-200 ${
                    isEventRegistered
                      ? 'bg-[#F26722] hover:bg-[#F26722]'
                      : 'bg-[#3554a5] hover:bg-[#3554a5]'
                  }`}
                  onClick={() => {
                    if (isEventRegistered) {
                      navigate('/my-events');
                    } else {
                      setIsModalOpen(true);
                    }
                  }}
                >
                  {isEventRegistered ? 'Go to My Events' : 'Register for Event'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <RegistrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          event={event}
          onRegister={(registrationData) => {
            const newRegisteredEvents = [
              ...registeredEvents,
              { ...event, registrationDetails: registrationData },
            ];
            setRegisteredEvents(newRegisteredEvents);
            localStorage.setItem('registeredEvents', JSON.stringify(newRegisteredEvents));
          }}
        />
      )}
    </div>
  );
};

// RegistrationModal remains unchanged

// Registration modal component
const RegistrationModal = ({ isOpen, onClose, event, onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isRegistered, setIsRegistered] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onRegister callback with form data
    onRegister(formData);
    setIsRegistered(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-[9999]"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative z-[10000]" onClick={(e) => e.stopPropagation()}>
        {isRegistered ? (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Successfully Registered!</h2>
            <p className="text-gray-600 mb-6">Thank you for registering for {event.title}.</p>
            <button 
              onClick={() => {
                setIsRegistered(false);
                onClose();
              }}
              className="w-full bg-[#3554a5] text-white py-2 px-4 rounded-md hover:bg-[#3554a5]"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Register for {event.title}</h2>
            <label className="block mb-2">
              Name:
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded" 
                required 
              />
            </label>
            <label className="block mb-2">
              Email:
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded" 
                required 
              />
            </label>
            <label className="block mb-2">
              Phone:
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded" 
                required 
              />
            </label>
            <button 
              type="submit" 
              className="mt-4 w-full bg-[#3554a5] text-white py-2 px-4 rounded-md hover:bg-[#3554a5]"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EventDetail;