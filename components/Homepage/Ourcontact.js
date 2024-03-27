// import React from 'react';

// const OurContact = () => {
//     const imageUrl = "/image/framework.png";
//     const altText = "Image Alt Text";

//     return (
//         <>
//             <div className="bg-black h-96 flex flex-row items-center justify-around">
//                 <div className='text-center font-bold text-white overflow-hidden max-w-[400px]'>
//                     <p className="text-4xl">Let's Plan, Develop and Grow Your Business With{' '}
//                         <span className="bg-gradient-to-r from-purple-500 to-blue-300 text-transparent bg-clip-text inline-block">
//                             NextDrio!
//                         </span>
//                     </p>
//                 </div>
//                 <h1 className='text-white text-4xl font-bold pl-20'> Key Focus Area</h1>
//             </div>
//         </>
//     );
// }

// export default OurContact;


// import React from 'react';

// const OurContact = () => {
//     return (
//         <div className="bg-black h-screen flex flex-row items-center justify-around">
//             <div className='text-center font-bold text-white overflow-hidden max-w-[400px]'>
//                 <p className="text-4xl">Let's Plan, Develop and Grow Your Business With{' '}
//                     <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text inline-block">
//                         NextDrio!
//                     </span>
//                 </p>
//             </div>
//             <div className="mt-8 border border-white rounded-2xl p-8 max-w-[400px]">
//                 <h2 className="text-white text-md font-bold mb-4">Book Your Free Consultant Today</h2>
//                 <form className="grid grid-cols-1 gap-4 pt-5">
//                     <div className="grid grid-cols-2 gap-4">
//                         <input type="text" placeholder="First Name" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none" />
//                         <input type="text" placeholder="Last Name" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none" />
//                     </div>
//                     <input type="email" placeholder="Email" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none" />
//                     <input type="tel" placeholder="Phone" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none" />
//                     <textarea placeholder="Message" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none"></textarea>
//                     <button type="submit" className="bg-transparent border border-white text-white py-2 px-4 rounded-md focus:outline-none">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default OurContact;


import React from 'react';

const OurContact = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-around">
            <div className='text-center font-bold text-white max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden md:mr-8'>
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">Let&apos;s Plan, Develop and Grow Your Business With{' '}
                    <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text inline-block">
                        NextDrio!
                    </span>
                </p>
            </div>
            <div className="mt-8 md:mt-0 border border-white rounded-2xl p-8 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <h2 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">Book Your Free Consultant Today</h2>
                <form className="grid grid-cols-1 gap-4 pt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none" />
                        <input type="text" placeholder="Last Name" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none" />
                    </div>
                    <input type="email" placeholder="Email" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none" />
                    <input type="tel" placeholder="Phone" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none" />
                    <textarea placeholder="Message" className="p-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none focus:border-purple-500 rounded-none"></textarea>
                    <button type="submit" className="bg-transparent border border-white text-white py-2 px-4 rounded-md focus:outline-none">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default OurContact;



