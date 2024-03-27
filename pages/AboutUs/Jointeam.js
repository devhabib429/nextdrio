import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Jointeam = () => {
    return (
        <div className="container mx-auto py-8 px-2 md:py-64 md:px-4 flex flex-col md:flex-row items-center justify-around">
            <div className="text-center md:text-right md:pr-12 mb-4 md:mb-0">
                <h2 className="text-3xl font-bold">Join Our Team</h2>
            </div>
            <div className="pl-32 text-center md:text-left md:w-1/2"> {/* Adjusting width */}
                <p className="text-md mb-4">Unlock endless possibilities and embark on a journey of growth with us. Join our vibrant team where innovation thrives and collaboration flourishes. </p>

                <div className="flex items-center text-blue-500 transition-transform duration-300 hover:translate-x-2">
                    Open Positions
                </div>
            </div>
        </div>
    );
};

export default Jointeam;
