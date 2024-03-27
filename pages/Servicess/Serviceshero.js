import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from 'next/link'
import '../../styles/Opensource.module.css';

const Servicehero = () => {

    return (
        <>
            <section className="relative p-4 h-screen sm:p-8 md:p-16 lg:p-20 xl:p-40 bg-gradient-to-r from-gray-500 to-gray-800 mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-64">
                <div className="w-full md:w-1/2 pt-48">
                    <h2 className="text-2xl text-white md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-12">
                    Innovate. Elevate. Excel.
                    </h2>
                    <p className="text-base text-white font-poppins md:text-lg lg:text-lg xl:text-xl mb-12">
                    Unlock Your Potential with Our Cutting-Edge Solutions. Seamlessly Integrated Services to Propel Your Success Forward.
                        <br />
                        Experience Excellence, Every Step of the Way.
                    </p>
                    {/* Use Link component instead of <a> tag */}
                    <Link href="https://discord.com" passHref>
                        <div className="bg-transparent border border-white text-white py-2 px-4 rounded-full inline-block hover:bg-white hover:text-black transition duration-300">
                            Get Started
                        </div>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 pt-16">
                    <Image
                        src="/image/serviceshero.svg"
                        alt="Image Description"
                        width={500}
                        height={500}
                    />
                </div>
            </section>
        </>
    );
};

export default Servicehero;
