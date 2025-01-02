import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, Users, Award,
  GraduationCap, Building2, BookOpen, Target, Clock 
} from 'lucide-react';
import { motion } from 'framer-motion';
import CEO from '../assets/ceo.png';
import heroBg from '../assets/hero-bg1.jpg';
import campusImg1 from '../assets/campus1.jpg';
import campusImg2 from '../assets/campus2.jpg';
import campusImg3 from '../assets/campus3.jpg';
import campusImg4 from '../assets/campus4.png';
import campusImg5 from '../assets/campus5.jpg';
import campusImg6 from '../assets/campus6.jpg';
import campusImg7 from '../assets/campus7.jpg';
import campusImg8 from '../assets/campus8.jpg';


const AboutUsPage = () => {
  const [students, setStudents] = useState(0);
  const [graduates, setGraduates] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const campusRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToCampusTour = () => {
    campusRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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

    const animateCounter = (target, setValue, delay = 0) => {
      setTimeout(() => {
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
      }, delay);
    };

    if (isVisible.stats) {
      if (isMobile) {
        animateCounter(15, setStudents, 0);
        animateCounter(4000, setGraduates, 1000);
      } else {
        animateCounter(15, setStudents);
        animateCounter(4000, setGraduates);
      }
    }

    return () => observer.disconnect();
  }, [isVisible.stats, isMobile]);

  const stats = [
    { icon: Users, label: "Student Diversity", value: `${students}+` },
    { icon: GraduationCap, label: "Graduates", value: `${graduates}+` },
    { icon: Award, label: "Years of Excellence", value: "7+" },
    { icon: Globe2, label: "Student survey report", value: "4.69/5" }
  ];

  const facilities = [
    {
      title: "Modern Classrooms",
      description: "Ridge International College is dedicated to providing a modern classroom experience that integrates technology, fosters flexibility, and promotes student-centered learning.",
      image: campusImg8
    },
    {
      title: "Student Lounges",
      description: "The Student Breakout areas provide lounge areas for students with kitchenette meal preparation area which include microwave ovens, refrigerators, sink area, and hot/chilled drinking water.",
      image: campusImg1
    },
    {
      title: "Computer Lab",
      description: "There are sufficient student computers networked together on campus. All computers are installed with Microsoft Office Suite software, specialized translating/interpreting software and have Broadband Internet access. Wireless Broadband Internet access is also available to students for access from personal laptop and notebook devices.",
      image: campusImg5
    },
    {
      title: "Campus Facilities",
      description: "Each classroom is equipped with up-to-date computer with broadband internet access, audio-visual facilities to provide students with a comfortable and inviting study environment.",
      image: campusImg7
    }
  ];

  const campusImages = [
    campusImg1, campusImg2, campusImg3, campusImg4,
    campusImg5, campusImg6, campusImg7, campusImg8
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div 
        className="relative min-h-[600px] h-screen flex items-center justify-center bg-cover bg-center overflow-hidden px-4"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight px-4 "
          >
            Shaping Future Leaders at
            <span className="block bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent leading-[1.4]">
              Ridge International College
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 px-4"
          >
          Dedicated to delivering world-class education and fostering global excellence
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4"
          >
            <Link 
              to="/courses" 
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-white text-blue-900 rounded-xl font-semibold overflow-hidden text-center"
            >
              <span className="relative z-10">Explore Courses</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <button 
              onClick={scrollToCampusTour} 
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all"
            >
              Virtual Tour
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Stats Section */}
      <section id="stats" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.stats ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: isMobile ? index * 0.5 : index * 0.2
                  }
                } : {}}
                className="text-center bg-white p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <stat.icon className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="college-overview" className="py-8 md:py-12 bg-white">
  <div className="container mx-auto max-w-6xl px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible['college-overview'] ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-gray-700">
        About Ridge International College
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-base md:text-lg leading-relaxed mb-16">
        <p>
        Ridge International College was established in the aim of providing high quality training to students. We are endeavoured to sourcing top trainers and designing high quality training and assessment materials for students. We have a team of professional and friendly staff and strive to provide the best training and support services to you.
        </p>
        <p>
        We also have an exceptional teaching team, trainers with excellent academic skills holding PhD or Masters degrees, along with a great deal of teaching experience and practical knowledge from working in the industry, they are amongst the best in the respective field. Leadership and management  trainers also have enriched business and team leading experience and they are all very active in business. At our institute, only the most up-to-date knowledge and skills will be brought into our training and we ensure that we deliver quality outcomes for students, industry and the Australian economy.
        </p>
        <p>
        We are located in Melbourne and Sydney, and are equipped with up-to-date broadband internet-connected computers, audio-visual facilities, spacious and bright classrooms, and a comfortable and inviting study environment that is rich with resources. We are within Melbourne’s ‘Free Tram Zone’ (includes all areas of the CBD).

We have our own kitchen very close to the city where we can travel by tram in Melbourne.
        </p>
      </div>
<div className="grid md:grid-cols-3 gap-6">
  {/* Our Mission Section */}
  <motion.div
    className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-500"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
  >
    <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
    <p className="text-sm text-gray-600">
    To empower students with the knowledge, skills, and values necessary to lead fulfilling lives, contribute meaningfully to society, and excel in their chosen fields
    </p>
  </motion.div>

  {/* Our Approach Section */}
  <motion.div
    className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-500"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
  >
    <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Approach</h3>
    <p className="text-sm text-gray-600">
    Providing a dynamic and interdisciplinary curriculum that integrates theoretical knowledge with practical applications and cultivating a supportive learning community that values diversity, equity, and global perspectives

    </p>
  </motion.div>

  {/* Our Commitment Section */}
  <motion.div
    className="bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-500"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
  >
    <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Commitment</h3>
    <p className="text-sm text-gray-600">
    Upholding academic excellence and integrity and supporting lifelong learning and career success through continuous innovation and partnerships
    </p>
  </motion.div>
</div>


    </motion.div>
  </div>
</section>


      {/* CEO Section */}
      <section id="ceo" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.ceo ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent py-3">
                Message from CEO
              </h2>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Mr. Kishor Raj Aryal, CEO</p>
              <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-600">
                <p>
                  Dear Student,
                  A very warm welcome to Ridge International College!
                  We are excited to see you on-campus and achieve your academic goals. Here, at Ridge International College, you will find exceptional experiences that allow you to grow and develop, explore new interests, and fully realize your potential.
                </p>
                <p>
                  Our friendly staffs are always ready to help you and guide you during your study here at Ridge International College. Our English, Business, Information technology, and hospitality courses are structured and designed to suit industry standards' that cater to individual needs.
                </p>
                <p>
                  Producing skilled and career-ready graduates have always been central to our mission. Through a process that includes career exploration and professional preparation, we connect you with career paths and foster the skills and mindset needed for professional advancement.
                </p>
                <p>
                  With best wishes,<br />
                  <span class="font-bold">Kishor Raj Aryal</span><br />
                  Chief Executive Officer
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible.ceo ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-auto"
            >
              <img 
                src={CEO} 
                alt="CEO" 
                className="w-full h-full object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campus Tour Section */}
      <section id="campus" className="py-16 md:py-24 bg-gray-50" ref={campusRef}>
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.campus ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            Campus Tour
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible.campus ? "visible" : "hidden"}
          >
            {campusImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative w-full pb-[100%] overflow-hidden rounded-lg shadow-lg cursor-pointer bg-gray-200"
                variants={imageVariants}
                whileHover="hover"
              >
                <img 
                  src={image} 
                  alt={`Campus${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div className="container mx-auto max-w-6xl px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Campus Facilities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Experience learning in our state-of-the-art facilities designed for academic excellence
        </p>
      </motion.div>

      {facilities.map((facility, idx) => (
        <motion.div 
          key={idx} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.4,
            delay: idx * 0.1
          }}
          className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
            idx % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <motion.div 
            className="w-full md:w-1/2 p-6"
            initial={{ x: idx % 2 === 0 ? -30 : 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="mb-6">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <motion.h3 
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {facility.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {facility.description}
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ x: idx % 2 === 0 ? 30 : -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </section>
    </div>
  );
};

export default AboutUsPage;