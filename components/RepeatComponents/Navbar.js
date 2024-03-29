// // components/Navbar.js

// import Link from 'next/link';
// import { useState } from 'react';


// const checkmarkImage = '/image/checkmark.png'
// const customListStyle = {
//     listStyle: `url(${checkmarkImage})`,
//     marginLeft: '20px',
//     height: '10px',
//     width: '10px' // Adjust the margin as needed
// };


// const Navbar = () => {



//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isServicesOpen, setIsServicesOpen] = useState(false);
//     const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
//     const itemsPerRow = 3; // Adjust as needed
//     const itemWidth = 150; // Adjust as needed
//     const maxDropdownWidth = 400; // Adjust as needed

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//         setIsServicesOpen(false);
//         setIsIndustriesOpen(false);
//     };

//     const openServices = () => {
//         setIsServicesOpen(true);
//         setIsIndustriesOpen(false);
//     };

//     const closeServices = () => {
//         setIsServicesOpen(false);
//     };

//     const openIndustries = () => {
//         setIsIndustriesOpen(true);
//         setIsServicesOpen(false);
//     };

//     const closeIndustries = () => {
//         setIsIndustriesOpen(false);
//     };

//     const closeMobileMenu = () => {
//         setIsMobileMenuOpen(false);
//         setIsServicesOpen(false);
//         setIsIndustriesOpen(false);
//     };

//     return (
//         <nav className="bg-transparent p-4 absolute text-white text-lg inset-x-0 top-0 z-50">
//             <div className="container mx-auto flex items-center justify-between">
//                 {/* Logo */}
//                 <div className="text-white flex space-x-4">
//                     <div className="text-white text-xl font-serif tracking-widest text-extrabold cursor-pointer">NextDrio</div>
//                 </div>

//                 {/* Menu */}
//                 <div className="hidden md:flex space-x-8 font-open-sans">
//                     <Link href="/">
//                         <div className="hover:text-gray-300 text-sm cursor-pointer">Home</div>
//                     </Link>

//                     {/* Services Dropdown */}
//                     <div className="relative inline-block text-left" onMouseLeave={closeServices}>
//                         <button
//                             onMouseEnter={openServices}
//                             onClick={closeIndustries}
//                             className="flex items-center focus:outline-none"
//                         >
//                             <span className="mr-1 text-sm">Services</span>
//                             <svg
//                                 className={`w-4 h-4 ${isServicesOpen ? 'transform rotate-180' : ''}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                             </svg>
//                         </button>
//                         {isServicesOpen && (
//                             <div className="absolute z-50 left-0 mt-2 pt-4 pl-5 shadow-lg bg-white rounded-md p-4 pr-44" style={{ maxWidth: Math.min(itemsPerRow * itemWidth, maxDropdownWidth) }}>
//                                 <ol className="grid grid-cols-3 gap-x-28 gap-y-8" style={{ listStyle: `url(${checkmarkImage})`, backgroundSize: '1px 1px', paddingLeft: '50px' }}>
//                                     <li><Link href="/service/service1" passHref><span className="block text-black cursor-pointer">Service1</span></Link></li>
//                                     <li><Link href="/service/service2" passHref><span className="block text-black cursor-pointer">Service2</span></Link></li>
//                                     <li><Link href="/service/service3" passHref><span className="block text-black cursor-pointer">Service3</span></Link></li>
//                                     <li><Link href="/service/service4" passHref><span className="block text-black cursor-pointer">Service4</span></Link></li>
//                                     <li><Link href="/service/service5" passHref><span className="block text-black cursor-pointer">Service5</span></Link></li>
//                                     <li><Link href="/service/service6" passHref><span className="block text-black cursor-pointer">Service6</span></Link></li>
//                                     <li><Link href="/service/service7" passHref><span className="block text-black cursor-pointer">Service7</span></Link></li>
//                                     <li><Link href="/service/service8" passHref><span className="block text-black cursor-pointer">Service8</span></Link></li>
//                                     <li><Link href="/service/service9" passHref><span className="block text-black cursor-pointer">Service9</span></Link></li>
//                                 </ol>
//                             </div>
//                         )}
//                     </div>

//                     {/* Industries Dropdown */}
//                     <div className="relative inline-block text-left" onMouseLeave={closeIndustries}>
//                         <button
//                             onMouseEnter={openIndustries}
//                             onClick={closeServices}
//                             className="flex items-center focus:outline-none"
//                         >
//                             <span className="mr-1 text-sm ">Industries</span>
//                             <svg
//                                 className={`w-4 h-4 ${isIndustriesOpen ? 'transform rotate-180' : ''}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                             </svg>
//                         </button>
//                         {isIndustriesOpen && (
//                             <div className="absolute z-50 left-0 mt-2 pt-4 pl-5 shadow-lg bg-white rounded-md p-4 pr-44" style={{ maxWidth: Math.min(itemsPerRow * itemWidth, maxDropdownWidth) }}>
//                                 <ol className="grid grid-cols-3 gap-x-28 gap-y-8" style={{ listStyle: `url(${checkmarkImage})`, backgroundSize: '1px 1px', paddingLeft: '50px' }}>
//                                     <li><Link href="/service/service1" passHref><span className="block text-black cursor-pointer">Service1</span></Link></li>
//                                     <li><Link href="/service/service2" passHref><span className="block text-black cursor-pointer">Service2</span></Link></li>
//                                     <li><Link href="/service/service3" passHref><span className="block text-black cursor-pointer">Service3</span></Link></li>
//                                     <li><Link href="/service/service4" passHref><span className="block text-black cursor-pointer">Service4</span></Link></li>
//                                     <li><Link href="/service/service5" passHref><span className="block text-black cursor-pointer">Service5</span></Link></li>
//                                     <li><Link href="/service/service6" passHref><span className="block text-black cursor-pointer">Service6</span></Link></li>
//                                     <li><Link href="/service/service7" passHref><span className="block text-black cursor-pointer">Service7</span></Link></li>
//                                     <li><Link href="/service/service8" passHref><span className="block text-black cursor-pointer">Service8</span></Link></li>
//                                     <li><Link href="/service/service9" passHref><span className="block text-black cursor-pointer">Service9</span></Link></li>
//                                 </ol>
//                             </div>
//                         )}
//                     </div>

//                     <Link href="/Opensource/Opensource" passHref>
//                         <div className="hover:text-gray-300 cursor-pointer text-sm">Open Source</div>
//                     </Link>
//                 </div>

//                 {/* Get in Touch Button */}
//                 <Link href="/contact" passHref>
//                     <div className="hidden md:block border text-sm border-white text-white px-4 py-2 rounded-full hover:bg-gray-200 hover:border-gray-200 hover:text-black cursor-pointer">
//                         Get in Touch
//                     </div>
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden">
//                     <button onClick={toggleMobileMenu} className="text-white">
//                         <svg
//                             className="w-6 h-6"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-16 right-4 bg-white p-4 shadow-lg font-open-sans">
//                         <Link href="/" passHref>
//                             <div onClick={closeMobileMenu} className="block text-black py-2 cursor-pointer">
//                                 Home
//                             </div>
//                         </Link>

//                         {/* Mobile Services Dropdown */}
//                         <div className="relative inline-block text-left" onMouseLeave={closeServices}>
//                             <button
//                                 onClick={openServices}
//                                 onMouseEnter={openServices}
//                                 className="focus:outline-none flex items-center"
//                             >
//                                 <span className="mr-1 text-black">Services</span>
//                                 <svg
//                                     className={`w-4 h-4 ${isServicesOpen ? 'transform rotate-180' : ''}`}
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                                 </svg>
//                             </button>
//                             {isServicesOpen && (
//                                 <div className="absolute z-50 left-0 mt-2 bg-white border border-gray-300 rounded-md p-4" style={{ maxWidth: Math.min(itemsPerRow * itemWidth, maxDropdownWidth) }}>
//                                     <ol className="grid grid-cols-3 gap-x-8 gap-y-4">
//                                         <li><Link href="/service/service1" passHref><span className="block text-black cursor-pointer">Service 1</span></Link></li>
//                                         <li><Link href="/service/service2" passHref><span className="block text-black cursor-pointer">Service 2</span></Link></li>
//                                         <li><Link href="/service/service3" passHref><span className="block text-black cursor-pointer">Service 3</span></Link></li>
//                                         <li><Link href="/service/service4" passHref><span className="block text-black cursor-pointer">Service 4</span></Link></li>
//                                         <li><Link href="/service/service5" passHref><span className="block text-black cursor-pointer">Service 5</span></Link></li>
//                                         <li><Link href="/service/service6" passHref><span className="block text-black cursor-pointer">Service 6</span></Link></li>
//                                         <li><Link href="/service/service7" passHref><span className="block text-black cursor-pointer">Service 7</span></Link></li>
//                                         <li><Link href="/service/service8" passHref><span className="block text-black cursor-pointer">Service 8</span></Link></li>
//                                         <li><Link href="/service/service9" passHref><span className="block text-black cursor-pointer">Service 9</span></Link></li>
//                                     </ol>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Mobile Industries Dropdown */}
//                         <div className="relative inline-block text-left" onMouseLeave={closeIndustries}>
//                             <button
//                                 onClick={openIndustries}
//                                 onMouseEnter={openIndustries}
//                                 className="focus:outline-none flex items-center"
//                             >
//                                 <span className="mr-1 text-black">Industries</span>
//                                 <svg
//                                     className={`w-4 h-4 ${isIndustriesOpen ? 'transform rotate-180' : ''}`}
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                                 </svg>
//                             </button>
//                             {isIndustriesOpen && (
//                                 <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md p-4" style={{ maxWidth: Math.min(itemsPerRow * itemWidth, maxDropdownWidth) }}>
//                                     <ol className="grid grid-cols-3 gap-x-8 gap-y-4">
//                                         <li><Link href="/industry/industry1" passHref><span className="block text-black cursor-pointer">Industry 1</span></Link></li>
//                                         <li><Link href="/industry/industry2" passHref><span className="block text-black cursor-pointer">Industry 2</span></Link></li>
//                                         <li><Link href="/industry/industry3" passHref><span className="block text-black cursor-pointer">Industry 3</span></Link></li>
//                                         <li><Link href="/industry/industry4" passHref><span className="block text-black cursor-pointer">Industry 4</span></Link></li>
//                                         <li><Link href="/industry/industry5" passHref><span className="block text-black cursor-pointer">Industry 5</span></Link></li>
//                                         <li><Link href="/industry/industry6" passHref><span className="block text-black cursor-pointer">Industry 6</span></Link></li>
//                                     </ol>
//                                 </div>
//                             )}
//                         </div>

//                         <Link href="/contact" passHref>
//                             <div onClick={closeMobileMenu} className="block text-black py-2 cursor-pointer">
//                                 Contact Us
//                             </div>
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


// components/Navbar.js

// components/Navbar.js

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-transparent p-4 absolute text-white text-lg inset-x-0 top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white flex space-x-4">
                    <div className="text-white text-xl font-serif tracking-widest text-extrabold cursor-pointer">NextDrio</div>
                </div>

                {/* Menu */}
                <div className="hidden md:flex space-x-8 font-open-sans">
                    <Link href="/">
                        <div className="hover:text-gray-300 text-sm cursor-pointer">Home</div>
                    </Link>

                    <Link href="/Community/Community" passHref>
                        <div className="hover:text-gray-300 cursor-pointer text-sm">Community</div>
                    </Link>

                    <Link href="/Servicess/Services" passHref>
                        <div className="hover:text-gray-300 cursor-pointer text-sm">Services</div>
                    </Link>

                    <Link href="/Opensource/Opensource" passHref>
                        <div className="hover:text-gray-300 cursor-pointer text-sm">Open Source</div>
                    </Link>
                </div>

                {/* Get in Touch Button */}
                <Link href="/contact" passHref>
                    <div className="hidden md:block border text-sm border-white text-white px-4 py-2 rounded-full hover:bg-gray-200 hover:border-gray-200 hover:text-black cursor-pointer">
                        Get in Touch
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 right-4 bg-white p-4 shadow-lg font-open-sans">
                        <Link href="/" passHref>
                            <div onClick={closeMobileMenu} className="block text-black py-2 cursor-pointer">
                                Home
                            </div>
                        </Link>

                        <Link href="/Community/Community" passHref>
                            <div onClick={closeMobileMenu} className="block text-black py-2 cursor-pointer">
                                Community
                            </div>
                        </Link>

                        <Link href="/services" passHref>
                            <div onClick={closeMobileMenu} className="block text-black py-2 cursor-pointer">
                                Services
                            </div>
                        </Link>

                        <Link href="/contact" passHref>
                            <div onClick={closeMobileMenu} className="block text-black py-2 cursor-pointer">
                                Contact Us
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;



