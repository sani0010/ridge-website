import React from 'react';

const ContactPage = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="mb-6">For inquiries, please contact us at our campuses in Melbourne or Sydney.</p>
        <h3 className="text-2xl font-bold mb-4">Melbourne Campus</h3>
        <p className="mb-6">123 Main St, Melbourne, VIC 3000</p>
        <h3 className="text-2xl font-bold mb-4">Sydney Campus</h3>
        <p>456 King St, Sydney, NSW 2000</p>
      </div>
    </section>
  );
};

export default ContactPage;
