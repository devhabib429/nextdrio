import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Opensource.module.css'; // Import CSS module for local styles

const CareerHero = () => {
    return (
        <>
            <section className="relative p-4 sm:p-8 md:p-16 lg:p-20 xl:p-40 bg-gradient-to-r from-purple-600 to-blue-400 mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-32">
                <div className="w-full md:w-1/2">
                    <div className="md:pt-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-8 text-white">
                            Join Our Team
                        </h2>
                        <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-white font-poppins mb-8">
                            Explore exciting career opportunities at NextDrio. We're constantly looking for talented individuals who are passionate about technology and innovation to join our team.
                        </p>
                        <Link href="https://example.com/careers" passHref>
                            <div className="bg-transparent border border-white text-white py-2 px-4 rounded-full inline-block hover:bg-white hover:text-black transition duration-300">
                                View Open Positions
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="pt-8 md:pt-0">
                        <Image
                            src="/image/careerhero.svg"
                            alt="Career Hero Image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareerHero;
