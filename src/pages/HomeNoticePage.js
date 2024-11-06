import React from 'react';
import { motion } from 'framer-motion';

const notices = [
  {
    title: 'Everything You Need to Know About September 2024 Intake',
    date: 'June 8, 2022',
    category: 'Notice',
    description:
      'Ridge International College, a prominent name among the best VET colleges in Melbourne/Sydney is accepting applications for September 2024. To check your eligibility, the scholarships, and course benefits, please contact +61 […].',
  },
  {
    title: 'COVID-19 Notice',
    date: 'March 8, 2019',
    category: 'Notice',
    description:
      'Ridge International College is continuously monitoring Coronavirus outbreak and its impact on our community. We advise our Students and staff to take this matter seriously and do their best to avoid […].',
  },
];

const HomeNoticePage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          Home Notices
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notices.map((notice, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-2">
                  {notice.category}
                </span>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{notice.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{notice.date}</p>
                <p className="text-lg text-gray-600">{notice.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default HomeNoticePage;
