import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import clientsData from './clients.json'; // Path to your JSON file

const ClientCarousel = () => {
    // State for current client index
    const [currentClientIndex, setCurrentClientIndex] = useState(0);
    // State for animation class
    const [animationClass, setAnimationClass] = useState('');

    // Function to change the current client index
    const changeClient = () => {
        setAnimationClass('fade-out');
        setTimeout(() => {
            setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clientsData.length);
            setAnimationClass('fade-in');
        }, 500);
    };

    // Automatically change client every 3 seconds
    useEffect(() => {
        const interval = setInterval(changeClient, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-16">
            <h2 className="text-2xl font-bold mb-16 text-gray-800">Trusted by Our Clients</h2>
            <div className={`relative rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 mb-4 ${animationClass}`}>
                <Image
                    src={clientsData[currentClientIndex].imageUrl}
                    alt="Client"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={`text-center mb-2 whitespace-normal ${animationClass}`}>
                <p className="text-lg text-gray-800">{clientsData[currentClientIndex].name}</p>
                <div className="container mx-auto">
                    <p className="text-base py-2 text-gray-600">{clientsData[currentClientIndex].companyName}</p>
                    <p className="text-lg text-gray-700">{clientsData[currentClientIndex].description}</p>
                </div>
            </div>
            <div className="flex mt-2 md:mt-4">
                {clientsData.map((client, index) => (
                    <div
                        key={client.id}
                        className={`w-2 h-2 rounded-full mx-1 md:mx-2 ${currentClientIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                        style={{
                            transition: 'background-color 0.3s ease',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ClientCarousel;
