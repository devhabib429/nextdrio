import React from 'react';

const Technologies = () => {
    return (
        <div className="flex flex-col md:flex-row pt-8 md:pt-16 pb-8 md:pb-24 bg-gray-100">
            <div className="md:w-1/2 flex justify-center md:justify-center y-32">
                <img
                    src="/image/technologies.png"
                    alt="Description of the image"
                    className="h-auto md:h-140 w-auto md:max-w-full px-8 md:px-16 lg:px-24 my-8 md:my-0"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-8 lg:px-16">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-8 md:mb-16">Bring Along Your Favorite Technology</h1>
                <p className="text-base text-gray-600 text-center md:text-left mb-4 md:mb-6">
                    "Join NextDrio's Open Source community and bring your favorite technology with you! Dive into a world of boundless innovation and collaboration, where together, we'll shape the future of tech."
                </p>
            </div>
        </div>
    );
};

export default Technologies;
