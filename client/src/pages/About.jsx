import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow px-4 md:px-6">
        <div className="max-w-2xl mx-auto mt-10">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-6">
            Welcome to our platform! We are dedicated to providing a space for
            creative minds to share their thoughts and ideas.
          </p>
          <p className="mb-6">
            If you have any questions or suggestions, feel free to reach out to
            us at:
          </p>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2" />
            <a
              href="mailto:krishanu1137@gmail.com"
              className="text-blue-500 hover:underline"
            >
              krishanu1137@gmail.com
            </a>
          </div>
          <p className="mb-6">
            Connect with us on:
          </p>
          <div className="flex items-center mb-4">
            <FaGithub className="mr-2" />
            <a
              href="https://github.com/krishanu7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center mb-4">
            <FaLinkedin className="mr-2" />
            <a
              href="https://www.linkedin.com/in/krishanu-saha-163762209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <p className="mb-6">
            Thank you for being a part of our community!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
