import React from 'react';
import servicesData from './servicesData.json';

const ServiceSection = () => {
    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold mt-14 mb-24 ml-16">Elevate your business with our <br /> comprehensive offerings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden px-4 py-4" // Added padding classes here
                    >
                        <img
                            src={`/icons/${service.icon}`}
                            alt={service.name}
                            className="pl-8 mt-2 mb-2" // Center image and add margin top and bottom
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

