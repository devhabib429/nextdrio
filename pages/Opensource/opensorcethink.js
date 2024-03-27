import React from 'react';
import { FaUsers, FaCode, FaTools, FaGlobe } from 'react-icons/fa';

const OpenSourceThought = () => {
    return (
        <div className="p-16 bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-lg text-white flex flex-col items-center justify-between">
            <h2 className="text-3xl font-bold mb-24 font-serif tracking-widest">Why Open Source ?</h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-16 font-serif tracking-wide">
                <div className="flex items-center">
                    <FaUsers className="text-4xl mr-4" />
                    <p className="text-lg">Community-driven development</p>
                </div>
                <div className="flex items-center">
                    <FaCode className="text-4xl mr-4" />
                    <p className="text-lg">Transparent and accessible codebase</p>
                </div>
                <div className="flex items-center">
                    <FaTools className="text-4xl mr-4" />
                    <p className="text-lg">Flexible and customizable solutions</p>
                </div>
                <div className="flex items-center">
                    <FaGlobe className="text-4xl mr-4" />
                    <p className="text-lg">Global collaboration and innovation</p>
                </div>
                <div className="flex items-center">
                    <FaUsers className="text-4xl mr-4" />
                    <p className="text-lg">Community-driven development</p>
                </div>
                <div className="flex items-center">
                    <FaCode className="text-4xl mr-4" />
                    <p className="text-lg">Transparent and accessible codebase</p>
                </div>
                <div className="flex items-center">
                    <FaTools className="text-4xl mr-4" />
                    <p className="text-lg">Flexible and customizable solutions</p>
                </div>
                <div className="flex items-center">
                    <FaGlobe className="text-4xl mr-4" />
                    <p className="text-lg">Global collaboration and innovation</p>
                </div>
            </div>
        </div>
    );
};

export default OpenSourceThought;
