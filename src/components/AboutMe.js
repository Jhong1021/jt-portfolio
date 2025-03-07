import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaReact,
    FaUniversity,
    FaChurch,
    FaBirthdayCake,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section id="aboutme" className="bg-gray-900 p-10 min-h-screen flex items-center justify-center">
            <motion.div
                className="w-full max-w-6xl h-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
            >
                {/* Section with Image */}
                <motion.div
                    className="text-white flex items-center justify-center h-96 rounded-lg overflow-hidden"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="images/aboutme.jpg" alt="About Me" className="w-full h-full object-cover rounded-lg" />
                </motion.div>

                {/* Section 2: Skills */}
                <motion.div
                    className="flex flex-col items-start justify-start min-h-96 rounded-lg p-6"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontFamily: "'Zen Dots', cursive" }} className="text-3xl tracking-tight font-extrabold mb-4">
                        <span className="text-gray-400">ABOUT</span> <span className="text-orange-400">ME</span>
                    </h2>

                    <p className="text-start text-lg text-gray-400 mt-10">
                        Hi, I'm Joene Tuban, a front-end developer passionate about creating beautiful, user-friendly websites. I specialize in React, JavaScript, HTML5, CSS3, Bootstrap and TailwindCSS to bring web projects to life.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col items-start justify-start h-96 rounded-lg p-6"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontFamily: "'Zen Dots', cursive" }} className="text-3xl tracking-tight font-extrabold mb-4">
                        <span className="text-gray-400">PERSONAL</span> <span className="text-orange-400">INFOS</span>
                    </h2>
                    <div className="text-left mb-4 text-gray-400">
                        <p><FaUniversity className="inline mr-2 text-orange-400 text-xl" /><strong>College:</strong> New Era University</p>
                        <p><FaChurch className="inline mr-2 text-orange-400 text-xl" /><strong>Religion:</strong> Iglesia Ni Cristo</p>
                        <p><FaBirthdayCake className="inline mr-2 text-orange-400 text-xl" /><strong>Age:</strong> 25</p>
                        <p><FaPhoneAlt className="inline mr-2 text-orange-400 text-xl" /><strong>Cellphone No:</strong> 0961 272 4880</p>
                        <p><FaEnvelope className="inline mr-2 text-orange-400 text-xl" /><strong>Email:</strong> joenetuban@gmail.com</p>
                        <p><FaMapMarkerAlt className="inline mr-2 text-orange-400 text-xl" /><strong>Location:</strong> Barangay Culiat, Quezon City, Metro Manila.</p>
                    </div>


                    <div className="flex space-x-4 mt-4 items-center justify-center">
                        {[{ icon: FaFacebook, link: 'https://facebook.com', color: 'text-orange-400' },
                        { icon: FaInstagram, link: 'https://instagram.com', color: 'text-orange-400' },
                        { icon: FaLinkedin, link: 'https://linkedin.com', color: 'text-orange-400' },
                        { icon: FaGithub, link: 'https://github.com', color: 'text-orange-400' }].map(({ icon: Icon, link, color }, index) => (
                            <motion.a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className={`text-3xl ${color} hover:text-orange-500`}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>

                </motion.div>

                {/* Section with Second Image */}
                <motion.div
                    className="text-white flex items-center justify-center h-96 rounded-lg overflow-hidden"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="images/ako.png" alt="About Me" className="w-full h-full object-cover rounded-lg" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
