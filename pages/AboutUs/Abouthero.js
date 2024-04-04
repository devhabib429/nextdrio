// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from '../../styles/Opensource.module.css'; // Import CSS module for local styles

// const Abouthero = () => {
//     return (
//         <>
//             <section className="relative p-4 sm:p-8 md:p-16 lg:p-20 xl:p-40 bg-gradient-to-r bg-gray-100 mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-32">
//                 <div className="w-full md:w-1/2">
//                     <div className="md:pt-16">
//                         <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-8 text-black">
//                             Make your dream
//                             business goal come true
//                         </h2>
//                         <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-black font-poppins mb-8">
//                             when you need us for improve your business, then come with us to help your business have reach it,
//                             <br />
//                             you just sit and feel that goal
//                         </p>
//                         <Link href="https://discord.com" passHref>
//                             <div className="bg-transparent border border-black text-black py-2 px-4 rounded-full inline-block hover:bg-white hover:text-black transition duration-300">
//                                 Start Project
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="w-full md:w-1/2">
//                     <div className="pt-8 md:pt-0">
//                         <Image
//                             src="/image/abouthero.svg"
//                             alt="Image Description"
//                             width={500}
//                             height={500}
//                         />
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Abouthero;


import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Opensource.module.css'; // Import CSS module for local styles

const Abouthero = () => {
    return (
        <>
            <section className="p-4 sm:p-8 md:p-16 lg:p-20 xl:p-40 bg-gradient-to-r bg-gray-100 mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-32">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="max-w-lg text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-8 pt-28 md:pt-20 text-black">
                            Make your dream business goal come true
                        </h2>
                        <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-black font-poppins mb-8">
                            When you need us to improve your business, come to us for help in reaching your goals.
                            <br />
                            You just sit back and watch your dreams come true.
                        </p>
                        <Link href="https://discord.com" passHref>
                            <div className="bg-transparent border border-black text-black py-2 px-4 rounded-full inline-block hover:bg-white hover:text-black transition duration-300">
                                Start Project
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="pt-8 md:pt-0">
                        <Image
                            src="/image/abouthero.svg"
                            alt="Image Description"
                            width={800}
                            height={800}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Abouthero;
