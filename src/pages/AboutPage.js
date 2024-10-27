import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  Users, 
  Award, 
  BookOpen, 
  MapPin, 
  GraduationCap,
  Building2
} from 'lucide-react';

// Import images
import heroBg1 from '../assets/hero-bg1.jpg';
import heroBg2 from '../assets/hero-bg2.jpg';
import ceoImage from '../assets/ceo.png'
const AboutUsPage = () => {
  const [students, setStudents] = useState(0);
  const [graduates, setGraduates] = useState(0);

  useEffect(() => {
    // Function to animate counting
    const animateCounter = (target, setValue) => {
      let count = 0;
      const increment = Math.ceil(target / 100); // Increment value
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          clearInterval(interval);
          setValue(target); // Ensure it sets to exact target
        } else {
          setValue(count);
        }
      }, 25); // Adjust time for smoother animation
    };

    animateCounter(5000, setStudents);
    animateCounter(1000, setGraduates);
  }, []);

  const stats = [
    { icon: Users, label: "Students", value: `${students}+` },
    { icon: GraduationCap, label: "Graduates", value: `${graduates}+` },
    { icon: Award, label: "Years of Excellence", value: "15+" },
    { icon: Globe2, label: "International Partners", value: "50+" }
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-orange-600/90"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg1})` }}></div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6 text-shadow">Shaping Future Leaders</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ridge International College is a premier institution dedicated to delivering world-class education and fostering global excellence.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/courses" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
                Explore Courses
              </Link>
              <Link to="/virtual-tour" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition duration-300">
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
            {/* Message from CEO Section */}
            <div className="bg-white py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Message from CEO</h2>
            <p className="text-xl font-semibold text-gray-800 mb-4">Mr. Kishor Raj Aryal, CEO</p>
            <p className="text-gray-700 mb-6">
              Dear Student, A very warm welcome to Ridge International College!
              We are excited to see you on-campus and achieve your academic goals. 
              Here, at Ridge International College, you will find exceptional experiences that allow you to grow and develop, 
              explore new interests, and fully realize your potential. Our friendly staff is always ready to help you and guide you during your study here. 
              Our courses are structured and designed to meet industry standards to cater to individual needs.
            </p>
            <p className="text-gray-700 mb-6">
              Producing skilled and career-ready graduates is central to our mission. 
              Our programs connect you with career paths and foster the skills and mindset needed for professional advancement. 
              You will make strong connections and friendships that last a lifetime, supported by a team dedicated to your success.
            </p>
            <p className="text-gray-700">
              With best wishes,<br />
              Kishor Raj Aryal<br />
              Chief Executive Officer
            </p>
          </div>
          <div>
            <img
              src={ceoImage}
              alt="CEO Kishor Raj Aryal"
              className="rounded-lg h-90 w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Excellence in Education
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  As a registered CRICOS provider (03747K), Ridge International College delivers progressive and flexible courses benchmarked against global standards.
                </p>
                <p className="text-gray-600">
                  Our distinguished faculty includes PhD and Master's degree holders with extensive teaching experience and industry expertise.
                </p>
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700">Internationally Recognized Qualifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700">Industry-Aligned Curriculum</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-orange-500" />
                    <span className="text-gray-700">Expert Teaching Staff</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={heroBg2} // Using the hero-bg1 image
                alt="Campus"
                className="rounded-lg shadow-lg h-80 w-full object-cover"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-orange-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-900 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            World-Class Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition duration-300">
                <Building2 className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Location */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Locations</h2>
              <p className="mb-8">
                Our campuses in Melbourne and Sydney are strategically located for easy access, with Melbourne campus situated within the 'Free Tram Zone'.
              </p>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-orange-500" />
                <span>Melbourne CBD & Sydney CBD</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Ready to Join Us?</h3>
                <p className="mb-6">Take the first step towards your future success</p>
                <Link to="/apply" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
