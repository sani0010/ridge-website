import React, { useState } from 'react';
import { 
  ScrollText, CreditCard,
  ChevronRight, Globe, Clock, School, Users, BookOpen 
} from 'lucide-react';

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState('onshore');
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-orange-900">
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6bTAgMmMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Begin Your Journey at Ridge International College
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Excellence in education, global perspectives, and a pathway to success
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Globe, title: "Global Recognition", desc: "Internationally accredited programs", details: "Study anywhere in the world." },
            { icon: Clock, title: "Flexible Schedule", desc: "Multiple intake dates throughout the year", details: "Start your studies at your convenience." },
            { icon: Users, title: "Expert Faculty", desc: "Learn from industry professionals", details: "Gain insights from the best in the industry." }
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              onMouseEnter={() => setActiveFeature(idx)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.desc}</p>
              {activeFeature === idx && (
                <p className="text-blue-600 mt-2">{feature.details}</p> // Display additional details on hover
              )}
            </div>
          ))}
        </div>

        {/* Application Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Your Path to Enrollment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Submit Application",
                content: "Complete online application with required documents",
                icon: ScrollText
              },
              {
                step: 2,
                title: "Assessment",
                content: "Complete entry screening and interview",
                icon: BookOpen
              },
              {
                step: 3,
                title: "Receive Offer",
                content: "Get your Letter of Offer and Agreement",
                icon: School
              },
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.content}</p>
                  <div className="flex items-center text-blue-600 font-medium cursor-pointer group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <CreditCard className="h-8 w-8 text-blue-600" />
            Payment Details
          </h2>
          <div className="mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 mb-8">
              {['onshore', 'offshore'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Collection
                </button>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              {activeTab === 'onshore' ? (
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 items-center">
                    <span className="font-medium">Bank:</span>
                    <span>Australia and New Zealand Banking Group Limited (ANZ)</span>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <span className="font-medium">Account Name:</span>
                    <span>Australian National Academy of Education Pty Ltd</span>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <span className="font-medium">BSB Number:</span>
                    <span className="font-mono">013-006</span>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <span className="font-medium">Account Number:</span>
                    <span className="font-mono">308693288</span>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 items-center">
                    <span className="font-medium">Bank:</span>
                    <span>Commonwealth Bank of Australia (CBA)</span>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <span className="font-medium">Account Name:</span>
                    <span>Australian National Academy of Education Pty Ltd</span>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <span className="font-medium">BSB Number:</span>
                    <span className="font-mono">063010</span>
                  </div>
                  <div className="grid grid-cols-2 items-center">
                    <span className="font-medium">Account Number:</span>
                    <span className="font-mono">14663058</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg p-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-gray-600 mb-6">
              Our admissions team is here to help guide you through the enrollment process. Reach out to us with any questions.
            </p>
            <div className="space-y-4">
              <a href="mailto:admin@ridge.edu.au" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                admin@ridge.edu.au
              </a>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Level 5/85 Queen St, Melbourne, VIC, 3000, Australia</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Quick Contact Form</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
