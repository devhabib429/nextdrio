import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/RepeatComponents/Navbar';
import Footer from '../../components/RepeatComponents/Footer';
import Communityhero from './Communityhero';
import CommunityMembers from './Communitycounts';
import CommunityEvents from './Communityevents';
import CommunityBelong from './Communitybelong';
import CommunityTab from './Communitytabs';
import CommunityTestimonial from './Communitytestimonial';






const Community = () => {
    return (
        <>
            <Head>
                <title>NextDrio</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <Navbar bgColor="transparent" textColor="white" />
            <Communityhero />
            <CommunityMembers />
            <CommunityEvents />
            {/* <CommunityBelong /> */}
            <CommunityTab />
            <CommunityTestimonial />
            <Footer />
        </>
    );
};

export default Community;