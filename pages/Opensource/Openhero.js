import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'; // Import the Image component from Next.js
import '../../styles/Opensource.module.css'

const Openhero = () => {
    const [typedText, setTypedText] = useState('');
    const targetText = 'Open Source.';

    useEffect(() => {
        const typingEffect = () => {
            for (let i = 0; i <= targetText.length; i++) {
                setTimeout(() => {
                    setTypedText(targetText.slice(0, i));
                }, 100 * i);
            }
        };

        typingEffect();

        // Cleanup
        return () => clearTimeout(typingEffect);
    }, []);

    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <section className="p-4 h-screen sm:p-8 md:p-16 lg:p-20 xl:p-40 bg-indigo-300 mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-64">
                {/* Column 1 */}
                <div className="w-full md:w-1/2 pt-48">
                    <h2 className="text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-12">
                        {typedText}
                    </h2>
                    <p className="text-base text-white font-poppins md:text-lg lg:text-lg xl:text-xl mb-12">
                        Open source is not just about code; it&apos;s about communities, collaboration, and the power of shared knowledge to change the world.
                    </p>

                </div>
                {/* Column 2 */}
                <div className="w-full md:w-1/2 pt-16">
                    {/* Use the Image component with the imported image */}
                    <Image
                        src="/image/opensource.svg" // Replace with the actual path to your image
                        alt="Image Description"
                        width={500}
                        height={500}
                    />
                </div>
            </section>
        </>
    );
};

export default Openhero;
