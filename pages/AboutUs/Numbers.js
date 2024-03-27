import React from 'react';

const Numbers = () => {
    return (
        <div className="flex flex-col md:flex-row justify-around bg-gradient-to-r from-purple-600 to-blue-400 p-4 md:p-8 lg:p-12">
            <div className="flex flex-col items-center my-4 md:my-0 md:mx-4">
                <span className="text-md md:text-xl lg:text-2xl font-semibold pb-4" style={{ lineHeight: '1.25' }}>Meetup</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">20+</span>
            </div>
            <div className="flex flex-col items-center my-4 md:my-0 md:mx-4">
                <span className="text-md md:text-xl lg:text-2xl font-semibold pb-4" style={{ lineHeight: '1.25' }}>Community Member</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">300+</span>
            </div>
            <div className="flex flex-col items-center my-4 md:my-0 md:mx-4">
                <span className="text-md md:text-xl lg:text-2xl font-semibold pb-4" style={{ lineHeight: '1.25' }}>Open Source Project</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">4+</span>
            </div>
            <div className="flex flex-col items-center my-4 md:my-0 md:mx-4">
                <span className="text-md md:text-xl lg:text-2xl font-semibold pb-4" style={{ lineHeight: '1.25' }}>ERP Implemented</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">46+</span>
            </div>
            <div className="flex flex-col items-center my-4 md:my-0 md:mx-4">
                <span className="text-md md:text-xl lg:text-2xl font-semibold pb-4" style={{ lineHeight: '1.25' }}>Digital Product</span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">2+</span>
            </div>
        </div>
    );
};

export default Numbers;

