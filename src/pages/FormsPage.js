import React, { useState, useMemo } from 'react';
import { Search, School, FileText, RefreshCcw, UserCog, FileQuestion,   Download as DownloadIcon, // Changed name to avoid conflict
  ChevronRight as ChevronRightIcon  } from 'lucide-react';

// Forms data
const formsData = [
  {
    title: 'Application Form (For Melbourne Campus)',
    description: 'If you wish to apply to study with us – also contains the USI authority form which notifies us of your USI or allows us to request creation of a USI on your behalf (required for enrolment).',
    link: 'https://www.ridge.edu.au/path/to/melbourne-application-form.pdf'
  },
  {
    title: 'Application Form (For Sydney Campus)',
    description: 'If you wish to apply to study with us – also contains the USI authority form which notifies us of your USI or allows us to request creation of a USI on your behalf (required for enrolment).',
    link: 'https://www.ridge.edu.au/path/to/sydney-application-form.pdf'
  },
  {
    title: 'Credit Application Form',
    description: 'If you want to apply for Credit Transfer.',
    link: 'https://www.ridge.edu.au/path/to/credit-application-form.pdf'
  },
  {
    title: 'Complaints and Appeals Form',
    description: 'If you wish to complain about our services, or appeal an assessment decision made.',
    link: 'https://www.ridge.edu.au/path/to/complaints-appeals-form.pdf'
  },
  {
    title: 'Refund Application Form',
    description: 'If you believe you have grounds for a refund.',
    link: 'https://www.ridge.edu.au/path/to/refund-application-form.pdf'
  },
  {
    title: 'Marketing Permissions Form',
    description: 'If we want to use your picture, testimonial, or other details on our marketing material (e.g., website), we will ask you to complete this.',
    link: 'https://www.ridge.edu.au/path/to/marketing-permissions-form.pdf'
  },
  {
    title: 'Student Change of Details Form',
    description: 'Used to notify us if your personal details (e.g., name, contact details, address) have changed.',
    link: 'https://www.ridge.edu.au/path/to/student-change-details-form.pdf'
  },
  {
    title: 'Withdrawal Form',
    description: 'If you wish to withdraw from a currently enrolled course of study.',
    link: 'https://www.ridge.edu.au/path/to/withdrawal-form.pdf'
  },
  {
    title: 'Assessment Task Cover Sheet',
    description: 'Please use this when submitting assessment tasks.',
    link: 'https://www.ridge.edu.au/path/to/assessment-task-cover-sheet.pdf'
  },
  {
    title: 'Suggestion for Improvement Form',
    description: 'If you would like to supply us with a suggestion to improve our services.',
    link: 'https://www.ridge.edu.au/path/to/suggestion-form.pdf'
  },
  {
    title: 'Request to Access Records Form',
    description: 'To request access to the information we have in your file.',
    link: 'https://www.ridge.edu.au/path/to/access-records-form.pdf'
  },
  {
    title: 'Amendment to Records Form',
    description: 'If you believe the information we have in your file is incorrect.',
    link: 'https://www.ridge.edu.au/path/to/amendment-records-form.pdf'
  },
  {
    title: 'Application for Deferral Form',
    description: 'If you wish to defer your studies in compassionate or compelling circumstances.',
    link: 'https://www.ridge.edu.au/path/to/deferral-form.pdf'
  },
  {
    title: 'Internal Course Transfer Form',
    description: 'If you wish to change to another course with Ridge International College.',
    link: 'https://www.ridge.edu.au/path/to/course-transfer-form.pdf'
  },
  {
    title: 'Application for Leave of Absence',
    description: 'If you wish to apply for leave of absence.',
    link: 'https://www.ridge.edu.au/path/to/leave-of-absence-form.pdf'
  },
  {
    title: 'Request for Term Break Letter',
    description: 'If you wish to request for a term break.',
    link: 'https://www.ridge.edu.au/path/to/term-break-request-form.pdf'
  }
];

// Categories configuration

const categories = {
  'Enrollment': {
    icon: School,
    forms: ['Application Form (For Melbourne Campus)', 'Application Form (For Sydney Campus)', 'Credit Application Form'],
    color: '#3554a5'
  },
  'Academic': {
    icon: FileText,
    forms: ['Assessment Task Cover Sheet', 'Application for Deferral Form', 'Request for Term Break Letter', 'Application for Leave of Absence'],
    color: '#f26722'
  },
  'Changes & Transfers': {
    icon: RefreshCcw,
    forms: ['Student Change of Details Form', 'Withdrawal Form', 'Internal Course Transfer Form'],
    color: '#3554a5'
  },
  'Administrative': {
    icon: UserCog,
    forms: ['Request to Access Records Form', 'Amendment to Records Form', 'Marketing Permissions Form'],
    color: '#f26722'
  },
  'Support & Feedback': {
    icon: FileQuestion,
    forms: ['Complaints and Appeals Form', 'Refund Application Form', 'Suggestion for Improvement Form'],
    color: '#3554a5'
  }
};

const FormCard = ({ form, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div 
          className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-tl-none rounded-br-none rounded-tr-xl" 
          style={{ backgroundColor: color }}
        />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {form.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {form.description}
        </p>
        <a
          href={form.link}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-all hover:opacity-90"
          style={{ backgroundColor: color }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadIcon className="h-4 w-4" />
          Download
          <ChevronRightIcon className={`h-4 w-4 transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </a>
      </div>
    </div>
  );
};

const CategorySection = ({ category, icon: Icon, forms, color, filteredForms }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const categoryForms = forms.map(formTitle => 
    filteredForms.find(form => form.title === formTitle)
  ).filter(Boolean);

  if (categoryForms.length === 0) return null;

  return (
    <div className="mb-8">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-3 p-4 rounded-xl text-white mb-4 hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
        style={{ backgroundColor: '#e3e3e3' }}
      >
        <Icon className="h-6 w-6" />
        <h2 className="text-xl font-semibold text-gray-800">{category}</h2>
        <ChevronRightIcon className={`h-5 w-5 ml-auto transition-transform duration-300 ${
          isExpanded ? 'rotate-90' : ''
        }`} />
      </button>
      
      {isExpanded && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryForms.map((form, index) => (
            <FormCard key={index} form={form} color={color} />
          ))}
        </div>
      )}
    </div>
  );
};

const FormsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredForms = useMemo(() => {
    if (!searchQuery.trim()) return formsData;
    return formsData.filter(form => 
      form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{ color: '#3554a5' }}
          >
            Student Forms Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Quick access to all the forms you need for your academic journey
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto group">
            <div 
              className="absolute inset-0 opacity-50 group-hover:opacity-100 blur-lg transition-opacity rounded-xl"
              style={{ backgroundColor: '#3554a5' }}
            />
            <div className="relative bg-white rounded-xl shadow-sm">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search forms..."
                className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none"
                style={{ 
                  '--tw-ring-color': '#3554a5',
                  '--tw-ring-offset-width': '2px'
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-6 max-w-7xl mx-auto">
          {Object.entries(categories).map(([category, { icon, forms, color }]) => (
            <CategorySection
              key={category}
              category={category}
              icon={icon}
              forms={forms}
              color={color}
              filteredForms={filteredForms}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormsPage;