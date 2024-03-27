import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from 'next/link'
import '../../styles/Opensource.module.css';

const Abouthero = () => {

    return (
        <>
            <section className="relative p-4 h-screen sm:p-8 md:p-16 lg:p-20 xl:p-40 bg-gradient-to-r from-purple-600 to-blue-400 mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-64">
                <div className="w-full md:w-1/2 pt-48">
                    <h2 className="text-2xl text-white md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-12">
                        We are NextDrion.
                    </h2>
                    <p className="text-base text-white font-poppins md:text-lg lg:text-lg xl:text-xl mb-12">
                        NextDrio is a dynamic platform where creativity thrives, ideas flourish, and connections abound.
                        <br />
                        Join us in shaping the future, where innovation knows no bounds and possibilities are limitless.
                    </p>
                    {/* Use Link component instead of <a> tag */}
                    <Link href="https://discord.com" passHref>
                        <div className="bg-transparent border border-white text-white py-2 px-4 rounded-full inline-block hover:bg-white hover:text-black transition duration-300">
                            Get In Touch
                        </div>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 pt-16">
                    <Image
                        src="/image/communityhero.svg"
                        alt="Image Description"
                        width={500}
                        height={500}
                    />
                </div>
            </section>
        </>
    );
};

export default Abouthero;
