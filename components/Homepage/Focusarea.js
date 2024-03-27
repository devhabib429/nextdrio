import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import Head from 'next/head';

const FocusArea = () => {
    const imageUrl = "/image/focusarea.png";
    const altText = "Image Alt Text";
    const description = "Our structured approach, utilizing top-notch products and integrating them with your existing setup, guarantees the success of your digital transformation journey.";

    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <div className="bg-black h-screen flex flex-col items-center py-[30px] gap-y-[20px]">
                <h1 className='text-white text-2xl font-bold '>Seamless Digital <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text inline-block">
                    Transformation
                </span> Solutions</h1>
                <div className='text-center overflow-hidden max-w-[400px]'>
                    <p className="text-white text-sm font-poppins">Our structured approach, utilizing top-notch products and integrating them with your existing setup, guarantees the success of your digital transformation journey.</p>
                </div>
                {/* Use the Image component with the imported image */}
                <div className='py-14'>
                    <Image src={imageUrl} alt={altText} width={600} height={600} />
                </div>
            </div>
        </>
    );
}

export default FocusArea;
