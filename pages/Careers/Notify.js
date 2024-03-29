import React, { useState } from 'react';

const Notify = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNotifyClick = () => {
    openModal();
  };

  const handleNotifyConfirm = () => {
    console.log('Email submitted:', email);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gradient-to-r from-purple-600 to-blue-400">
      <h1 className="text-5xl font-extrabold text-white mb-8">Stay Updated with Job Openings</h1>
      <button className="bg-purple-600 text-white hover:bg-blue-400 hover:text-white rounded-full py-3 px-8 font-semibold text-lg shadow-lg transition duration-300 ease-in-out" onClick={handleNotifyClick}>
        Notify Me
      </button>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Email</h2>
            <input type="email" value={email} onChange={handleEmailChange} className="border border-gray-400 rounded px-4 py-2 mb-4 w-full focus:outline-none focus:border-purple-600" placeholder="Your Email" />
            <div className="flex justify-center">
              <button onClick={handleNotifyConfirm} className="bg-purple-600 text-white rounded px-6 py-2 mr-2 hover:bg-blue-400 transition duration-300 ease-in-out">Confirm</button>
              <button onClick={closeModal} className="bg-gray-300 text-gray-700 rounded px-6 py-2 hover:bg-gray-400 transition duration-300 ease-in-out">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notify;
