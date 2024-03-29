import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import Head from 'next/head';

const OurProcess = () => {
    const imageUrl = "/image/process.svg";
    const altText = "Image Alt Text";

    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <div className="bg-gray-200 flex flex-col items-center py-8 md:py-16 lg:py-24">
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6'>Distinctive Approach</h2>
                <div className='text-center max-w-lg md:max-w-xl lg:max-w-2xl'>
                    <p className="mt-4 md:mt-6">We are picking up businesses, understanding their end-to-end process and helping them in transformation - with the help of ready-to-use software (Open source/Licensed).</p>
                </div>
                <div className='mt-8 md:mt-12'>
                    {/* Use the Image component with the imported image */}
                    <Image src={imageUrl} alt={altText} width={600} height={600} />
                </div>
            </div>
        </>
    );
}

export default OurProcess;
