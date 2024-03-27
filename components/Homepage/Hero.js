import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/hero.json';

const Hero = () => {
    // Lottie options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="relative h-screen flex items-center justify-center">
            {/* Lottie Animation */}
            <div className="absolute inset-0">
                <Lottie options={defaultOptions} height="100%" width="100%" />
            </div>

            {/* Overlay for Transparency */}
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            {/* Content */}
            <div className="z-10 text-center text-white relative">
                <h1 className="text-4xl tracking-wider leading-[50px] text-wrap font-bold mb-4">Welcome to NextDrio Where businesses ignite their <br /> evolution with the spark of seamless software innovation.</h1>
                <p className="text-lg"></p>
            </div>
        </div>
    );
};

export default Hero;
