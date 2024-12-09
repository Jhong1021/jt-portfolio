import React from "react";
import { motion } from "framer-motion";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Start with opacity 0 and translate Y by 50px
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }, // Smooth fade-up
    },
};

const Services = () => {
    return (
        <section className="overflow-hidden min-h-screen flex items-center justify-center">
            <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 lg:py-12 space-y-12 flex flex-col justify-center">
                <motion.div
                    className="opacity-0"
                    initial={{ opacity: 0, y: -100 }} // Start above the view
                    whileInView={{ opacity: 1, y: 0 }} // Move to normal position
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
                        Here’s what I offer
                    </h2>
                </motion.div>

                <div className="flex flex-col sm:flex-row mx-auto gap-8">
                    {/* Card 1 */}
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeUpVariants}
                    >
                        <a href="#_" className="group">
                            <img
                                src="https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png"
                                className="rounded-xl rotate-6 group-hover:rotate-0 duration-500 group-hover:-translate-y-12 h-full w-full object-cover group-hover:scale-150 transform origin-bottom"
                                alt="Responsive Design"
                            />
                        </a>
                        <h3 className="mt-4 text-sm font-bold text-gray-800">
                            Responsive Design
                        </h3>
                        <p className="mt-2 text-xs text-gray-600">
                            Creating websites that look great and function flawlessly on all
                            devices, from mobile phones to desktops.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeUpVariants}
                    >
                        <a href="#_" className="group">
                            <img
                                src="https://media.licdn.com/dms/image/D4E12AQF-mlbR1jN0KQ/article-cover_image-shrink_720_1280/0/1702033454321?e=2147483647&v=beta&t=K0qbaWaVp3eBFyHrt5xztFmoQA-9tC-xPTtv9UW4Hsw"
                                className="rounded-xl -rotate-12 group-hover:rotate-0 duration-500 group-hover:-translate-y-12 h-full w-full object-cover group-hover:scale-150 transform origin-bottom"
                                alt="Performance Optimization"
                            />
                        </a>
                        <h3 className="mt-4 text-sm font-bold text-gray-800">
                            Performance Optimization
                        </h3>
                        <p className="mt-2 text-xs text-gray-600">
                            Crafting fast-loading, optimized web pages for a smooth user
                            experience.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeUpVariants}
                    >
                        <a href="#_" className="group">
                            <img
                                src="https://w3-lab.com/wp-content/uploads/2022/10/Website-design-with-a-limited-color-palette-and-fonts-that-are-easy-to-read.jpg"
                                className="rounded-xl rotate-6 group-hover:rotate-0 duration-500 group-hover:-translate-y-12 h-full w-full object-cover group-hover:scale-150 transform origin-bottom"
                                alt="Simple and Clean Design"
                            />
                        </a>
                        <h3 className="mt-4 text-sm font-bold text-gray-800">
                            Simple and Clean Design
                        </h3>
                        <p className="mt-2 text-xs text-gray-600">
                            Developing intuitive and clutter-free user interfaces for a
                            seamless user experience.
                        </p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={fadeUpVariants}
                    >
                        <a href="#_" className="group">
                            <img
                                src="https://dreamfarmstudios.com/wp-content/uploads/2024/05/interactive-animation-min-1500x844.jpg"
                                className="rounded-xl -rotate-12 group-hover:rotate-0 duration-500 group-hover:-translate-y-12 h-full w-full object-cover group-hover:scale-150 transform origin-bottom"
                                alt="Animation and Interactivity"
                            />
                        </a>
                        <h3 className="mt-4 text-sm font-bold text-gray-800">
                            Animation and Interactivity
                        </h3>
                        <p className="mt-2 text-xs text-gray-600">
                            Adding thoughtful animations and interactive elements to enhance
                            user engagement without overwhelming them.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
