import React, { useState } from 'react';
import { ChevronRight, Book, GraduationCap, Languages, ClipboardCheck, BookOpen, Laptop, Package } from 'lucide-react';

const EntryRequirements = () => {
  const [activeSection, setActiveSection] = useState('age');

  const sections = [
    { id: 'age', title: 'Age Requirement', icon: Book, color: 'bg-blue-500' },
    { id: 'academic', title: 'Academic Requirement', icon: GraduationCap, color: 'bg-purple-500' },
    { id: 'english', title: 'English Language Requirement', icon: Languages, color: 'bg-green-500' },
    { id: 'lln', title: 'Language, Literacy, and Numeracy Test', icon: ClipboardCheck, color: 'bg-yellow-500' },
    { id: 'pretraining', title: 'Pre-training Review', icon: BookOpen, color: 'bg-pink-500' },
    { id: 'digital', title: 'Digital Literacy', icon: Laptop, color: 'bg-indigo-500' },
    { id: 'materials', title: 'Materials and Equipment', icon: Package, color: 'bg-red-500' }
  ];

  const llnData = [
    ['Course Name', 'Learning', 'Reading', 'Writing', 'Oral', 'Numeracy'],
    ['BSB40520 Certificate IV in Leadership and Management', '3', '3', '3', '3', '3'],
    ['BSB50420 Diploma of Leadership and Management', '3', '3', '3', '3', '3'],
    ['BSB60420 Advanced Diploma of Leadership and Management', '4', '4', '4', '4', '4'],
    ['SIT30821 Certificate III in Commercial Cookery', '2', '2', '2', '2', '3'],
    ['SIT40521 Certificate IV in Kitchen Management', '3', '3', '3', '3/4', '3'],
    ['SIT50422 Diploma of Hospitality Management', '3', '3', '3', '3', '3'],
    ['SIT60322 Advanced Diploma of Hospitality Management', '3/4', '3', '3', '3/4', '3']
  ];

  const renderContent = (sectionId) => {
    const contentClass = "p-4 md:p-6 rounded-lg bg-white shadow-lg space-y-4";
    
    switch (sectionId) {
      case 'age':
        return (
          <div className={contentClass}>
            <p className="text-base md:text-lg leading-relaxed">
              Ridge International College will only enroll students who are over 18 years of age at commencement of their course.
            </p>
          </div>
        );
      case 'academic':
        return (
          <div className={contentClass}>
            <div className="space-y-4">
              <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                <p className="text-base md:text-lg">Applicants should have successfully completed an equivalent of Australian year 12 in their home country.</p>
              </div>
              <div className="p-3 md:p-4 bg-purple-50 rounded-lg">
                <p className="text-base md:text-lg">Mature-age students will be considered without the minimum education requirements but with relevant work experience within a chosen area of study and a demonstrated capacity to meet the course requirements.</p>
              </div>
              <div className="p-3 md:p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm italic">* For Advanced Diploma of Leadership and Management, completion of a Diploma level business course is required.</p>
              </div>
            </div>
          </div>
        );
      case 'english':
        return (
          <div className={contentClass}>
            <p className="text-base md:text-lg mb-4">International students must demonstrate English language proficiency with a minimum score of:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg flex items-center space-x-3">
                <div className="text-green-600 font-semibold text-lg md:text-xl">IELTS</div>
                <div className="text-base md:text-lg">Overall band of 6.0 (Academic)</div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg flex items-center space-x-3">
                <div className="text-blue-600 font-semibold text-lg md:text-xl">PTE</div>
                <div className="text-base md:text-lg">50 or equivalent</div>
              </div>
            </div>
          </div>
        );
      case 'lln':
        return (
          <div className={contentClass}>
            <p className="text-base md:text-lg mb-6">Students must possess sound Literacy and Numeracy skills for course completion.</p>
            <div className="grid grid-cols-1 gap-4">
              {llnData.slice(1).map((row, rowIndex) => (
                <div key={rowIndex} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{row[0]}</h4>
                  <div className="grid grid-cols-5 gap-2 text-sm md:text-base">
                    <div>
                      <span className="text-gray-600">Learning:</span> {row[1]}
                    </div>
                    <div>
                      <span className="text-gray-600">Reading:</span> {row[2]}
                    </div>
                    <div>
                      <span className="text-gray-600">Writing:</span> {row[3]}
                    </div>
                    <div>
                      <span className="text-gray-600">Oral:</span> {row[4]}
                    </div>
                    <div>
                      <span className="text-gray-600">Numeracy:</span> {row[5]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'pretraining':
        return (
          <div className={contentClass}>
            <div className="p-4 md:p-6 bg-pink-50 rounded-lg">
              <p className="text-base md:text-lg">All students must undertake a pre-training review before enrollment.</p>
            </div>
          </div>
        );
      case 'digital':
        return (
          <div className={contentClass}>
            <div className="p-4 md:p-6 bg-indigo-50 rounded-lg">
              <p className="text-base md:text-lg">Basic computer skills are required, including use of a computer, internet, email, and word processing applications.</p>
            </div>
          </div>
        );
      case 'materials':
        return (
          <div className={contentClass}>
            <p className="text-base md:text-lg mb-4">Required materials include:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { text: 'Access to a laptop or computer', icon: Laptop },
                { text: 'An active email address', icon: Book },
                { text: 'Contact phone number', icon: Book },
                { text: 'Postal address', icon: Book },
                { text: 'MS Office applications', icon: Book }
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <item.icon className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Entry Requirements</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Navigation Cards */}
          <div className="lg:col-span-4 flex flex-col space-y-3 md:space-y-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full group transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-white shadow-lg scale-102'
                      : 'bg-white/50 hover:bg-white hover:shadow-md'
                  } rounded-xl p-3 md:p-4 flex items-center justify-between`}
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className={`${section.color} p-2 rounded-lg text-white`}>
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm md:text-base">{section.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${
                    activeSection === section.id ? 'rotate-90 text-blue-500' : 'text-gray-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            {renderContent(activeSection)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryRequirements;