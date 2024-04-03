import React from 'react';

const WhatWeDo = () => {
    const cardData = [
        {
            "image": "https://randomuser.me/api/portraits/men/11.jpg",
            "title": "David Bakhum",
            "description": "Working with David was an absolute pleasure! His dedication and expertise truly made a difference in our project&apos;s success."
        },
        {
            "image": "https://randomuser.me/api/portraits/men/12.jpg",
            "title": "Irish Tomet",
            "description": "Irish&apos;s attention to detail and creative solutions were invaluable to our team. Highly recommend! "
        },
        {
            "image": "https://randomuser.me/api/portraits/men/3.jpg",
            "title": "Yash Patidhar",
            "description": "Yash&apos;s professionalism and commitment exceeded our expectations. We couldn&apos;t have asked for a better partner."
        },
        {
            "image": "https://randomuser.me/api/portraits/men/11.jpg",
            "title": "David Bakhum",
            "description": "Working with David was an absolute pleasure! His dedication and expertise truly made a difference in our project&apos;s success."
        },
        {
            "image": "https://randomuser.me/api/portraits/men/12.jpg",
            "title": "Irish Tomet",
            "description": "Irish&apos;s attention to detail and creative solutions were invaluable to our team. Highly recommend! "
        },
        {
            "image": "https://randomuser.me/api/portraits/men/3.jpg",
            "title": "Yash Patidhar",
            "description": "Yash&apos;s professionalism and commitment exceeded our expectations. We couldn&apos;t have asked for a better partner."
        }
    ];

    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">People Talk about us</h2>
                <p className="text-lg text-center text-gray-700 mb-8">
                    Here&apos;s a brief description of what we do and how we can help you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cardData.map((card, index) => (
                        <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden flex">
                            <div className="flex-shrink-0">
                                <img
                                    src={card.image}
                                    alt={`Image ${index + 1}`}
                                    className="w-10 h-10 m-4 rounded-full transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-md bg-white-500 rounded-xl w-max shadow-md px-2 font-semibold mb-2">{card.title}</p>
                                <p className="text-gray-700 text-sm">{card.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
