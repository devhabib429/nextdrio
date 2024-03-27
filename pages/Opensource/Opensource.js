// pages/index.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/RepeatComponents/Navbar';
import Hero from '../../components/Homepage/Hero';
import Footer from '../../components/RepeatComponents/Footer';
import ProjectCard from './Projectcard';
import Openhero from './Openhero';
import OpenSourceThought from './opensorcethink';

// import { useRouter } from 'next/router';

// import styles from '../styles/Home.module.css';

const Opensource = () => {
    // const router = useRouter();
    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <Navbar />
            <Openhero />
            <ProjectCard />
            <OpenSourceThought />
            <Footer />


        </>
    );
};

export default Opensource;

