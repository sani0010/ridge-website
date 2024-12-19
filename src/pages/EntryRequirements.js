import React, { useState } from 'react';
import { ChevronRight, Book, GraduationCap, Languages, ClipboardCheck, BookOpen, Laptop, Package } from 'lucide-react';

const EntryRequirements = () => {
  const [activeSection, setActiveSection] = useState(null);

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
                <p className="text-base md:text-lg">Talking about the further entry requirements for this qualification, applicants should have successfully completed an equivalent of Australian year 12 in applicant’s home country.</p>
              </div>
              <div className="p-3 md:p-4 bg-purple-50 rounded-lg">
                <p className="text-base md:text-lg">Mature-age students will also be considered without the minimum education requirements but with relevant work experience within a chosen area of study and a demonstrated capacity to meet the course requirements.</p>
              </div>
              <div className="p-3 md:p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm italic">* Note: For Advanced Diploma of Leadership and Management course, students are required to demonstrate completion of Diploma level business course. Please refer to individual entry requirements for details.</p>
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
            <div className="p-3 md:p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm italic">Alternatively, students can provide an evidence that:

they have studied in English for at least five years in Australia, Canada, New Zealand, Republic of Ireland, South Africa, United Kingdom or United States, or
within two years of their application, they have successfully completed a foundation course or a senior secondary certificate of education or a substantial part of a Certificate III or higher level qualification from the Australian Qualifications Framework in Australia, or
successful completion of an English Placement Test</p>
              </div>
          </div>
        );
      case 'lln':
        return (
          <div className={contentClass}>
            <p className="text-base md:text-lg mb-6">Students must possess sound Literacy and Numeracy skills for course completion.</p>
            <div className="space-y-4">
              {llnData.slice(1).map((row, rowIndex) => (
                <div key={rowIndex} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-4">{row[0]}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    <div className="bg-white p-3 rounded shadow-sm">
                      <span className="block text-gray-600 text-sm">Learning</span>
                      <span className="text-lg font-medium">{row[1]}</span>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <span className="block text-gray-600 text-sm">Reading</span>
                      <span className="text-lg font-medium">{row[2]}</span>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <span className="block text-gray-600 text-sm">Writing</span>
                      <span className="text-lg font-medium">{row[3]}</span>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <span className="block text-gray-600 text-sm">Oral</span>
                      <span className="text-lg font-medium">{row[4]}</span>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <span className="block text-gray-600 text-sm">Numeracy</span>
                      <span className="text-lg font-medium">{row[5]}</span>
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
              <p className="text-base md:text-lg">All student must undertake pre-training review prior to the enrolment which aims to identify their training needs through questions on previous education or training, relevance of the courses to student, basic computing skills and interview conducted by Ridge International College enrolment officer. Interview also aims to identify possible CT/RPL opportunities, confirm oral communication skills. Through pre-training review, student will demonstrate that they have necessary skills to successfully complete the course.</p>
            </div>
          </div>
        );
      case 'digital':
        return (
          <div className={contentClass}>
            <div className="p-4 md:p-6 bg-indigo-50 rounded-lg">
              <p className="text-base md:text-lg">All student enrolling in this course are expected to have basic computer skills including use of computer or laptop, internet, email application and a word processor.</p>
            </div>
          </div>
        );
      case 'materials':
        return (
          <div className={contentClass}>
            <p className="text-base md:text-lg mb-4">Although Ridge International College will provide access to computers/laptops with required resources during classroom hours however to work on assignments and tasks for self-study, all leaners are expected to have access to a laptop or computer. Students must have an active email address for communication and be contactable by phone (mobile or landline) and by mail (postal address).

All leaners are expected to have access to MS office application such as Microsoft Word, and an email platform.

Hospitality students will require access to kitchen kit and protective personal equipment (PPE) to participate in the practical tasks in the kitchen.</p>

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

        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id}>
              <div
                className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl`}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-full ${section.color} text-white`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h2 className="ml-4 text-lg font-semibold text-gray-800">{section.title}</h2>
                </div>
                <ChevronRight className="text-gray-500 w-5 h-5" />
              </div>

              {activeSection === section.id && renderContent(section.id)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntryRequirements;