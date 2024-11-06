import React from 'react';
import { motion } from 'framer-motion';

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

const FormsPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <motion.section
        className="container mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Important Forms
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formsData.map((form, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{form.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{form.description}</p>
              <a
                href={form.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Form
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default FormsPage;
