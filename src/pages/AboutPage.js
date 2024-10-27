import React from 'react';

const AboutPage = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="mb-6">Ridge International College is committed to providing quality education and training for students across various disciplines. Our mission is to foster growth and success in every student, ensuring that they are prepared for their professional careers.</p>
        <h3 className="text-2xl font-bold mb-4">Message from the CEO</h3>
        <p className="mb-6">"At Ridge International College, we believe that education is the foundation for a successful future. Our experienced faculty and modern facilities provide an environment conducive to learning and growth."</p>
        <h3 className="text-2xl font-bold mb-4">Campus Locations</h3>
        <p>We have campuses located in Melbourne and Sydney, equipped with state-of-the-art facilities to enhance student learning experiences.</p>
      </div>
    </section>
  );
};

export default AboutPage;
