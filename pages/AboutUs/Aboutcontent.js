import React from "react";

const AboutContent = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center pb-10">
                    <h2 className="text-3xl pb-10 leading-8 font-bold text-gray-900 sm:text-4xl">
                        Empowering Tomorrow&apos;s Innovations
                    </h2>
                    <p className="mt-2 text-xl text-gray-600">
                        We are a team of passionate developers and innovators dedicated to pushing the boundaries of technology.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="flex flex-wrap -mx-4 justify-center">
                        <div className="lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="px-6 py-8">
                                    <h3 className="text-lg leading-6 font-semibold text-gray-900">Our Mission</h3>
                                    <p className="mt-4 text-base text-gray-600">
                                        To create innovative solutions that empower businesses and individuals to thrive in a digital world.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="px-6 py-8">
                                    <h3 className="text-lg leading-6 font-semibold text-gray-900">Our Vision</h3>
                                    <p className="mt-4 text-base text-gray-600">
                                        To be at the forefront of technological advancement, shaping the future through creativity and ingenuity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 px-4 mb-8">
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <div className="px-6 py-8">
                                    <h3 className="text-lg leading-6 font-semibold text-gray-900">Our Values</h3>
                                    <p className="mt-4 text-base text-gray-600">
                                        Innovation, Collaboration, Integrity, Excellence, and Customer Satisfaction are at the core of everything we do.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;