import React, { useEffect, useState } from 'react';
import eventImage from '../assets/Scholarship.png';
import heroVideo from '../assets/video.mp4';
import { Link } from 'react-router-dom';
import Chatbot from '../pages/Chatbot';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const successTexts = React.useMemo(() => [
    "Your path to success starts here",
    "Unlock your potential with us",
    "Shape your future today",
    "Excellence in education awaits"
  ], []);

  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem('modalShown');
    if (!hasModalBeenShown) {
      setIsModalOpen(true);
      sessionStorage.setItem('modalShown', 'true');
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatbotVisible(true);
    }, 2000); // Chatbot will pop up after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const waitTime = 2000;

    const type = () => {
      const currentText = successTexts[currentTextIndex];

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), waitTime);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % successTexts.length);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentTextIndex, isDeleting, successTexts]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
      </div>

      <div className="relative h-full z-10">
        <div className="flex flex-col justify-center items-center h-full text-white text-center p-4 md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to Ridge International College
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 min-h-[2.5rem] font-mono">
            {displayText}
            <span className="animate-blink">|</span>
          </p>
          <Link to="/about#college-overview">
            <button className="bg-[#F26722] text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#e0561b] transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
            {/* Modal for Event Image */}
            {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="bg-white rounded-lg p-1 w-full max-w-lg md:w-1/2 lg:w-1/3 text-center relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-white ring-2 ring-gray-300 hover:bg-gray-100 focus:outline-none z-10"
            >
              <span className="text-gray-800 text-xl font-bold">×</span>
            </button>
            <img
              src={eventImage}
              alt="Event"
              className="rounded-lg w-full h-auto object-cover mb-0"
            />
          </div>
        </div>
      )}

      {isChatbotVisible && (
        <div
          className="fixed bottom-5 right-5 z-50 p-0 bg-transparent rounded-lg shadow-none transition-transform duration-500 transform scale-0 animate-chatbot-pop"
        >
          <Chatbot />
        </div>
      )}

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes chatbot-pop {
          0% {
            transform: scale(0);
          }
          60% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-chatbot-pop {
          animation: chatbot-pop 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;