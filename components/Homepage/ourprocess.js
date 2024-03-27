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
            <div className="bg-white-200 h-screen flex flex-col items-center pt-4">
                <h2 className='text-2xl font-bold'>Distinctive Approach</h2>
                <div className='text-center overflow-hidden max-w-[350px]'>
                    <p className="mt-8">We are picking up businesses, understanding their end-to-end process and helping them in transformation - with the help of ready-to-use software (Open source/Licensed).</p>
                </div>
                <div className=' mt-10'>
                    {/* Use the Image component with the imported image */}
                    <Image src={imageUrl} alt={altText} width={600} height={600} />
                </div>
            </div>
        </>
    );
}

export default OurProcess;
