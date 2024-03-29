// import React from 'react';
// import jobsData from './jobs.json';

// const JobCard = ({ job }) => {
//     return (
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
//             <div className="font-semibold text-xl mb-2">{job.title}</div>
//             <p className="text-gray-700 text-base mb-2">{job.employmentType}</p>
//             <p className="text-gray-700 text-base mb-2">{job.location}</p>
//             <p className="text-gray-700 text-base mb-4">{job.experience}</p>
//             <div className="flex justify-end">
//                 <button className="bg-transparent border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-600">
//                     Apply
//                 </button>
//             </div>
//         </div>
//     );
// };

// const HiringSection = () => {
//     return (
//         <div className="container mx-auto py-8">
//             <div className="text-center">
//                 <h1 className="text-3xl font-semibold mb-2 py-8 relative inline-block">
//                     We are Hiring
//                     <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300"></span>
//                 </h1>
//                 <p className="text-lg text-gray-700 mb-8">Check out our open positions </p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                 {jobsData.map((job, index) => (
//                     <JobCard key={index} job={job} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HiringSection;

import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import jobsData from './jobs.json';

const JobCard = ({ job, isVisible }) => {
    const [showModal, setShowModal] = useState(false);
    const titleAnimationProps = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        config: config.default
    });

    const detailAnimationProps = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        config: config.gentle
    });

    const handleApplyClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        // Handle form submission here
        e.preventDefault();
        console.log('Form submitted for job:', job.title);
        // You can add your form submission logic here
    };

    return (
        <div>
            <animated.div style={titleAnimationProps} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <div className="font-semibold text-2xl mb-4">{job.title}</div>
                <animated.p style={detailAnimationProps} className="text-gray-700 text-md mb-1">{job.employmentType}</animated.p>
                <animated.p style={detailAnimationProps} className="text-gray-700 text-md mb-1">{job.location}</animated.p>
                <animated.p style={detailAnimationProps} className="text-gray-700 text-md mb-1">{job.experience}</animated.p>
                <div className="flex justify-end">
                    <button onClick={handleApplyClick} className="bg-transparent border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-600">
                        Apply
                    </button>
                </div>
            </animated.div>
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <div className="relative bg-white rounded-lg overflow-hidden max-w-md p-6">
                            <div className="absolute top-0 right-0">
                                <button onClick={closeModal} className="text-gray-700 hover:text-gray-900">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <h2 className="text-lg font-semibold mb-8">Apply for {job.title}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label htmlFor="firstName" className="block text-sm text-gray-700 mb-1">First Name</label>
                                    <input type="text" id="firstName" name="firstName" className="border-b border-gray-400 focus:border-blue-500 px-3 py-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="lastName" className="block text-sm text-gray-700 mb-1">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" className="border-b border-gray-400 focus:border-blue-500 px-3 py-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
                                    <input type="email" id="email" name="email" className="border-b border-gray-400 focus:border-blue-500 px-3 py-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="phone" className="block text-sm text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="border-b border-gray-400 focus:border-blue-500 px-3 py-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="address" className="block text-sm text-gray-700 mb-1">Address</label>
                                    <input type="text" id="address" name="address" className="border-b border-gray-400 focus:border-blue-500 px-3 py-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="resume" className="block text-sm text-gray-700 mb-1">Resume Upload</label>
                                    <input type="file" id="resume" name="resume" className="border-b border-gray-400 focus:border-blue-500 px-3 py-1 w-full" />
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button type="submit" className="bg-transparent border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const HiringSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <div className="container mx-auto py-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 py-8 relative inline-block text-blue-500">
                    We are Hiring
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300"></span>
                </h1>
                <p className="text-lg text-gray-700 mb-8">Explore our open positions below:</p>
            </div>
            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {jobsData.map((job, index) => (
                    <JobCard key={index} job={job} isVisible={inView} />
                ))}
            </div>
        </div>
    );
};

export default HiringSection;
