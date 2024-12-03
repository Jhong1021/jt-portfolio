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
        <motion.div
            className="p-10 min-h-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
        >
            <div id='about' className="w-full max-w-6xl h-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
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
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-start text-lg">
                        "Hi, I'm Joene Tuban, a front-end developer passionate about creating beautiful, user-friendly websites. I specialize in React, JavaScript, HTML5, CSS3, and TailwindCSS to bring web projects to life."
                    </p>
                    <h2 className="text-3xl font-bold mt-2">Skills</h2>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Skill Icons */}
                        {[{ icon: FaHtml5, color: 'text-orange-500', delay: 0.1 },
                        { icon: FaCss3Alt, color: 'text-blue-500', delay: 0.2 },
                        { icon: FaJs, color: 'text-yellow-500', delay: 0.3 },
                        { icon: SiTailwindcss, color: 'text-teal-400', delay: 0.4 },
                        { icon: FaBootstrap, color: 'text-purple-600', delay: 0.5 },
                        { icon: FaReact, color: 'text-blue-400', delay: 0.6 },
                        { icon: FaGithub, color: 'text-gray-400', delay: 0.7 }].map(({ icon: Icon, color, delay }, index) => (
                            <motion.li
                                key={index}
                                className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ delay }}
                            >
                                <Icon className={`text-4xl mb-2 ${color}`} />
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className="flex flex-col items-start justify-start h-96 rounded-lg p-6"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Personal Details</h3>
                    <div className="text-left mb-4">
                        <p><FaUniversity className="inline mr-2 text-blue-500 text-xl" /><strong>College:</strong> New Era University</p>
                        <p><FaChurch className="inline mr-2 text-green-500 text-xl" /><strong>Religion:</strong> Iglesia Ni Cristo</p>
                        <p><FaBirthdayCake className="inline mr-2 text-yellow-500 text-xl" /><strong>Age:</strong> 25</p>
                        <p><FaPhoneAlt className="inline mr-2 text-purple-500 text-xl" /><strong>Cellphone No:</strong> 0961 272 4880</p>
                        <p><FaEnvelope className="inline mr-2 text-red-500 text-xl" /><strong>Email:</strong> joenetuban@gmail.com</p>
                        <p><FaMapMarkerAlt className="inline mr-2 text-teal-500 text-xl" /><strong>Location:</strong> Barangay Culiat, Quezon City, Metro Manila.</p>
                    </div>

                    <div className="flex space-x-4 mt-4 items-center justify-center">
                        {[{ icon: FaFacebook, link: 'https://facebook.com', color: 'text-blue-600' },
                        { icon: FaInstagram, link: 'https://instagram.com', color: 'text-pink-600' },
                        { icon: FaLinkedin, link: 'https://linkedin.com', color: 'text-blue-700' },
                        { icon: FaGithub, link: 'https://github.com', color: 'text-gray-800' }].map(({ icon: Icon, link, color }, index) => (
                            <motion.a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                className={`text-3xl hover:${color}`}
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
            </div>
        </motion.div>
    );
};

export default AboutMe;
