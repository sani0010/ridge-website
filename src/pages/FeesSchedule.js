import React, { useState } from 'react';
import { Search, SortAsc, SortDesc } from 'lucide-react';

const FeesSchedule = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const courseFees = [
    {
      course: "SIT30821 Certificate III in Commercial Cookery",
      melbourne: 12000,
      sydney: null,
      materials: 800
    },
    {
      course: "SIT40521 Certificate IV in Kitchen Management",
      melbourne: 18000,
      sydney: 18000,
      materials: 800
    },
    {
      course: "SIT50422 Diploma of Hospitality Management",
      melbourne: 24000,
      sydney: 24000,
      materials: 800
    },
    {
      course: "SIT60322 Advanced Diploma of Hospitality Management",
      melbourne: 24000,
      sydney: 24000,
      materials: 800
    },
    {
      course: "ICT50220 Diploma of Information Technology",
      melbourne: 11000,
      sydney: null,
      materials: 300
    },
    {
      course: "ICT60220 Advanced Diploma of Information Technology",
      melbourne: 12000,
      sydney: null,
      materials: 300
    },
    {
      course: "General English",
      melbourne: "250/week",
      sydney: null,
      materials: 300
    },
    {
      course: "CHC33021 Certificate III in Individual Support",
      melbourne: 12000,
      sydney: null,
      materials: 300
    },
    {
      course: "CHC43015 Certificate IV in Ageing Support",
      melbourne: 12000,
      sydney: 12000,
      materials: 300
    },
    {
      course: "CHC43121 Certificate IV in Disability Support",
      melbourne: 6000,
      sydney: null,
      materials: 300
    },
    {
      course: "CHC52021 Diploma of Community Services",
      melbourne: 16500,
      sydney: 16500,
      materials: 300
    },
    {
      course: "CHC30121 Certificate III in Early Childhood Education & Care",
      melbourne: 12000,
      sydney: null,
      materials: 300
    },
    {
      course: "CHC50121 Diploma of Early Childhood Education & Care",
      melbourne: 16500,
      sydney: null,
      materials: 300
    },
    {
      course: "BSB50420 Diploma of Leadership and Management",
      melbourne: 10000,
      sydney: null,
      materials: 300
    },
    {
      course: "BSB60420 Advanced Diploma of Leadership and Management",
      melbourne: 12000,
      sydney: null,
      materials: 300
    },
    {
      course: "BSB80120 Graduate Diploma of Management (Learning)",
      melbourne: 11000,
      sydney: null,
      materials: 300
    }
  ];

  const otherFees = [
    { type: "Enrolment fee (Non-refundable)", amount: 200 },
    { type: "Overseas Student Health Cover", amount: null },
    { type: "Deferment Fee", amount: 100 },
    { type: "Change of COE", amount: 100 },
    { type: "Extend of Course Duration", amount: "200 per week" },
    { type: "Supplementary Assessment (2 free re-assessment attempts)", amount: 350 },
    { type: "Unit Repeat cost", amount: 350 },
    { type: "Replacement Student ID", amount: 15 },
    { type: "Credit Transfer", amount: "No Charge" },
    { type: "RPL fees", amount: "150 per unit" },
    { type: "Certificate re-issue fee", amount: 50 },
    { type: "Late payment fees", amount: "10 per day" },
    { type: "Airport pick-up", amount: 100 },
    { type: "Accommodation Placement fee", amount: 100 },
    { type: "Interim academic transcript", amount: "No Charge" },
    { type: "Referral to external professional services", amount: "No Charge" }
];
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredCourses = courseFees.filter(course =>
    course.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (!sortColumn) return 0;
    
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' ? 
        aValue.localeCompare(bValue) : 
        bValue.localeCompare(aValue);
    }
    
    if (sortDirection === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const formatCurrency = (amount) => {
    if (amount === null) return '❌';
    if (typeof amount === 'number') {
      return `$${amount.toLocaleString()}`;
    }
    return `$${amount}`;
  };

  const TableHeader = ({ children, onClick }) => (
    <th 
      className="px-6 py-4 text-left text-sm font-bold text-gray-800 cursor-pointer hover:bg-blue-50 transition-colors duration-150"
      onClick={onClick}
    >
      {children}
    </th>
  );

  const TableCell = ({ children, className = "" }) => (
    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-700 ${className}`}>
      {children}
    </td>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#3554a5] to-[#3554a5] shadow-lg rounded-lg p-8 text-white">
        <h1 className="text-3xl font-bold mb-3">
          Schedule of Fees and Charges 2024-2025
        </h1>
        <p className="text-blue-100 text-lg">
          Fees are quoted in Australian dollars (A$) and are subject to change without notice
        </p>
      </div>

      {/* Course Fees Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Fees</h2>
          
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-[#3554a5] " />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-3 w-full border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#3554a5]  focus:border-[#3554a5]  transition-all duration-150"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Course Fees Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <TableHeader onClick={() => handleSort('course')}>
                    <div className="flex items-center text-[#3554a5] ">
                      Course
                      {sortColumn === 'course' && (
                        sortDirection === 'asc' ? 
                          <SortAsc className="ml-2 h-4 w-4" /> : 
                          <SortDesc className="ml-2 h-4 w-4" />
                      )}
                    </div>
                  </TableHeader>
                  <TableHeader onClick={() => handleSort('melbourne')}>
                    <div className="flex items-center text-[#3554a5] ">
                      Melbourne Tuition
                      {sortColumn === 'melbourne' && (
                        sortDirection === 'asc' ? 
                          <SortAsc className="ml-2 h-4 w-4" /> : 
                          <SortDesc className="ml-2 h-4 w-4" />
                      )}
                    </div>
                  </TableHeader>
                  <TableHeader onClick={() => handleSort('sydney')}>
                    <div className="flex items-center text-[#3554a5] ">
                      Sydney Tuition
                      {sortColumn === 'sydney' && (
                        sortDirection === 'asc' ? 
                          <SortAsc className="ml-2 h-4 w-4" /> : 
                          <SortDesc className="ml-2 h-4 w-4" />
                      )}
                    </div>
                  </TableHeader>
                  <TableHeader onClick={() => handleSort('materials')}>
                    <div className="flex items-center text-[#3554a5] ">
                      Material Fees
                      {sortColumn === 'materials' && (
                        sortDirection === 'asc' ? 
                          <SortAsc className="ml-2 h-4 w-4" /> : 
                          <SortDesc className="ml-2 h-4 w-4" />
                      )}
                    </div>
                  </TableHeader>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedCourses.map((course, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors duration-150">
                    <TableCell className="font-medium text-blue-900">{course.course}</TableCell>
                    <TableCell className="font-semibold">{formatCurrency(course.melbourne)}</TableCell>
                    <TableCell className="font-semibold">{formatCurrency(course.sydney)}</TableCell>
                    <TableCell className="font-semibold">{formatCurrency(course.materials)}</TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Other Fees Section */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Fees and Charges</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#3554a5] ">Fee Type</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-[#3554a5] ">Amount (A$)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {otherFees.map((fee, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition-colors duration-150">
                    <TableCell className="font-medium text-[#3554a5] ">{fee.type}</TableCell>
                    <TableCell className="font-semibold">${fee.amount}</TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesSchedule;