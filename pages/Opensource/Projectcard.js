import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import '../../styles/Opensource.module.css';
import { useEffect, useState } from 'react';
import projectsData from './projects.json'; // Assuming the JSON file is in the same directory
import Opensource from './Opensource';
import { useInView } from 'react-intersection-observer';

const ProjectCard = () => {

    return (
        <div className="bg-black">
            <h1 className="text-white text-3xl text-center font-bold py-16 pt-32">Some Cool Projects</h1>
            <div className="flex flex-wrap justify-center">
                {projectsData.map((project, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-2 my-4" >
                        <div className="max-w-md mx-auto bg-black rounded-lg overflow-hidden border border-white border-opacity-10 shadow-lg flex hover:border-indigo-400">
                            <div className="w-2/3 p-6">
                                <h2 className="text-white text-xl font-bold mb-2">{project.name}</h2>
                                <p className="text-white text-sm text-base mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-around">
                                    <button className="bg-transparent border text-sm border-white border-opacity-50 text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full">
                                        Github
                                    </button>
                                    <button className="bg-transparent border text-sm border-white border-opacity-50 text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-full">
                                        View
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/3 flex justify-center py-3">
                                {/* Use the Image component with the imported image */}
                                <div className="rounded-full overflow-hidden w-12 h-12">
                                    <Image
                                        src={project.image}
                                        alt="Project Image"
                                        width={100}
                                        height={100}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;

