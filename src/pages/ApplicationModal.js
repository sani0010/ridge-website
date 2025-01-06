import React, { useState } from 'react';
import { X } from 'lucide-react';

const ApplicationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    givenName: '',
    familyName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // to manage the submitting state

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show a loading indicator when the form is submitting
    setIsSubmitting(true);

    // Send the form data to the backend
    fetch('http://localhost:5000/api/send-application-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Email sent successfully:', data);
        setIsSubmitting(false); // hide the loading indicator
        onClose(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setIsSubmitting(false); // hide the loading indicator
      });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Application Form</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Given Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded-lg"
              value={formData.givenName}
              onChange={(e) => setFormData({ ...formData, givenName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Family Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded-lg"
              value={formData.familyName}
              onChange={(e) => setFormData({ ...formData, familyName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full p-3 border rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#3554a5] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#2a4384] transition-colors"
            disabled={isSubmitting} // Disable the button while submitting
          >
            {isSubmitting ? 'Submitting...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;
