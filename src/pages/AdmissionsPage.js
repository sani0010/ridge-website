import React, { useState, useEffect } from 'react';
import { 
  ScrollText, CreditCard, ChevronRight, Globe, 
  Clock, School, Users, BookOpen, Mail, MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState('onshore');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative min-h-[600px] h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-10 bg-repeat"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight text-center"
          >
            Your Future Begins at
            <span className="block bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Ridge International College
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 text-center"
          >
            Join a community of global learners and innovators
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          >
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-900 rounded-xl font-semibold overflow-hidden w-full sm:w-auto">
              <span className="relative z-10">Begin Application</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all w-full sm:w-auto">
              Download Prospectus
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.features ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Why Choose Ridge International
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Experience world-class education with our unique advantages
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                icon: Globe, 
                title: "Global Recognition", 
                desc: "Internationally accredited programs that open doors worldwide",
                color: "from-blue-500 to-indigo-500"
              },
              { 
                icon: Users, 
                title: "Industry Leaders", 
                desc: "Learn directly from experienced professionals and industry experts",
                color: "from-indigo-500 to-purple-500"
              },
              { 
                icon: Clock, 
                title: "Flexible Learning", 
                desc: "Multiple intake dates and adaptable study schedules",
                color: "from-purple-500 to-pink-500"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.features ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="p-6 sm:p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6`}>
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                  <div className="mt-6 flex items-center text-blue-600 font-medium">
                    <span className="mr-2">Learn More</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="process" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.process ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Your Journey Starts Here</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple three-step process to begin your educational journey
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: ScrollText,
                step: "01",
                title: "Apply Online",
                content: "Complete our comprehensive online application form with your details and documentation"
              },
              {
                icon: BookOpen,
                step: "02",
                title: "Assessment",
                content: "Undergo our entry assessment and interview process with our academic team"
              },
              {
                icon: School,
                step: "03",
                title: "Enrollment",
                content: "Receive your offer letter and complete the enrollment process"
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.process ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative group"
              >
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <span className="text-4xl sm:text-5xl font-bold text-blue-100">{step.step}</span>
                    <div className="mt-4 inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 mb-4">
                      <step.icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.content}</p>
                  <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section id="payment" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.payment ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-6 sm:p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                  <CreditCard size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Payment Details</h2>
              </div>

              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-gray-100 p-1 rounded-xl">
                  {['onshore', 'offshore'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all ${
                        activeTab === tab
                          ? 'bg-white text-blue-600 shadow-md'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)} Collection
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <div className="grid gap-6">
                  {activeTab === 'onshore' ? (
                    <>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-600">Bank</label>
                          <p className="font-medium">Australia and New Zealand Banking Group Limited (ANZ)</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-600">Account Name</label>
                          <p className="font-medium">Australian National Academy of Education Pty Ltd</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-600">BSB Number</label>
                          <p className="font-mono font-medium">013-006</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-600">Account Number</label>
                          <p className="font-mono font-medium">308693288</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-gray-600">Bank</label>
                          <p className="font-medium">Commonwealth Bank of Australia (CBA)</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-600">Account Name</label>
                          <p className="font-medium">Australian National Academy of Education Pty Ltd</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-600">BSB Number</label>
                          <p className="font-mono font-medium">063010</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-gray-600">Account Number</label>
                          <p className="font-mono font-medium">14663058</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions? Our admissions team is here to guide you through every step of your journey.
              </p>
              <div className="space-y-6">
              <a href="mailto:admin@ridge.edu.au" className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-600">admin@ridge.edu.au</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <span className="text-gray-600">123 Ridge Street, Melbourne, Australia</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="w-full p-4 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="w-full p-4 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea className="w-full p-4 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500" rows="4" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;