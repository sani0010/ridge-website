import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Calendar, ArrowRight, 
  Facebook, Instagram, Twitter, Linkedin,
  Clock, User, BookOpen, MessageCircle, X
} from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import melbourne from '../assets/melbourne.jpg';
import sydney from '../assets/sydney.jpg';
import fitzroy from '../assets/fitzroy.jpg';

const ContactPage = () => {
  const [selectedDates, setSelectedDates] = useState([null, null, null, null]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const campusLocations = [
    {
      title: "Melbourne Campus",
      location: "Level 5/85 Queen St, Melbourne, VIC, 3000, Australia",
      phone: "+61 03 9620 7738",
      email: "admin@ridge.edu.au",
      image: melbourne,
      mapLink: "https://www.google.com/maps/place/level+5%2F85+Queen+St,+Melbourne+VIC+3000,+Australia/@-37.816465,144.961033,15z/data=!4m6!3m5!1s0x6ad65d4b550c0001:0x7de2f73dc09aaf50!8m2!3d-37.8164646!4d144.961033!16s%2Fg%2F11rm870p09?hl=en-US&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "Fitzroy Campus",
      location: "97 Smith Street, Fitzroy VIC 3065, Australia",
      phone: "+61 03 9620 7738",
      email: "admin@ridge.edu.au",
      image: fitzroy,
      mapLink: "https://www.google.com/maps/place/97+Smith+St,+Fitzroy+VIC+3065,+Australia/@-37.805917,144.982949,15z/data=!4m6!3m5!1s0x6ad642ddf0f10e41:0x28e12490fe5935f1!8m2!3d-37.805917!4d144.982949!16s%2Fg%2F11c5k3jr80?hl=en-US&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      title: "Sydney Campus",
      location: "Office 101, 30 Cowper Street, PARRAMATTA, New South Wales 2150",
      phone: "+61 03 9620 7738",
      email: "admin@ridge.edu.au",
      image: sydney,
      mapLink: "https://www.google.com/maps/place/Office+101%2F30+Cowper+St,+Parramatta+NSW+2150,+Australia/@-33.82065,151.007161,15z/data=!4m6!3m5!1s0x6b12a323c4ba11fd:0x13edfafca3af5b0c!8m2!3d-33.8206497!4d151.0071609!16s%2Fg%2F11khd5j4bh?hl=en-US&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  const departments = [
    {
      title: "Academic Support",
      email: "academic_support@ridge.edu.au",
      hours: "Monday - Friday (2:00 PM - 4:00 PM)",
      icon: BookOpen,
      color: "bg-blue-100"
    },
    {
      title: "Student Support",
      email: "shweta@ridge.edu.au",
      hours: "Monday - Friday (1:00 PM - 2:00 PM)",
      icon: User,
      color: "bg-green-100"
    },
    {
      title: "Marketing - Melbourne",
      email: "marketing@ridge.edu.au",
      hours: "Monday - Friday (1:00 PM - 3:00 PM)",
      icon: MessageCircle,
      color: "bg-purple-100"
    },
    {
      title: "Marketing - Sydney",
      email: "sydneymarketing@ridge.edu.au",
      hours: "Monday - Friday (1:00 PM - 3:00 PM)",
      icon: MessageCircle,
      color: "bg-orange-100"
    }
  ];

  const handleScheduleAppointment = (index) => {
    if (selectedDates[index]) {
      setCurrentIndex(index);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-2xl text-blue-100 max-w-2xl mx-auto">
              We're here to help you take the next step in your educational journey
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-20">
        {/* Campus Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {campusLocations.map((campus, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <a href={campus.mapLink} target="_blank" rel="noopener noreferrer" className="h-48 bg-blue-100 relative block">
                <img
                  src={campus.image}
                  alt={campus.title}
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">{campus.title}</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{campus.location}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href={`tel:${campus.phone}`} className="text-blue-600 hover:underline">
                      {campus.phone}
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href={`mailto:${campus.email}`} className="text-blue-600 hover:underline">
                      {campus.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900">Schedule an Appointment</h2>
            <p className="text-gray-600 mt-4">Choose your preferred department and time</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`${dept.color} p-3 rounded-full w-fit mb-4`}>
                  {React.createElement(dept.icon, { className: "w-6 h-6 text-blue-600" })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{dept.title}</h3>
                <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline block mb-3">
                  {dept.email}
                </a>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{dept.hours}</span>
                </div>
                <DatePicker
                  selected={selectedDates[index]}
                  onChange={(date) => {
                    const newDates = [...selectedDates];
                    newDates[index] = date;
                    setSelectedDates(newDates);
                  }}
                  className="w-full border border-gray-300 rounded-lg p-2 mb-3"
                  placeholderText="Select date"
                />
                <button
                  onClick={() => handleScheduleAppointment(index)}
                  disabled={!selectedDates[index]}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Schedule Meeting
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg mb-24">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Let's Connect</h2>
                <p className="text-gray-600 mb-8">
                  Have questions? Our team is here to help you navigate your educational journey.
                </p>
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold">Follow us:</h4>
                  <div className="flex gap-4">
                    {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                      <button
                        key={idx}
                        className="p-3 rounded-full border border-gray-200 hover:bg-blue-50 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
                />
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg text-white mb-24">
          <div className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-blue-900 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Appointment Confirmed</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600">
                    Your appointment with {departments[currentIndex]?.title} has been scheduled for:
                  </p>
                  <p className="font-semibold text-lg">
                    {selectedDates[currentIndex]?.toLocaleDateString()}
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  A confirmation email has been sent to your inbox.
                </p>
                <button 
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;