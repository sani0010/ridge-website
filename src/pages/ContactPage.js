import React from 'react';
import { 
  MapPin, Phone, Mail, Calendar, ArrowRight, 
  Facebook, Instagram, Twitter, Linkedin,
  Clock, User, BookOpen, MessageCircle
} from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 opacity-90"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-2xl text-blue-100 mb-8">We Are Ready To Help With Your Queries</p>
          </div>
        </div>
      </div>

      {/* Campus Locations */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Melbourne Campus",
              location: "Level 5/85 Queen St, Melbourne, VIC, 3000, Australia",
              phone: "+613 9620 7738",
              email: "admin@ridge.edu.au"
            },
            {
              title: "Fitzroy Campus",
              location: "97 Smith Street, Fitzroy VIC 3065, Australia",
              phone: "+613 9620 7738",
              email: "admin@ridge.edu.au"
            },
            {
              title: "Sydney Campus",
              location: "Office 101, 30 Cowper Street, PARRAMATTA, New South Wales 2150",
              phone: "+613 9620 7738",
              email: "admin@ridge.edu.au"
            }
          ].map((campus, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">{campus.title}</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-gray-600">{campus.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href={`tel:${campus.phone}`} className="text-blue-600 hover:underline">{campus.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href={`mailto:${campus.email}`} className="text-blue-600 hover:underline">{campus.email}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Schedule your Appointment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Academic",
                email: "academic_support@ridge.edu.au",
                hours: "Monday/Tuesday/Wednesday/Thursday/Friday (2.00-4.00PM)",
                icon: BookOpen
              },
              {
                title: "Student Support",
                email: "shweta@ridge.edu.au",
                hours: "Monday/Tuesday/Wednesday/Thursday/Friday (1.00-2.00PM)",
                icon: User
              },
              {
                title: "Marketing - Melbourne Campus",
                email: "marketing@ridge.edu.au",
                hours: "Monday/Tuesday/Wednesday/Thursday/Friday (1.00-3.00PM)",
                icon: MessageCircle
              },
              {
                title: "Marketing - Sydney Campus",
                email: "sydneymarketing@ridge.edu.au",
                hours: "Monday/Tuesday/Wednesday/Thursday/Friday (1.00-3.00PM)",
                icon: MessageCircle
              }
            ].map((dept, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="p-3 bg-blue-100 rounded-full w-fit mb-4">
                  {React.createElement(dept.icon, { className: "w-6 h-6 text-blue-600" })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{dept.title}</h3>
                <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline block mb-3">{dept.email}</a>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{dept.hours}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Schedule an Appointment
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Support</h2>
            <h3 className="text-2xl font-semibold mb-4">How Can We Help?</h3>
            <p className="text-gray-600 mb-8">
              We have an expert team who are dedicated to support and guide you every step of the way.
            </p>
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Follow us on our social media handles:</h4>
              <div className="flex gap-4">
                {[{ Icon: Facebook, link: "#" }, { Icon: Instagram, link: "#" }, { Icon: Twitter, link: "#" }, { Icon: Linkedin, link: "#" }]
                  .map(({ Icon, link }, idx) => (
                  <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to study at Ridge International College?</h2>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
              Talk To Us
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
              Request Info
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;