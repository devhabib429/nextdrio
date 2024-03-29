import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/RepeatComponents/Navbar';
import Footer from '../../components/RepeatComponents/Footer';
import HiringSection from './Hiring';
import CareerHero from './Careerhero';
import Notify from './Notify';


const Services = () => {
    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <Navbar />
            <CareerHero />
            <HiringSection />
            <Notify />
            <Footer />
        </>
    );
};

export default Services;