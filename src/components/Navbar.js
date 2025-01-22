import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (index) => {
        setActiveLink(index);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observerOptions = {
            root: null, // Use the viewport
            rootMargin: "0px",
            threshold: 0.6, // 60% of the section must be visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const sectionIndex = [...sections].findIndex(
                        (section) => section.id === sectionId
                    );
                    setActiveLink(sectionIndex);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="bg-blue-500 fixed top-0 left-0 w-full z-50">
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <a className="text-3xl font-bold leading-none" href="#">
                    <svg className="h-10" alt="logo" viewBox="0 0 10240 10240">
                        {/* Add the path for the logo here */}
                    </svg>
                </a>
                <div className="lg:hidden">
                    <button
                        className="navbar-burger flex items-center text-blue-600 p-3"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    <li>
                        <a
                            className={`text-sm ${activeLink === 0 ? "text-black" : "text-gray-400"} hover:text-black`}
                            href="#home"
                            onClick={() => handleLinkClick(0)}
                        >
                            Home
                        </a>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <a
                            className={`text-sm ${activeLink === 1 ? "text-black" : "text-gray-400"} hover:text-black`}
                            href="#about"
                            onClick={() => handleLinkClick(1)}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <a
                            className={`text-sm ${activeLink === 2 ? "text-black" : "text-gray-400"} hover:text-black`}
                            href="#project"
                            onClick={() => handleLinkClick(2)}
                        >
                            Project
                        </a>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>
                    <li>
                        <a
                            className={`text-sm ${activeLink === 3 ? "text-black" : "text-gray-400"} hover:text-black`}
                            href="#skill"
                            onClick={() => handleLinkClick(3)}
                        >
                            Skill
                        </a>
                    </li>
                </ul>
                {/* Right corner buttons */}
            </nav>
            <div className={`navbar-menu relative z-50 ${isMenuOpen ? "block" : "hidden"}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                                <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    d="M8284 9162 c-2 -207 -55 -427 -161 -667 ..."
                                />
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
