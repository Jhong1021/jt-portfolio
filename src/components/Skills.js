import React from 'react';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaReact,
    FaGithub
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Skills = () => {
    return (
        <section id='skill' className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        Skills
                    </h2>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaHtml5 style={{ color: "#E34F26" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">HTML 5</h3>
                        <p className="text-gray-900">
                            The standard language used to create and structure content on the web. HTML defines the elements and layout of web pages.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaCss3Alt style={{ color: "#1572B6" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">CSS</h3>
                        <p className="text-gray-900">
                            A style sheet language used to control the appearance of HTML elements, including layout, colors, fonts, and responsiveness.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaJs style={{ color: "#F7DF1E" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">JavaScript</h3>
                        <p className="text-gray-900">
                            A programming language used to add interactivity and dynamic behavior to web pages, allowing for real-time updates, animations, and user input handling.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaBootstrap style={{ color: "#563D7C" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Bootstrap</h3>
                        <p className="text-gray-900">
                            A front-end framework that offers ready-to-use components and grid systems to build responsive, mobile-first websites and applications quickly.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaReact style={{ color: "#61DAFB" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">React</h3>
                        <p className="text-gray-900">
                            A JavaScript library for building user interfaces, especially single-page applications, by allowing the creation of reusable UI components.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <SiTailwindcss className="w-5 h-5 lg:w-6 lg:h-6 text-[#38BDF8]" /> {/* Custom Tailwind CSS color */}
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">Tailwind CSS</h3>
                        <p className="text-gray-900">
                            A utility-first CSS framework that provides a set of predefined classes to quickly style elements without writing custom CSS.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaGithub style={{ color: "#333" }} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900">GitHub</h3>
                        <p className="text-gray-900">
                            A platform for hosting and version-controlling software projects, using Git. It enables collaboration among developers and tracks changes to code over time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
