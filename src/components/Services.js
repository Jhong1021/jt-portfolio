import React from "react";

const ImageSection = () => {
    return (
        <section className="overflow-hidden">
            <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
                    Here’s what I offer
                </h2>
                <div className="flex flex-col sm:flex-row mx-auto gap-8">
                    {/* Image Card with Title and Description */}
                    <div className="text-center">
                        <a href="#_">
                            <img
                                src="https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png"
                                className="rounded-xl rotate-6 hover:rotate-0 hover:-translate-y-12 hover:scale-150 duration-500 h-full w-full object-cover transform origin-bottom"
                                alt="Responsive Design"
                            />
                        </a>
                        <h3 className="mt-4 text-sm font-bold text-gray-800">
                            Responsive Design
                        </h3>
                        <p className="mt-2 text-xs text-gray-600">
                            Creating websites that look great and function flawlessly on all devices, from mobile phones to desktops.
                        </p>
                    </div>

                    <div className="text-center">
                        <a href="#_">
                            <img
                                src="https://media.licdn.com/dms/image/D4E12AQF-mlbR1jN0KQ/article-cover_image-shrink_720_1280/0/1702033454321?e=2147483647&v=beta&t=K0qbaWaVp3eBFyHrt5xztFmoQA-9tC-xPTtv9UW4Hsw"
                                className="rounded-xl -rotate-12 hover:rotate-0 hover:-translate-y-12 hover:scale-150 duration-500 h-full w-full object-cover transform origin-bottom"
                                alt="Performance Optimization"
                            />
                        </a>
                        <h3 className="mt-4 text-sm font-bold text-gray-800">
                            Performance Optimization
                        </h3>
                        <p className="mt-2 text-xs text-gray-600">
                            Crafting fast-loading, optimized web pages for a smooth user experience.
                        </p>
                    </div>

                    <div className="text-center">
                        <a href="#_">
                            <img
                                src="https://w3-lab.com/wp-content/uploads/2022/10/Website-design-with-a-limited-color-palette-and-fonts-that-are-easy-to-read.jpg"
                                className="rounded-xl rotate-6 hover:rotate-0 hover:-translate-y-12 hover:scale-150 duration-500 h-full w-full object-cover transform origin-bottom"
                                alt="Simple and Clean Design"
                            />
                        </a>
                        <h3 className="mt-4 text-sm font-bold text-gray-800">
                            Simple and Clean Design
                        </h3>
                        <p className="mt-2 text-xs text-gray-600">
                            Developing intuitive and clutter-free user interfaces for a seamless user experience.
                        </p>
                    </div>

                    <div className="text-center">
                        <a href="#_">
                            <img
                                src="https://dreamfarmstudios.com/wp-content/uploads/2024/05/interactive-animation-min-1500x844.jpg"
                                className="rounded-xl -rotate-12 hover:rotate-0 hover:-translate-y-12 hover:scale-150 duration-500 h-full w-full object-cover transform origin-bottom"
                                alt="Animation and Interactivity"
                            />
                        </a>
                        <h3 className="mt-4 text-sm font-bold text-gray-800">
                            Animation and Interactivity
                        </h3>
                        <p className="mt-2 text-xs text-gray-600">
                            Adding thoughtful animations and interactive elements to enhance user engagement without overwhelming them.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageSection;
