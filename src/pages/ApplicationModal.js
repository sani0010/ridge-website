import React, { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';

const ApplicationModal = ({ isOpen, onClose }) => {
  const [loginMethod, setLoginMethod] = useState('form');
  const [formData, setFormData] = useState({
    givenName: '',
    familyName: '',
    email: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    setLoginMethod(provider);
    // Add your social login logic here
  };

  const renderLoginButtons = () => (
    <div className="space-y-4 mb-6">
      <button 
        className="w-full flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50"
        onClick={() => handleSocialLogin('google')}
      >
        <img src="/api/placeholder/24/24" alt="Google" className="w-6 h-6" />
        Continue with Google
      </button>
      <button 
        className="w-full flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50"
        onClick={() => handleSocialLogin('apple')}
      >
        <img src="/api/placeholder/24/24" alt="Apple" className="w-6 h-6" />
        Continue with Apple
      </button>
      <button 
        className="w-full flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50"
        onClick={() => handleSocialLogin('facebook')}
      >
        <img src="/api/placeholder/24/24" alt="Facebook" className="w-6 h-6" />
        Continue with Facebook
      </button>
    </div>
  );

  const renderForm = () => (
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
          onChange={(e) => setFormData({...formData, givenName: e.target.value})}
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
          onChange={(e) => setFormData({...formData, familyName: e.target.value})}
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
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#3554a5] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#2a4384] transition-colors"
      >
        Create Account
      </button>
    </form>
  );

  const renderContent = () => {
    if (loginMethod !== 'form') {
      return (
        <div className="text-center">
          <button 
            onClick={() => setLoginMethod('form')}
            className="mb-4 flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to login options
          </button>
          <div className="p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3554a5] mx-auto mb-4"></div>
            <p className="text-gray-600">Connecting to {loginMethod}...</p>
          </div>
        </div>
      );
    }

    return (
      <>
        {renderLoginButtons()}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
          </div>
        </div>
        {renderForm()}
      </>
    );
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

        {renderContent()}
      </div>
    </div>
  );
};

export default ApplicationModal;