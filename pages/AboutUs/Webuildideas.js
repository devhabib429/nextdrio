import React from 'react';

const Webuildideas = () => {
    return (
        <div className="flex flex-col md:flex-row pt-8 md:pt-16 pb-8 md:pb-24 bg-gray-100">
            <div className="md:w-1/2 flex justify-center md:justify-center y-32">
                <img
                    src="/image/webuildideas.png"
                    alt="Description of the image"
                    className="h-[400px] md:h-140 w-auto px-8 md:px-16 lg:px-24 my-8 md:my-0"
                />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-8 lg:px-16">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-8 md:mb-16">We Build Ideas into Reality</h1>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 text-left mb-4 md:mb-6">
                    NextDrio, born in 2024, is India&apos;s innovation hub, revolutionizing global business across sectors. With visionary passion, we redefine excellence in every service.
                </p>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 text-left mb-4 md:mb-6">
                    Join us on a transformative journey. From Mobile App Development to CRM Solutions, E-Commerce to Website Creation, and UX/UI Design to Marketing Automation, we are your cornerstone for digital evolution.
                </p>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 text-left">
                    &quot;Join NextDrio Open Source community! Embrace boundless innovation and collaboration as we shape the future of technology together.&quot;
                </p>
            </div>
        </div>
    );
};

export default Webuildideas;
