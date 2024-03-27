import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from 'next/link'
import '../../styles/Opensource.module.css';

const Communityhero = () => {
    const [typedText, setTypedText] = useState('');
    const targetText = 'Unite, Innovate, Thrive Together.';

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
            <section className="p-4 h-screen sm:p-8 md:p-16 lg:p-20 xl:p-40 bg-black mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-64">
                <div className="w-full md:w-1/2 pt-48">
                    <h2 className="text-2xl text-white md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-12">
                        {typedText}
                    </h2>
                    <p className="text-base text-white font-poppins md:text-lg lg:text-lg xl:text-xl mb-12">
                        Welcome to our vibrant community where collaboration fuels innovation, ideas are freely shared, and together we grow stronger.
                    </p>
                    {/* Use Link component instead of <a> tag */}
                    <Link href="https://discord.com" passHref>
                        <div className="bg-transparent border border-white text-white py-2 px-4 rounded-full inline-block hover:bg-white hover:text-black transition duration-300">
                            Join Discord
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

export default Communityhero;
