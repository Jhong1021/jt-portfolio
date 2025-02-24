import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white shadow">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-400 sm:text-center">
                    © 2025{" "}
                    <a href="https://yourwebsite.com/" className="hover:underline hover:text-gray-300">
                        Joene Tuban™
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline hover:text-gray-300 me-4 md:me-6">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline hover:text-gray-300 me-4 md:me-6">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline hover:text-gray-300 me-4 md:me-6">
                            Licensing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
