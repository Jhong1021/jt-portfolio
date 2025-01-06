import React, { useState } from "react";

const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 text-slate-700 container mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center bg-transparent z-50"
            style={{ fontFamily: 'Ga Maamli, sans-serif' }}
        >
            <input type="checkbox" className="peer hidden" id="navbar-open" />
            <label
                className="absolute top-5 right-5 cursor-pointer lg:hidden"
                htmlFor="navbar-open"
                onClick={toggleNavbar}
            >
                <svg
                    className="h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </label>
            <nav
                aria-label="Header Navigation"
                className={`peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row ${isNavbarOpen ? "pt-8 max-h-60" : ""
                    }`}
            >
                <ul className="flex w-full flex-col text-center items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                    <li className="lg:mr-12">
                        <a
                            className="rounded text-black font-semibold transition focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
                            href="#home"
                        >
                            Home
                        </a>
                    </li>
                    <li className="lg:mr-12">
                        <a
                            className="rounded text-black font-semibold transition focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
                            href="#about"
                        >
                            About Me
                        </a>
                    </li>
                    <li className="lg:mr-12">
                        <a
                            className="rounded text-black font-semibold transition focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
                            href="#project"
                        >
                            Project
                        </a>
                    </li>
                    <li className="lg:mr-12">
                        <a
                            className="rounded text-black font-semibold transition focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
                            href="#skill"
                        >
                            Skills
                        </a>
                    </li>
                </ul>
                <hr className="mt-4 w-full lg:hidden" />
            </nav>
        </header>
    );
};

export default Navbar;
