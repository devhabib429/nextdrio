// import React from 'react';
// import teamData from './teamsData.json'; // Import your JSON file

// const TeamMemberCard = ({ image, name, designation }) => {
//     return (
//         <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center overflow-hidden hover:scale-105 transition duration-300">
//             <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full mb-4 transform hover:scale-125 transition duration-300" />
//             <h3 className="text-xl font-semibold mb-2">{name}</h3>
//             <p className="text-gray-600">{designation}</p>
//         </div>
//     );
// };

// const OurTeamGlimpse = () => {
//     return (
//         <div className="container mx-auto pt-10 bg-gray-100">
//             <h2 className="text-3xl font-bold mb-8 mt-8 text-center">Our Team Glimpse</h2>
//             <p className="text-lg text-gray-700 mb-16"></p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {teamData.map(member => (
//                     <TeamMemberCard key={member.id} {...member} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurTeamGlimpse;


import React from 'react';
import teamData from './teamsData.json'; // Import your JSON file

const TeamMemberCard = ({ image, name, designation }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center overflow-hidden hover:scale-105 transition duration-300">
            <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full mb-4 transform hover:scale-125 transition duration-300" />
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600">{designation}</p>
        </div>
    );
};

const OurTeamGlimpse = () => {
    return (
        <div className="pt-10 pb-10 bg-gray-100">
            <h2 className="text-3xl font-bold mb-8 mt-8 text-center">Our Team Glimpse</h2>
            <p className="text-lg text-gray-700 mb-16"></p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-screen-xl px-4">
                {teamData.map(member => (
                    <TeamMemberCard key={member.id} {...member} />
                ))}
            </div>
        </div>
    );
};

export default OurTeamGlimpse;

