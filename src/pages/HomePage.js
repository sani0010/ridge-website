// HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import NewsAndEvents from '../components/NewsAndEvents.js'; // Ensure this is PascalCase
import WhyChooseUs from '../components/WhyChooseUs';
import LandingPage from '../components/LandingPage';
import Testimonials from '../components/Testimonials.js';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LandingPage />
      <NewsAndEvents />
      <Testimonials />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
