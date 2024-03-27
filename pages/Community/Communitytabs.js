import React, { useState } from 'react';

const CommunityTab = () => {
    const [activeTab, setActiveTab] = useState('meetup');

    const handleTabChange = tab => {
        setActiveTab(tab);
    };

    const tabContent = {
        meetup: (
            <div className='flex flex-col justify-center items-center py-20'>
                <h2 className='text-2xl font-bold'>Comming Soon !</h2>
                <p className='text-xl'>Stay Tune For Meetup.</p>
            </div>
        ),
        events: (
            <div className='flex flex-col justify-center items-center py-20'>
                <h2 className='text-2xl font-bold'>Comming Soon !</h2>
                <p className='text-xl'>Stay Tune For Events.</p>
            </div>
        ),
        notice: (
            <div className='flex flex-col justify-center items-center py-20'>
                <h2 className='text-2xl font-bold'>Comming Soon !</h2>
                <p className='text-xl'>Stay Tune For Notice.</p>
            </div>
        )
    };

    return (
        <div className="p-4 md:p-14">
            <div className="overflow-hidden">
                <div className="flex bg-blue-100 py-5 rounded-full">
                    <button
                        className={`py-2 px-2 w-full focus:outline-none ${activeTab === 'meetup' ? 'text-gray-700' : 'rounded-3xl text-gray-700 hover:bg-red-100'}`}
                        onClick={() => handleTabChange('meetup')}
                    >
                        Meetup
                    </button>
                    <button
                        className={`py-2 px-4 w-full focus:outline-none ${activeTab === 'events' ? 'text-gray-700' : ' rounded-3xl text-gray-700 hover:bg-green-100'}`}
                        onClick={() => handleTabChange('events')}
                    >
                        Events
                    </button>
                    <button
                        className={`py-2 px-4 w-full focus:outline-none ${activeTab === 'notice' ? 'text-gray-700' : ' rounded-3xl text-gray-700 hover:bg-orange-100'}`}
                        onClick={() => handleTabChange('notice')}
                    >
                        Notice
                    </button>
                </div>
                <div className="bg-white p-6 rounded-b-lg">
                    {tabContent[activeTab]}
                </div>
            </div>
        </div>
    );
};

export default CommunityTab;
