import Me from "../assets/images/L.png";
import Swal from 'sweetalert2';
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {

    const handleDownload = (event) => {
        event.preventDefault();

        Swal.fire({
            icon: 'success',
            title: 'Download Successful',
            text: 'Resume has been downloaded successfully!',
            timer: 2000,
            showConfirmButton: false,
        });

        const link = document.createElement('a');
        link.href = '/images/resume.pdf';
        link.download = 'Joene_Tuban_Resume.pdf';
        link.click();
    };

    const containerVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
            },
        },
    };

    return (
        <section id='home'>
            <motion.div
                className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8"
                whileInView={{ opacity: 1, y: 0 }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={Math.random()} // Ensures the animation resets on page revisit
                variants={containerVariants}
            >
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    {/* Image Section for Mobile (small screens) */}
                    <motion.div
                        className="relative w-full mb-8 lg:mb-0 lg:w-1/2 order-1 lg:order-2"
                        variants={itemVariants}
                    >
                        <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-orange-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute -left-10 -top-20 h-28 w-28 rounded-xl bg-black text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl bg-black text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <img className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full" src={Me} alt="Joene Tuban" />
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="lg:max-w-xl lg:pr-5 text-center lg:text-left order-2 lg:order-1"
                        variants={itemVariants}
                    >
                        <p className="text-md text-white font-extrabold mb-4">HI FELLAS, I'M</p>
                        <h2 className="mb-6 max-w-lg text-7xl font-extrabold leading-snug tracking-tight text-orange-400">
                            JOENE TUBAN <br />
                            <span className="inline-block font-extrabold text-3xl text-white">
                                PASSIONATE : <span className="text-orange-400"><Typewriter
                                    words={["FRONTEND DEVELOPER"]}
                                    loop={false}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></span>
                            </span>
                        </h2>
                        <p className="text-base text-white">
                            I craft the bridge between user and technology, turning ideas into seamless, engaging experiences.
                        </p>

                        <div className="mt-10 flex flex-col items-center md:flex-row">
                            <motion.a
                                href="/"
                                onClick={(event) => handleDownload(event)}
                                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-orange-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-orange-500"
                                variants={itemVariants}
                            >
                                Download CV
                            </motion.a>
                            <a
                                href="#about"
                                aria-label=""
                                className="underline-offset-2 inline-flex items-center font-semibold text-orange-400 underline transition-colors duration-200 hover:underline"
                            >
                                About Me
                            </a>
                        </div>

                        <div className="mt-12 flex flex-col space-y-3 divide-gray-300 text-sm text-gray-700 sm:flex-row sm:space-y-0 sm:divide-x sm:justify-start sm:text-left text-center">
                            <div className="flex max-w-xs px-4 justify-center items-center sm:justify-start">
                                {/* TikTok Icon */}
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/018/930/574/non_2x/tiktok-logo-tikok-icon-transparent-tikok-app-logo-free-png.png"
                                    alt="TikTok Icon"
                                    className="w-12 h-12 mr-2"
                                />
                                <p className="text-white">Follow me on TikTok</p>
                            </div>
                            <div className="flex max-w-xs px-4 justify-center items-center sm:justify-start">
                                {/* Instagram Icon */}
                                <img
                                    src="https://i.pinimg.com/474x/12/28/06/122806966a15c0e1d5232ce5c55b1fd5.jpg"
                                    alt="Instagram Icon"
                                    className="w-12 h-12 mr-2"
                                />
                                <p className="text-white">Follow me on Instagram</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
