// // Apply.js

// import React from 'react';

// const Apply = () => {
//     return (
//         <div className="flex flex-col items-center justify-center py-32">
//             <h2 className="text-2xl font-bold mb-4">Apply for a Space</h2>
//             <button className="py-2 px-4 bg-blue-500 text-white rounded-full text-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Book a Space</button>
//         </div>
//     );
// };

// export default Apply;



// Apply.js

import React from 'react';

const Apply = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 to-indigo-600 py-12 px-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-white mb-6">Unlock Your Dream Space</h2>
      <p className="text-lg text-center text-white mb-8">Ready to elevate your space to the next level? Book your spot now and experience a seamless journey towards your dream space.</p>
      <button className="py-3 px-8 bg-white text-indigo-600 font-semibold rounded-full text-lg hover:bg-indigo-700 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-purple-700">Book Now</button>
    </div>
  );
};

export default Apply;
