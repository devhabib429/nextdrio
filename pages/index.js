// pages/index.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/RepeatComponents/Navbar';
import Hero from '../components/Homepage/Hero';
import WhatWeDo from '../components/Homepage/Whatwedo';
import OurServices from '../components/Homepage/ourservices';
import Focusarea from '../components/Homepage/Focusarea';
import Ourprocess from '../components/Homepage/ourprocess';
import OurContact from '../components/Homepage/Ourcontact';
import Footer from '../components/RepeatComponents/Footer';



// import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <Navbar />
            <Hero />
            <WhatWeDo />
            <OurServices />
            <Focusarea />
            <Ourprocess />
            <OurContact />
            <Footer />


        </>
    );
};

export default Home;


