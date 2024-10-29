import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, Users, Award, BookOpen, 
  GraduationCap, Building2, ChevronRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import CEO from '../assets/ceo.png'

const AboutUsPage = () => {
  const [students, setStudents] = useState(0);
  const [graduates, setGraduates] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeFeature, setActiveFeature] = useState(null);

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

    // Counter Animation
    const animateCounter = (target, setValue) => {
      let count = 0;
      const increment = Math.ceil(target / 100);
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          clearInterval(interval);
          setValue(target);
        } else {
          setValue(count);
        }
      }, 25);
    };

    if (isVisible.stats) {
      animateCounter(5000, setStudents);
      animateCounter(4000, setGraduates);
    }

    return () => observer.disconnect();
  }, [isVisible.stats]);

  const stats = [
    { icon: Users, label: "Students", value: `${students}+` },
    { icon: GraduationCap, label: "Graduates", value: `${graduates}+` },
    { icon: Award, label: "Years of Excellence", value: "10+" },
    { icon: Globe2, label: "International Partners", value: "20+" }
  ];

  const facilities = [
    {
      title: "Modern Classrooms",
      description: "State-of-the-art learning spaces equipped with the latest technology"
    },
    {
      title: "Student Lounges",
      description: "Comfortable spaces for study and collaboration"
    },
    {
      title: "Computer Labs",
      description: "High-performance computers with industry-standard software"
    },
    {
      title: "Library Resources",
      description: "Extensive digital and physical learning materials"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-10 bg-repeat"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 text-white leading-tight"
          >
            Shaping Future Leaders at
            <span className="block bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Ridge International College
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-12"
          >
            A premier institution dedicated to delivering world-class education and fostering global excellence
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6 justify-center"
          >
            <Link to="/courses" className="group relative px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold overflow-hidden">
              <span className="relative z-10">Explore Courses</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link to="/virtual-tour" className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all">
              Virtual Tour
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Stats Section */}
      <section id="stats" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.stats ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section id="ceo" className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.ceo ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Message from CEO
              </h2>
              <p className="text-xl font-semibold text-gray-800 mb-4">Mr. Kishor Raj Aryal, CEO</p>
              <div className="space-y-6 text-gray-600">
                <p>
                Dear Student,
A very warm welcome to Ridge International College!
We are excited to see you on-campus and achieve your academic goals. Here, at Ridge International College, you will find exceptional experiences that allow you to grow and develop, explore new interests, and fully realize your potential. Our friendly staffs are always ready to help you and guide you during your study here at Ridge International College. Our English, Business, Information technology, and hospitality courses are structured and designed to suit industry standards’ that cater to individual needs.

Producing skilled and career-ready graduates have always been central to our mission. Through a process that includes career exploration and professional preparation, we connect you with career paths and foster the skills and mindset needed for professional advancement. Our team is committed to shaping our students’ skills and as a team, we play a role to connect students with the corporate world or professional world which is achieved through internships in the best organization in the market.



With best wishes,
Kishor Raj Aryal
Chief Executive Officer
                </p>
                <p>
                  Here, at Ridge International College, you will find exceptional experiences that allow you to grow and develop, explore new interests, and fully realize your potential.
                </p>
                <p>
                  With best wishes,<br />
                  Kishor Raj Aryal<br />
                  Chief Executive Officer
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden ">
                <img
                  src={CEO}
                  alt="CEO Kishor Raj Aryal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-indigo-100 rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.facilities ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Campus Location and Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience learning in our state-of-the-art facilities designed for academic excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.facilities ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                onMouseEnter={() => setActiveFeature(idx)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <Building2 className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">{facility.title}</h3>
                <p className="text-gray-600 mb-6">{facility.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span className="mr-2">Learn More</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;