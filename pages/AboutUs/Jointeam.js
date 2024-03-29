import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Jointeam = () => {
    return (
        <div className="container mx-auto py-8 px-2 md:py-32 md:px-4 flex flex-col md:flex-row items-center justify-around">
            <div className="text-center md:text-right md:w-1/2 md:pr-12 mb-4 md:mb-0">
                <h2 className="text-3xl font-bold md:mr-8">Join Our Team</h2>
            </div>
            <div className="text-center md:text-left md:w-1/2 md:pl-12">
                <p className="text-md mb-8 md:mb-4">Unlock endless possibilities and embark on a journey of growth with us. Join our vibrant team where innovation thrives and collaboration flourishes.</p>
                <Link href="/positions"> {/* Adjust link destination */}
                    <div className="flex items-center text-blue-500 transition-transform duration-300 hover:translate-x-2">
                        Open Positions

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Jointeam;
