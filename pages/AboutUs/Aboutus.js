import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/RepeatComponents/Navbar';
import Footer from '../../components/RepeatComponents/Footer';
import Abouthero from './Abouthero';
import AboutContent from './Aboutcontent';
import Webuildideas from './Webuildideas';
import Numbers from './Numbers';
import OurTeamGlimpse from './Teams';
import Jointeam from './Jointeam';
import OurContact from '../../components/Homepage/Ourcontact';
import WhatWeDo from './Whatdowedo';



const Community = () => {
    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <Navbar bgColor="transparent" textColor="black" />
            <Abouthero />
            <AboutContent />
            <Webuildideas />
            {/* <Numbers /> */}
            <OurTeamGlimpse />
            <WhatWeDo/>
            <Jointeam />
            <OurContact />
            <Footer />
        </>
    );
};

export default Community;