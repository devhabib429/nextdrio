import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/Ourservices.module.css';

const ServiceCard = ({ imageUrl, title, description }) => (
    <div className="flex-shrink-0 mx-2">
        <div className="relative rounded-md overflow-hidden shadow-lg" style={{ width: '100%' }}>
            {/* Use the Image component with the imported image */}
            <div className="object-cover w-full h-48 md:h-48 lg:h-48 xl:h-48 relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill" // Use layout="fill" for absolute positioning within the parent container
                    objectFit="cover" // Specify objectFit prop for image sizing
                />
            </div>
            <div className="absolute inset-0 flex items-end">
                <div className="w-full backdrop-filter backdrop-blur-lg bg-opacity-30 py-4 px-6 text-white">
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-sm overflow-hidden max-h-16">{description}</p>
                </div>
            </div>
        </div>
    </div>
);

const OurServices = () => {
    const services = [
        {
            imageUrl: '/image/1.jpg',
            title: 'UI/UX Design',
            description: 'Description of service 1.',
        },
        {
            imageUrl: '/image/2.webp',
            title: 'IOS Development',
            description: 'Description of service 2.',
        },
        {
            imageUrl: '/image/4.webp',
            title: 'DevOps',
            description: 'Description of service 3.',
        },
        {
            imageUrl: '/image/4.webp',
            title: 'DevOps',
            description: 'Description of service 4.',
        },
        {
            imageUrl: '/image/4.webp',
            title: 'DevOps',
            description: 'Description of service 5.',
        },
        {
            imageUrl: '/image/4.webp',
            title: 'DevOps',
            description: 'Description of service 6.',
        },
        // Add more services as needed
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="p-8 bg-gray-200" style={{ paddingTop: '50px', paddingBottom: '150px' }}>
            <div className="max-w-screen-sm mx-auto px-2 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold mb-8 text-left">Our Services</h2>
                <p className="text-base font-poppins md:text-sm lg:text-md xl:text-lg mb-12 text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac justo nec tortor luctus ultricies.
                </p>
                <div className="max-h-80">
                    <Slider {...settings}>
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>


    );
};

export default OurServices;
