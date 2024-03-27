import React from 'react';

const CommunityBelong = () => {
    // Dummy data for community members
    const members = [
        { id: 1, name: 'LNCT Bhopal', icon: '👤' },
        { id: 2, name: 'CRTD Technologies', icon: '👥' },
        { id: 3, name: 'BIRST Bhopal', icon: '👩‍💼' },
        { id: 4, name: 'Oriental', icon: '🧑‍💻' },
        { id: 5, name: 'Hiremi', icon: '👩‍🎨' }
    ];

    return (
        <div className="p-4 md:p-14">
            <div className="bg-gray-200 rounded-full p-6 md:p-10">
                <h2 className="text-xl md:text-2xl font-semibold mb-8">Our Community Belongs To</h2>
                <div className="flex flex-wrap justify-center gap-x-10">
                    {members.map(member => (
                        <div key={member.id} className="flex items-center mr-4 mb-4">
                            <span className="text-2xl md:text-3xl mr-2">{member.icon}</span>
                            <span className="text-lg md:text-xl">{member.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommunityBelong;
