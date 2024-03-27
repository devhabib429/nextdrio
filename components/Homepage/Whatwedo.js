import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Lottie from 'lottie-react';
import animationData from '../../public/whatwedo.json'; // Replace with the actual path

const WhatWeDo = () => {
    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <section className="p-4 sm:p-8 md:p-16 lg:p-20 xl:p-40 bg-gray-100 mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-64">
                {/* Column 1 - Text Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-12">
                        What We Do?
                    </h2>
                    <p className="text-base font-poppins md:text-lg lg:text-lg xl:text-xl mb-12">
                        We are picking up businesses, understanding their end-to-end process and helping them in transformation - with the help of ready-to-use software (Open source/Licensed).
                    </p>
                    <p className="text-base font-poppins md:text-lg lg:text-lg xl:text-xl mb-12">
                        In a way, it makes them ready for today&apos;s world. Our offerings include improved on-demand training, migrating data to cloud services, leveraging artificial intelligence, automation and more.
                    </p>
                    <Link href="/contact" pasHref>
                        <div className="bg-white-500 border border-black text-black py-2 px-4 rounded-full inline-block hover:bg-black hover:text-white transition duration-300">
                            Get in Touch
                        </div>
                    </Link>
                </div>

                {/* Column 2 - Lottie Animation */}
                <div className="w-full md:w-1/2">
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </section>
        </>
    );
};

export default WhatWeDo;
