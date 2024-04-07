import React from 'react';
import servicesData from './servicesData.json';

const ServiceSection = () => {
    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold mt-3 mb-16 ml-8 text-center">
                Transform Your Business with Our <br /> <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text inline-block">
                    Tailored
                </span> Solution
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden px-4 py-4 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <img
                            src={service.icon}
                            alt={service.name}
                            className="pl-8 mt-2 mb-2"
                            style={{ maxWidth: '100px' }}
                        />
                        <div className="p-4 pl-4">
                            <h3 className="text-lg font-semibold mb-4">{service.name}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
