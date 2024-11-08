import React, { useState } from 'react';
import { Bell, Calendar, ChevronRight, Search } from 'lucide-react';

const notices = [
  {
    title: 'Everything You Need to Know About September 2024 Intake',
    date: 'June 8, 2022',
    category: 'Admission',
    priority: 'high',
    description: 'Ridge International College, a prominent name among the best VET colleges in Melbourne/Sydney is accepting applications for September 2024. To check your eligibility, the scholarships, and course benefits, please contact +61 […].',
  },
  {
    title: 'COVID-19 Notice',
    date: 'March 8, 2019',
    category: 'Health & Safety',
    priority: 'urgent',
    description: 'Ridge International College is continuously monitoring Coronavirus outbreak and its impact on our community. We advise our Students and staff to take this matter seriously and do their best to avoid […].',
  },
  {
    title: 'Library Hours Extended During Finals Week',
    date: 'June 1, 2022',
    category: 'Academic',
    priority: 'normal',
    description: 'The college library will extend its operating hours during finals week. Starting next Monday, the library will be open from 7 AM to 11 PM to accommodate student study needs.',
  },
];

const HomeNoticePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Admission', 'Academic', 'Health & Safety'];

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'normal': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notice Board
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and important information from Ridge International College
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search notices..."
              className="pl-10 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex justify-center gap-2 flex-wrap mt-4">
            {categories.map((category) => (
              <span
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer px-4 py-2 rounded-full border ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-transparent border-blue-500 text-blue-500'}`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Notices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotices.map((notice, index) => (
            <div key={index} className="group p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <span className={`inline-block py-1 px-3 text-xs font-semibold ${getPriorityColor(notice.priority)} rounded-full`}>
                  {notice.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {notice.date}
                </div>
              </div>
              <h2 className="text-xl font-semibold line-clamp-2">{notice.title}</h2>
              <p className="text-gray-600 line-clamp-3 mb-4">{notice.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-500 cursor-pointer">
                  <Bell className="h-3 w-3 mr-1" />
                  Set Reminder
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNoticePage;
