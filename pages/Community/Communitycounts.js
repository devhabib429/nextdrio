import React from 'react';

const CommunityCounts = () => {
    return (
        <div className="flex flex-col items-center space-y-8 p-8">
            <h2 className="text-3xl font-semibold mb-8 text-center">Where numbers speak, significance echoes.</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {/* Card 1 */}
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-3xl font-semibold mb-2">300+</h3>
                    <p className="text-gray-600">Community members</p>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center mt-8 sm:mt-0">
                    <h3 className="text-3xl font-semibold mb-2">20+</h3>
                    <p className="text-gray-600">Spaces Organized</p>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center mt-8 lg:mt-0">
                    <h3 className="text-3xl font-semibold mb-2">10+</h3>
                    <p className="text-gray-600">Meetups Happened</p>
                </div>
            </div>
        </div>
    );
};

export default CommunityCounts;
