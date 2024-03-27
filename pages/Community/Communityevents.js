import React from 'react';
import eventData from './Communityevents.json';

const CommunityEvents = () => {
    const colors = ['bg-blue-200', 'bg-red-200', 'bg-gray-200', 'bg-green-200'];

    return (
        <div className="p-4 md:p-14">
            <h1 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-16">Upcoming session with creative folks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-x-16 md:gap-y-16">
                {eventData.map((event, index) => (
                    <div key={event.id} className={`p-4 rounded-lg shadow-md ${colors[index % colors.length]}`}>
                        <h2 className="text-lg md:text-xl font-bold pb-2 md:pb-4">{event.heading}</h2>
                        <p className="text-gray-700 text-sm md:text-base">{event.description}</p>
                        <p className="text-gray-500 py-2 md:py-4">By {event.author}</p>
                        <div className="bg-transparent p-2 md:p-4 rounded-lg w-full md:w-48 h-12 md:h-14">
                            {event.designation}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityEvents;
