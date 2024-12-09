import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section id='skill'>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                            Skills
                        </h2>
                    </motion.div>

                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {/* Skill Card 1 */}
                    <motion.div
                        className="transform transition-all duration-500 ease-out"
                        whileInView={{ scale: 1.05, opacity: 1 }}
                        initial={{ scale: 0.95, opacity: 0.5 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaHtml5 style={{ color: "#E34F26" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">HTML 5</h3>
                        <p className="text-gray-900">
                            The standard language used to create and structure content on the web. HTML defines the elements and layout of web pages.
                        </p>
                    </motion.div>

                    {/* Skill Card 2 */}
                    <motion.div
                        className="transform transition-all duration-500 ease-out"
                        whileInView={{ scale: 1.05, opacity: 1 }}
                        initial={{ scale: 0.95, opacity: 0.5 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaCss3Alt style={{ color: "#1572B6" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">CSS</h3>
                        <p className="text-gray-900">
                            A style sheet language used to control the appearance of HTML elements, including layout, colors, fonts, and responsiveness.
                        </p>
                    </motion.div>

                    {/* Skill Card 3 */}
                    <motion.div
                        className="transform transition-all duration-500 ease-out"
                        whileInView={{ scale: 1.05, opacity: 1 }}
                        initial={{ scale: 0.95, opacity: 0.5 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaJs style={{ color: "#F7DF1E" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">JavaScript</h3>
                        <p className="text-gray-900">
                            A programming language used to add interactivity and dynamic behavior to web pages, allowing for real-time updates, animations, and user input handling.
                        </p>
                    </motion.div>

                    {/* Skill Card 4 */}
                    <motion.div
                        className="transform transition-all duration-500 ease-out"
                        whileInView={{ scale: 1.05, opacity: 1 }}
                        initial={{ scale: 0.95, opacity: 0.5 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaBootstrap style={{ color: "#563D7C" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Bootstrap</h3>
                        <p className="text-gray-900">
                            A front-end framework that offers ready-to-use components and grid systems to build responsive, mobile-first websites and applications quickly.
                        </p>
                    </motion.div>

                    {/* Skill Card 5 */}
                    <motion.div
                        className="transform transition-all duration-500 ease-out"
                        whileInView={{ scale: 1.05, opacity: 1 }}
                        initial={{ scale: 0.95, opacity: 0.5 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaReact style={{ color: "#61DAFB" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">React</h3>
                        <p className="text-gray-900">
                            A JavaScript library for building user interfaces, especially single-page applications, by allowing the creation of reusable UI components.
                        </p>
                    </motion.div>

                    {/* Skill Card 6 */}
                    <motion.div
                        className="transform transition-all duration-500 ease-out"
                        whileInView={{ scale: 1.05, opacity: 1 }}
                        initial={{ scale: 0.95, opacity: 0.5 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <SiTailwindcss className="w-5 h-5 lg:w-6 lg:h-6 text-[#38BDF8]" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Tailwind CSS</h3>
                        <p className="text-gray-900">
                            A utility-first CSS framework that provides a set of predefined classes to quickly style elements without writing custom CSS.
                        </p>
                    </motion.div>

                    {/* Skill Card 7 */}
                    <motion.div
                        className="transform transition-all duration-500 ease-out"
                        whileInView={{ scale: 1.05, opacity: 1 }}
                        initial={{ scale: 0.95, opacity: 0.5 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaGithub style={{ color: "#333" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">GitHub</h3>
                        <p className="text-gray-900">
                            A platform for hosting and version-controlling software projects, using Git. It enables collaboration among developers and tracks changes to code over time.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
