import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const policies = [
  {
    name: 'Health and Safety Policy & Procedures',
    url: 'https://ridge.edu.au/wp-content/uploads/2023/04/6.1.12-Work-Health-and-Safety-Occupational-Health-and-Safety-Policy-and-Procedure-_Ridge-International-College_V2.1.pdf'
  },
  {
    name: 'Critical Incident Policy and Procedures',
    url: 'https://ridge.edu.au/wp-content/uploads/2023/04/3.1.8-Critical-Incidents-Policy-Procedure-_Ridge-Internatioal-College_V2.1.pdf'
  },
  {
    name: 'Credit Policy & Procedure',
    url: 'https://ridge.edu.au/wp-content/uploads/2024/08/2.1.6-Course-Credit-Policy-Procedure_Ridge-International-College_V2.3.pdf'
  },
  {
    name: 'Complaints and Appeals Policy & Procedures',
    url: 'https://ridge.edu.au/wp-content/uploads/2022/07/3.1.6-Complaints-and-Appeals-Policy-Procedure-Ridge_V3.0.pdf'
  },
  {
    name: 'Fees Payment and Charges Policy & Procedures',
    url: 'https://ridge.edu.au/wp-content/uploads/2024/09/2.1.8-Fees-charges-and-refunds-Policy-Procedure_Ridge-International-College_V3.0.pdf'
  },
  {
    name: 'Refunds Policy & Procedures',
    url: 'https://ridge.edu.au/wp-content/uploads/2022/07/2.1.9-Refund-Policy-Procedure_Ridge_v3.0.pdf'
  },
  {
    name: 'Course Transfer Policy and Procedure',
    url: 'https://ridge.edu.au/wp-content/uploads/2023/05/Course-Transfer-Policy-and-Procedurev1.2.pdf'
  },
  {
    name: 'Course Progress Policy and Procedure',
    url: 'https://ridge.edu.au/wp-content/uploads/2023/05/3.1.10-Student-progress-and-Course-Progress-Policy-Procedure_Ridge-International-College_V2.1-1.pdf'
  },
  {
    name: 'Deferral, Suspension and Cancellation Policy and Procedure',
    url: 'https://ridge.edu.au/wp-content/uploads/2023/04/3.1.14-Deferral-Suspension-or-Cancellation-of-Student-Policy-and-Procedure-_Ridge-International-College_V2.1.pdf'
  },
  {
    name: 'Privacy Policy and Procedure',
    url: 'https://ridge.edu.au/wp-content/uploads/2023/04/6.1.8-Privacy-and-Confidentiality-Policy-Procedure-_Ridge-International-College_V2.1.pdf'
  },
  {
    name: 'Monitoring Students Attendance Policy and Procedure',
    url: 'https://ridge.edu.au/wp-content/uploads/2023/05/3.1.3-Monitoring-Student-Attendance-Policy-Procedure-_V2.0.pdf'
  }
];

const PoliciesPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center animate-slide-down">
          College Policies & Procedures
        </h1>
        
        <div className="grid gap-4">
          {policies.map((policy, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-slide-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: `slideUp 0.5s ease-out ${index * 100}ms forwards`
              }}
            >
              <a 
                href={policy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-medium group-hover:text-blue-600 transition-colors duration-200">
                    {policy.name}
                  </span>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.5s ease-out forwards;
        }

        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PoliciesPage;