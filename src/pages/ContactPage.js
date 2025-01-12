import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Phone, Mail, Calendar, 
  Facebook, Instagram, Linkedin,
  Clock, User, BookOpen, MessageCircle, X,
  Youtube
} from 'lucide-react';
import DatePicker from 'react-datepicker';
import { useLocation } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

const ContactPage = () => {
  const [selectedDates, setSelectedDates] = useState([null, null, null, null]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  // const [formStatus, setFormStatus] = useState({ message: '', isError: false });
  const location = useLocation();
  const letsconnectRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#lets-connect') {
      letsconnectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const campusLocations = [
    {
      title: "Melbourne Campus",
      location: "Level 5/85 Queen St, Melbourne, VIC, 3000, Australia",
      phone: "+61 03 9620 7738",
      email: "admin@ridge.edu.au",
      image: '/melbourne.jpg',
      mapLink: "https://www.google.com/maps/place/level+5%2F85+Queen+St,+Melbourne+VIC+3000"
    },
    {
      title: "Fitzroy Campus",
      location: "97 Smith Street, Fitzroy VIC 3065, Australia",
      phone: "+61 03 9620 7738",
      email: "admin@ridge.edu.au",
      image: '/fitzroy.jpg',
      mapLink: "https://www.google.com/maps/place/97+Smith+St,+Fitzroy+VIC+3065"
    },
    {
      title: "Sydney Campus",
      location: "Office 101, 30 Cowper Street, PARRAMATTA, NSW 2150",
      phone: "+61 03 9620 7738",
      email: "admin@ridge.edu.au",
      image: '/sydney.jpg',
      mapLink: "https://www.google.com/maps/place/Office+101%2F30+Cowper+St,+Parramatta+NSW+2150"
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

  const socialMediaLinks = [
    {
      Icon: Facebook,
      link: "https://www.facebook.com/ridgeinternationalcollege"
    },
    {
      Icon: Instagram,
      link: "https://www.instagram.com/ridgeinternationalcollege/"
    },
    {
      Icon: Youtube,
      link: "https://www.youtube.com/@RidgeInternationalCollege"
    },
    {
      Icon: Linkedin,
      link: "https://www.linkedin.com/company/ridge-international-college/"
    }
  ];

  const formatDate = (date) => {
    if (!date) return null;
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  const handleScheduleAppointment = (index) => {
    if (selectedDates[index]) {
      const department = departments[index];
      const subject = encodeURIComponent(`Appointment Request for ${department.title}`);
      const body = encodeURIComponent(`
Dear ${department.title},

I would like to schedule an appointment on ${formatDate(selectedDates[index])}.

Please confirm the availability of this date and time.

Best regards,
[Your Name]
      `);

      window.location.href = `mailto:${department.email}?subject=${subject}&body=${body}`;
      setCurrentIndex(index);
      setIsModalOpen(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value
        })
      });
  
      const data = await response.json();
      
      if (data.success) {
        alert('Message sent successfully!');
        // Clear form
        e.target.reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
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
                  src="/api/placeholder/400/320"
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
                  dateFormat="dd/MM/yy"
                  minDate={new Date()}
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
        <section id="lets-connect" ref={letsconnectRef} className="py-8 md:py-12">
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
                    {socialMediaLinks.map(({ Icon, link }, idx) => (
                      <a
                        key={idx}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-gray-200 hover:bg-blue-50 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
  <input
    name="name"
    type="text"
    placeholder="Your Name"
    required
    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    name="email"
    type="email"
    placeholder="Your Email"
    required
    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows="4"
    required
    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
  />
  <button 
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
  >
    Send Message
  </button>
</form>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg w-full max-w-md">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Appointment Request</h3>
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
                      Your appointment request to {departments[currentIndex]?.title} has been initiated.
                    </p>
                    <p className="font-semibold text-lg">
                    Selected Date: {formatDate(selectedDates[currentIndex])}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      An email has been drafted to {departments[currentIndex]?.email}
                    </p>
                  </div>
                  <button 
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;