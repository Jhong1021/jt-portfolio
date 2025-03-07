import Me from "../assets/images/newme.png";
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
                className="container mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8"
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
                            <img className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full" src={Me} alt="Joene Tuban" />
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className="lg:max-w-xl lg:pr-5 text-center lg:text-left order-2 lg:order-1"
                        variants={itemVariants}
                    >
                        <p style={{ fontFamily: "'Zen Dots', cursive" }} className="text-md text-white font-extrabold mb-4">HI FELLAS, I'M</p>
                        <h2 style={{ fontFamily: "'Zen Dots', cursive" }} className="mb-6 max-w-lg text-5xl font-extrabold leading-snug tracking-tight text-orange-400">
                            JOENE TUBAN <br />
                            <span className="inline-block font-extrabold text-xl text-white">
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
                        <p style={{ fontFamily: "'Zen Dots', cursive" }} className="text-base text-white">
                            I craft the bridge between user and technology, turning ideas into seamless, engaging experiences.
                        </p>

                        <div className="mt-10 flex flex-col items-center md:flex-row">
                            <motion.a
                                href="/"
                                onClick={(event) => handleDownload(event)}
                                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-orange-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-orange-500"
                                variants={itemVariants}
                                style={{ fontFamily: "'Zen Dots', cursive" }}
                            >
                                Download CV
                            </motion.a>
                            <a
                                href="#aboutme"
                                aria-label=""
                                className="underline-offset-2 inline-flex items-center font-semibold text-orange-400 underline transition-colors duration-200 hover:underline"
                                style={{ fontFamily: "'Zen Dots', cursive" }}
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
