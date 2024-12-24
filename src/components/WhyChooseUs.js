import React, { useState } from 'react';

const benefits = [
  {
    title: 'Experienced Faculty',
    description: 'Our instructors are industry professionals with years of experience, bringing real-world expertise directly to your learning journey.',
    icon: '👩‍🏫',
    bgColor: 'bg-orange-50'
  },
  {
    title: 'Flexible Learning',
    description: 'We offer a variety of learning modes to suit your schedule, including online, hybrid, and in-person options.',
    icon: '🕒',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Modern Facilities',
    description: 'Our campuses are equipped with state-of-the-art facilities, providing you with the best learning environment possible.',
    icon: '🏢',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Industry Connections',
    description: 'We help you build a network with top companies in the industry, opening doors to exciting career opportunities.',
    icon: '🔗',
    bgColor: 'bg-purple-50'
  }
];

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Close the modal and show success message
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interests: '',
      message: ''
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-0 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-6 text-[#F26722] relative inline-block">
            Why Choose Us
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#F26722] opacity-20"></span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover the unique advantages that set us apart and make your educational journey exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.bgColor} p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group min-h-[360px] flex flex-col justify-between`}
            >
              <div>
                <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#F26722] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              
              <div className="mt-6 flex justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#F26722] font-semibold hover:text-orange-700 flex items-center gap-2">
                  Learn More
                  <svg
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F26722] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start Your Journey With Us
          </button>
        </div>
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setIsModalOpen(false)}
            ></div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-2xl font-bold text-[#F26722] mb-4" id="modal-title">
                      Start Your Journey
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Fill out the form below and we'll get back to you with more information about our programs.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div>
                        <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
                          Areas of Interest
                        </label>
                        <input
                          id="interests"
                          name="interests"
                          type="text"
                          value={formData.interests}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="e.g., Web Development, Data Science"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Tell us more about your goals..."
                        />
                      </div>

                      <div className="mt-5 sm:mt-6 flex gap-4">
                        <button
                          type="submit"
                          className="w-full bg-[#F26722] text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                        >
                          Submit Application
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUs;