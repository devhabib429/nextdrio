import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Servicehero = () => {
    return (
        <>
            <section className="relative p-4 sm:p-8 md:p-16 lg:p-20 xl:p-40 bg-gradient-to-r from-blue-500 to-purple-700 mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-32">
                <div className="w-full md:w-1/2 pt-16 md:pt-0">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-8">
                            Innovate. Elevate. Excel.
                        </h2>
                        <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-white font-poppins mb-8">
                            Unlock Your Potential with Our Cutting-Edge Solutions. Seamlessly Integrated Services to Propel Your Success Forward.
                            <br />
                            Experience Excellence, Every Step of the Way.
                        </p>
                        <Link href="https://discord.com" passHref>
                            <div className="bg-transparent border border-white text-white py-2 px-4 rounded-full inline-block hover:bg-white hover:text-black transition duration-300">
                                Get Started
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="pt-8 md:pt-0">
                        <Image
                            src="/image/servicehhero.png"
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

export default Servicehero;
