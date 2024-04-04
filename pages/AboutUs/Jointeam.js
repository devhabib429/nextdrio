// import React from 'react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// const Jointeam = () => {
//     return (
//         <div className="container mx-auto py-8 px-2 md:py-32 md:px-4 flex flex-col md:flex-row items-center justify-around">
//             <div className="text-center md:text-right md:w-1/2 md:pr-12 mb-4 md:mb-0">
//                 <h2 className="text-3xl font-bold md:mr-8">Join Our Team</h2>
//             </div>
//             <div className="text-center md:text-left md:w-1/2 md:pl-12">
//                 <p className="text-md mb-8 md:mb-4">Unlock endless possibilities and embark on a journey of growth with us. Join our vibrant team where innovation thrives and collaboration flourishes.</p>
//                 <Link href="/positions"> {/* Adjust link destination */}
//                     <div className="flex items-center text-blue-500 transition-transform duration-300 hover:translate-x-2">
//                         Open Positions

//                     </div>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Jointeam;


import React from 'react';

const Jointeam = () => {
    return (
        <div className="flex flex-wrap justify-center items-center py-24">
            {/* First Column */}
            <div className="w-full sm:w-1/2 px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Interesting Collaboration With Us?</h2>
                    <p className="text-lg mb-6">Help you to reach your business goal</p>
                    <button className="bg-black text-white rounded-full py-2 px-6 hover:bg-gray-800 transition duration-300">Reach Us</button>
                </div>
            </div>

            {/* Second Column */}
            <div className="w-full sm:w-1/2 px-4 pt-16">
                <div className="text-center">
                    <img src="/image/collab.png" alt="Collaboration" className="rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Jointeam;
