import React, { useState } from 'react';
import testimonialData from './CommunityTestimonial.json';
import styles from '../../styles/Community.module.css';
import { FaQuoteLeft } from 'react-icons/fa';
const CommunityTestimonial = () => {
    const [isPaused, setIsPaused] = useState(false);


    const duplicatedData = [...testimonialData, ...testimonialData];

    return (
        <div className="p-4 md:p-14 bg-gray-100">
            <h2 className="text-xl font-bold mb-4">What Folk Says</h2>
            <div
                className={`p-4 md:p-14 ${styles['animate-marquee']} overflow-x-hidden`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="overflow-hidden">
                    <div className={`flex justify-start space-x-10 p-4 md:p-8 ${styles.scrollWrapper}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
                        {duplicatedData.map((testimonial, index) => (
                            <div key={index} className={`bg-transparent border border-black rounded-lg p-4 flex-shrink-0 w-80 ${styles.card}`}>
                                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-start mb-2">
                                    <FaQuoteLeft className="text-gray-500 mr-2 text-3xl mt-1" />
                                    <p className="text-sm md:text-base">{testimonial.thought}</p>
                                </div>
                                <p className="text-gray-600 mt-2">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityTestimonial;

//gre











