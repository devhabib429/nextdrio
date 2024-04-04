import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/RepeatComponents/Navbar';
import Footer from '../../components/RepeatComponents/Footer';
import Servicehero from './Serviceshero';
import ServiceSection from './Servicessection';
import Apply from './Apply';
import ClientCarousel from './Clients';

const Services = () => {
    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <Navbar textColor="white" bgColor="transparent" />
            <Servicehero />
            <ServiceSection />
            <Apply />
            <ClientCarousel />
            <Footer />
        </>
    );
};

export default Services;