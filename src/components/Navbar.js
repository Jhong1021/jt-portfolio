import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <a aria-current="page" className="flex items-center" href="/">
                            <img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Website Logo" />
                            <p className="sr-only">Website Title</p>
                        </a>
                    </div>

                    {/* Hamburger menu icon for small screens */}
                    <button onClick={toggleMenu} className="md:hidden block">
                        <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>

                    {/* Links - Centered in all screen sizes */}
                    <div className={`hidden md:flex md:items-center md:w-auto w-full ${isOpen ? 'block' : 'hidden'}`} id="menu">
                        <nav>
                            <ul className="md:flex items-center justify-center gap-5 text-base text-gray-700 pt-4 md:pt-0">
                                <li><a className="md:p-4 py-3 px-0 block" href="#home">Home</a></li>
                                <li><a className="md:p-4 py-3 px-0 block" href="#project">Project</a></li>
                                <li><a className="md:p-4 py-3 px-0 block" href="#about">About Me</a></li>
                                <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#skill">Skill</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Menu for small screens */}
            <div className={`md:hidden flex-col items-center w-full pt-4 space-y-4 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <a className="text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 block py-3 px-0" href="#home">Home</a>
                <a className="text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 block py-3 px-0" href="#project">Project</a>
                <a className="text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 block py-3 px-0" href="#about">About Me</a>
                <a className="text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 block py-3 px-0" href="#skill">Skill</a>
            </div>
        </header>
    );
};

export default Navbar;
