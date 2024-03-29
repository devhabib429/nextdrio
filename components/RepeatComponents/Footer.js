import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full mb-8 sm:mb-0">
          <h2 className="text-2xl font-bold mb-4">NextDrio</h2>
        </div>
        <div className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto mb-8 sm:mb-0">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Community/Community">Community</Link>
            </li>
            <li>
              <Link href="/Servicess/Services">Services</Link>
            </li>
            <li>
              <Link href="/AboutUs/Aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto mb-8 sm:mb-0">
          <h3 className="text-lg font-bold mb-4">Technologies</h3>
          <ul>
            <li>
              <Link href="#">App & Web Development</Link>
            </li>
            <li>
              <Link href="#">DevOps</Link>
            </li>
            <li>
              <Link href="#">UIUX Design</Link>
            </li>
            <li>
              <Link href="#">CRM Development</Link>
            </li>
            <li>
              <Link href="#">AI Tools</Link>
            </li>
            <li>
              <Link href="#">Open Source</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto mb-8 sm:mb-0">
          <h3 className="text-lg font-bold mb-4">Hiring</h3>
          <ul>
            <li>
              <Link href="/Careers/Careers">Careers</Link>
            </li>
            <li>
              <Link href="#">Internships</Link>
            </li>
            <li>
              <Link href="#">Freelancers</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto mb-8 sm:mb-0">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex">
            <a href="#" className="mr-4">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="mr-4">
              <FaTwitter className="text-white" />
            </a>
            <a href="#" className="mr-4">
              <FaLinkedinIn className="text-white" />
            </a>
            <a href="#">
              <FaInstagram className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} NextDrio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
