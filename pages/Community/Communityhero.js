import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
            <section className="h-screen p-4 md:p-8 lg:p-16 xl:p-20 bg-black flex flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2 md:p-0 md:pr-8 lg:pr-16 xl:pr-20">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold mb-4 md:mb-8">
                        {typedText}
                    </h2>
                    <p className="text-base md:text-lg lg:text-lg xl:text-xl text-white font-poppins mb-8 md:max-w-lg">
                        Welcome to our vibrant community where collaboration fuels innovation, ideas are freely shared, and together we grow stronger.
                    </p>
                    <Link href="https://discord.com" passHref>
                        <div className="bg-white text-black py-2 px-4 rounded-full inline-block hover:bg-black hover:text-white transition duration-300">
                            Join Discord
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center items-center md:w-1/2">
                    <div className="max-w-sm md:max-w-full">
                        <Image
                            src="/image/community.svg"
                            alt="Image Description"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Communityhero;
