// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import clientsData from './clients.json'; // Path to your JSON file

// const ClientCarousel = () => {
//     // State for current client index
//     const [currentClientIndex, setCurrentClientIndex] = useState(0);
//     // State for animation class
//     const [animationClass, setAnimationClass] = useState('');

//     // Function to change the current client index
//     const changeClient = () => {
//         setAnimationClass('fade-out');
//         setTimeout(() => {
//             setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clientsData.length);
//             setAnimationClass('fade-in');
//         }, 500);
//     };

//     // Automatically change client every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(changeClient, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="flex flex-col items-center justify-center py-8 md:py-16">
//             <h2 className="text-2xl font-bold mb-16 text-gray-800">Trusted by Our Clients</h2>
//             <div className={`relative rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 mb-4 ${animationClass}`}>
//                 <Image
//                     src={clientsData[currentClientIndex].imageUrl}
//                     alt="Client"
//                     layout="fill"
//                     objectFit="cover"
//                 />
//             </div>
//             <div className={`text-center mb-2 whitespace-normal ${animationClass}`}>
//                 <p className="text-lg text-gray-800">{clientsData[currentClientIndex].name}</p>
//                 <div className="container mx-auto">
//                     <p className="text-base py-2 text-gray-600">{clientsData[currentClientIndex].companyName}</p>
//                     <p className="text-lg text-gray-700">{clientsData[currentClientIndex].description}</p>
//                 </div>
//             </div>
//             <div className="flex mt-2 md:mt-4">
//                 {clientsData.map((client, index) => (
//                     <div
//                         key={client.id}
//                         className={`w-2 h-2 rounded-full mx-1 md:mx-2 ${currentClientIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
//                         style={{
//                             transition: 'background-color 0.3s ease',
//                         }}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ClientCarousel;

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import clientsData from './clients.json'; // Path to your JSON file

// const ClientCarousel = () => {
//     // State for current client index
//     const [currentClientIndex, setCurrentClientIndex] = useState(0);
//     // State for animation class
//     const [animationClass, setAnimationClass] = useState('');

//     // Function to change the current client index
//     const changeClient = () => {
//         setAnimationClass('fade-out');
//         setTimeout(() => {
//             setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clientsData.length);
//             setAnimationClass('fade-in');
//         }, 500);
//     };

//     // Automatically change client every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(changeClient, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="flex flex-col md:flex-row items-center justify-center py-8 md:py-16">
//             <div className="md:w-1/2 bg-blue-400">
//                 <h2 className="text-2xl font-bold mb-16 text-gray-800">Trusted by Our Clients</h2>
//                 <div className={`relative rounded-full overflow-hidden w-24 h-24 md:w-32 md:h-32 mb-4 ${animationClass}`}>
//                     <Image
//                         src={clientsData[currentClientIndex].imageUrl}
//                         alt="Client"
//                         layout="fill"
//                         objectFit="cover"
//                     />
//                 </div>
//                 <div className={`text-center mb-2 whitespace-normal ${animationClass}`}>
//                     <p className="text-lg text-gray-800">{clientsData[currentClientIndex].name}</p>
//                     <div className="container mx-auto">
//                         <p className="text-base py-2 text-gray-600">{clientsData[currentClientIndex].companyName}</p>
//                         <p className="text-lg text-gray-700">{clientsData[currentClientIndex].description}</p>
//                     </div>
//                 </div>
//                 <div className="flex mt-2 md:mt-4">
//                     {clientsData.map((client, index) => (
//                         <div
//                             key={client.id}
//                             className={`w-2 h-2 rounded-full mx-1 md:mx-2 ${currentClientIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
//                             style={{
//                                 transition: 'background-color 0.3s ease',
//                             }}
//                         ></div>
//                     ))}
//                 </div>
//             </div>
//             <div className="md:w-1/2 bg-red-400 pl-48">
//                 {/* Add your image here */}
//                 <img
//                     src="/image/service2.png"
//                     alt="Image"
//                     className="w-[400px] h-auto"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ClientCarousel;

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import clientsData from './clients.json'; // Path to your JSON file

// const ClientCarousel = () => {
//     const [currentClientIndex, setCurrentClientIndex] = useState(0);
//     const [animationClass, setAnimationClass] = useState('');

//     const changeClient = () => {
//         setAnimationClass('fade-out');
//         setTimeout(() => {
//             setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clientsData.length);
//             setAnimationClass('fade-in');
//         }, 500);
//     };

//     useEffect(() => {
//         const interval = setInterval(changeClient, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="flex flex-col md:flex-row items-center justify-center py-8 md:py-16">
//             <div className="md:w-1/2 pl-24">
//                 <h2 className="text-2xl font-bold mb-16 text-gray-800">What Our Core Client Say ?</h2>
//                 <div className="carousel-container relative w-full h-auto md:w-96 md:h-96 mb-4 overflow-hidden pl-48 shadow-lg rounded-xl pt-[450px]">
//                     {clientsData.map((client, index) => (
//                         <div key={index} className={`carousel-item absolute top-0 left-0 w-full h-full transition-opacity duration-500 p- ${currentClientIndex === index ? 'opacity-100' : 'opacity-0'}`}>
//                             <div className="relative rounded-full overflow-hidden w-24 h-24 mx-auto mb-4">
//                                 <Image
//                                     src={client.imageUrl}
//                                     alt={`Client ${index}`}
//                                     layout="fill"
//                                     objectFit="cover"
//                                     className="rounded-full"
//                                 />
//                             </div>
//                             <div className="text-center mb-2 whitespace-normal">
//                                 <p className="text-lg text-gray-800">{client.description}</p>
//                                 <div className="container mx-auto">
//                                     <p className="text-base py-2 text-gray-600">{client.name}</p>
//                                     <p className="text-lg text-gray-700">{client.companyName}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="flex mt-2 md:mt-4">
//                     {clientsData.map((_, index) => (
//                         <div
//                             key={index}
//                             className={`w-2 h-2 rounded-full mx-1 md:mx-2 ${currentClientIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
//                             style={{
//                                 transition: 'background-color 0.3s ease',
//                             }}
//                         ></div>
//                     ))}
//                 </div>
//             </div>
//             <div className="md:w-1/2 pl-48 pt-12 pr-24">
//                 <Image
//                     src="/image/service2.png"
//                     alt="Image"
//                     className="w-[400px] h-auto"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ClientCarousel;


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import clientsData from './clients.json'; // Path to your JSON file

const ClientCarousel = () => {
    const [currentClientIndex, setCurrentClientIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');

    const changeClient = () => {
        setAnimationClass('fade-out');
        setTimeout(() => {
            setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clientsData.length);
            setAnimationClass('fade-in');
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(changeClient, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center py-8 md:py-12">
            <div className="md:w-1/2 flex flex-col items-center md:items-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-8 md:mb-12 text-gray-800">What Our Core Clients Say?</h2>
                <div className="carousel-container relative w-full h-auto md:w-96 md:h-96 overflow-hidden pt-72">
                    {clientsData.map((client, index) => (
                        <div key={index} className={`carousel-item absolute top-10 left-0 w-full h-full transition-opacity duration-500 p-4 ${currentClientIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="mb-4 bg-gray-100 rounded-lg shadow-md p-4">
                                <p className="text-md text-gray-800 mb-2">{client.description}</p>
                                <div className="flex flex-row items-center gap-x-4">
                                    <div className="relative rounded-full overflow-hidden w-12 h-12">
                                        <Image
                                            src={client.imageUrl}
                                            alt={`Client ${index}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="container mx-auto">
                                        <p className="text-base py-2 text-gray-600">{client.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-center mt-8 md:mt-0 py-6 md:py-0">
                <Image
                    src="/image/service2.png"
                    alt="Image"
                    width={300}
                    height={300}
                    layout="fixed"
                    className="w-[300px] h-auto md:w-[400px] md:h-auto"
                />
            </div>
        </div>
    );
};

export default ClientCarousel;



