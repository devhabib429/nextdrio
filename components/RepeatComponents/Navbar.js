// import Link from 'next/link';
// import { useState } from 'react';

// const Navbar = ({ bgColor, textColor }) => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     const closeMobileMenu = () => {
//         setIsMobileMenuOpen(false);
//     };

//     return (
//         <nav className={`bg-${bgColor} p-4 absolute text-${textColor} text-lg inset-x-0 top-0 z-50`}>
//             <div className="container mx-auto flex items-center justify-between">
//                 {/* Logo */}
//                 <div className={`text-${textColor} flex space-x-4`}>
//                     <div className={`text-${textColor} text-xl font-serif tracking-widest font-bold text-extrabold cursor-pointer`}>NextDrio</div>
//                 </div>

//                 {/* Menu */}
//                 <div className="hidden md:flex space-x-8 font-open-sans">
//                     <Link href="/">
//                         <div className={`hover:text-gray-300 text-sm cursor-pointer text-${textColor}`}>Home</div>
//                     </Link>

//                     <Link href="/Community/Community" passHref>
//                         <div className={`hover:text-gray-300 cursor-pointer text-sm text-${textColor}`}>Community</div>
//                     </Link>

//                     <Link href="/Servicess/Services" passHref>
//                         <div className={`hover:text-gray-300 cursor-pointer text-sm text-${textColor}`}>Services</div>
//                     </Link>

//                     <Link href="/Opensource/Opensource" passHref>
//                         <div className={`hover:text-gray-300 cursor-pointer text-sm text-${textColor}`}>Open Source</div>
//                     </Link>
//                     <Link href="/AboutUs/Aboutus" passHref>
//                         <div className={`hover:text-gray-300 cursor-pointer text-sm text-${textColor}`}>About Us</div>
//                     </Link>
//                 </div>

//                 {/* Get in Touch Button */}
//                 <Link href="/contact" passHref>
//                     <div className={`hidden md:block border text-sm border-${textColor} text-${textColor} px-4 py-2 rounded-full hover:bg-gray-200 hover:border-gray-200 hover:text-black cursor-pointer`}>
//                         Get in Touch
//                     </div>
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden">
//                     <button onClick={toggleMobileMenu} className={`text-${textColor}`}>
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
//                     <div className="md:hidden absolute top-16 right-4 bg-black p-4 shadow-lg font-open-sans">
//                         <Link href="/" passHref>
//                             <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
//                                 Home
//                             </div>
//                         </Link>

//                         <Link href="/Community/Community" passHref>
//                             <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
//                                 Community
//                             </div>
//                         </Link>

//                         <Link href="/Servicess/Services" passHref>
//                             <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
//                                 Services
//                             </div>
//                         </Link>

//                         <Link href="/Opensource/Opensource" passHref>
//                             <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
//                                 Open Source
//                             </div>
//                         </Link>

//                         <Link href="/AboutUs/Aboutus" passHref>
//                             <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
//                                 About Us
//                             </div>
//                         </Link>

//                         <Link href="/contact" passHref>
//                             <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
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


import Link from 'next/link';
import { useState } from 'react';

const Navbar = ({ bgColor, textColor }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`bg-${bgColor} p-4 absolute text-${textColor} text-lg inset-x-0 top-0 z-50`}>
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className={`text-${textColor} flex space-x-4`}>
                    <div className={`text-${textColor} text-xl font-serif tracking-widest font-bold text-extrabold cursor-pointer`}>NextDrio</div>
                </div>

                {/* Menu */}
                <div className="hidden md:flex space-x-8 font-open-sans">
                    <Link href="/">
                        <div className={`hover:text-gray-300 text-sm cursor-pointer text-${textColor}`}>Home</div>
                    </Link>

                    <Link href="/Community/Community" passHref>
                        <div className={`hover:text-gray-300 cursor-pointer text-sm text-${textColor}`}>Community</div>
                    </Link>

                    <Link href="/Servicess/Services" passHref>
                        <div className={`hover:text-gray-300 cursor-pointer text-sm text-${textColor}`}>Services</div>
                    </Link>

                    <Link href="/Opensource/Opensource" passHref>
                        <div className={`hover:text-gray-300 cursor-pointer text-sm text-${textColor}`}>Open Source</div>
                    </Link>
                    <Link href="/AboutUs/Aboutus" passHref>
                        <div className={`hover:text-gray-300 cursor-pointer text-sm text-${textColor}`}>About Us</div>
                    </Link>
                </div>

                {/* Get in Touch Button */}
                <Link href="/contact" passHref>
                    <div className={`hidden md:block border text-sm border-${textColor} text-${textColor} px-4 py-2 rounded-full hover:bg-gray-200 hover:border-gray-200 hover:text-black cursor-pointer`}>
                        Get in Touch
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className={`text-${textColor}`}>
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
                    <div className="fixed top-0 left-0 w-full h-full bg-transparent z-50 flex justify-center items-center">
                        <div className="bg-black opacity-75 absolute inset-0" onClick={closeMobileMenu}></div>
                        <div className="md:hidden absolute top-16 right-4 bg-black p-4 shadow-lg font-open-sans">
                            <Link href="/" passHref>
                                <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
                                    Home
                                </div>
                            </Link>

                            <Link href="/Community/Community" passHref>
                                <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
                                    Community
                                </div>
                            </Link>

                            <Link href="/Servicess/Services" passHref>
                                <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
                                    Services
                                </div>
                            </Link>

                            <Link href="/Opensource/Opensource" passHref>
                                <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
                                    Open Source
                                </div>
                            </Link>

                            <Link href="/AboutUs/Aboutus" passHref>
                                <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
                                    About Us
                                </div>
                            </Link>

                            <Link href="/contact" passHref>
                                <div onClick={closeMobileMenu} className={`block text-black py-2 cursor-pointer text-${textColor}`}>
                                    Contact Us
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
