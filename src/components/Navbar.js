import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home"); // Track the active link
    const [showForm, setShowForm] = useState(false); // State for showing the contact form
    const [formData, setFormData] = useState({ name: "", email: "", message: "" }); // State for form data

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Intersection Observer to detect which section is currently in the viewport
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        if (!sections.length) return; // Ensure sections exist before observing

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3, // Reduced from 0.5 to 0.3 for better detection
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);



    const handleContactClick = () => {
        setShowForm(!showForm); // Toggle form visibility
    };

    const handleCloseModal = () => {
        setShowForm(false); // Close the modal when the close button is clicked
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation to check if all fields are filled
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: "error",
                title: "Incomplete Form",
                text: "Please fill in all the fields before submitting.",
                confirmButtonText: "OK",
            });
            return;
        }

        // Show success message
        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been successfully sent. We will get back to you soon.",
            confirmButtonText: "OK",
        });

        // Reset form after submission (optional)
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 mb-2 px-4 shadow backdrop-blur-lg bg-transparent">
            <div className="mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-3xl font-semibold tracking-tight text-black" href="/">
                    <span style={{ fontFamily: "'Zen Dots', cursive" }} className="font-serif text-orange-400">JT</span>
                </a>

                {/* Hamburger icon positioned top-right */}
                <button
                    className="absolute top-4 right-4 sm:hidden text-xl text-gray-600"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                    >
                        <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>

                {/* Navbar links */}
                <nav
                    aria-label="Header Navigation"
                    className={`${isMenuOpen ? "block" : "hidden"} sm:block pl-2 py-6 sm:py-0`}
                >
                    <ul className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className="sm:ml-auto">
                            <a
                                href="#home"
                                className={`text-gray-400 hover:text-orange-400 transition-all duration-300 ${activeLink === "#home"
                                    ? "text-orange-400 font-normal underline decoration-orange-400 underline-offset-4"
                                    : ""
                                    }`}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#aboutme"
                                className={`text-gray-400 hover:text-orange-400 transition-all duration-300 ${activeLink === "#aboutme"
                                    ? "text-orange-400 font-normal underline decoration-orange-400 underline-offset-4"
                                    : ""
                                    }`}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className={`text-gray-400 hover:text-orange-400 transition-all duration-300 ${activeLink === "#projects"
                                    ? "text-orange-400 font-normal underline decoration-orange-400 underline-offset-4"
                                    : ""
                                    }`}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skill"
                                className={`text-gray-400 hover:text-orange-400 transition-all duration-300 ${activeLink === "#skill"
                                    ? "text-orange-400 font-normal underline decoration-orange-400 underline-offset-4"
                                    : ""
                                    }`}
                            >
                                Skill
                            </a>
                        </li>
                        <li className="mt-2 sm:mt-0">
                            <a
                                onClick={handleContactClick}
                                className="rounded-xl border-2 border-orange-400 px-6 py-2 font-normal text-gray-400 hover:bg-orange-500 hover:text-white"
                                href="#"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Conditionally render Modal Contact Form */}
            {showForm && (
                <div className="absolute top-full left-0 w-full bg-opacity-50 z-50">
                    <div className="bg-black bg-opacity-90 backdrop-blur-lg p-8 rounded-lg max-w-lg mx-auto mt-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold text-orange-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 mt-1 border-b-2 border-white focus:border-blue-500 bg-transparent text-gray-700 placeholder-white"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold text-orange-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 mt-1 border-b-2 border-white focus:border-blue-500 bg-transparent text-gray-700 placeholder-white"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-semibold text-orange-400">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full p-2 mt-1 border-b-2 border-white focus:border-blue-500 bg-transparent text-gray-700 placeholder-white"
                                    rows="4"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="bg-transparent border-2 border-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md mr-2"
                                >
                                    Close
                                </button>

                                <button
                                    type="submit"
                                    className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                        <div className="mt-4">
                            <div className="mb-4 flex items-center">
                                <FaPhoneAlt className="text-orange-400 mr-2" />
                                <span className="text-white">0961 272 4880</span>
                            </div>
                            <div className="mb-4 flex items-center">
                                <FaMapMarkerAlt className="text-orange-400 mr-2" />
                                <span className="text-white">Barangay Culiat, Quezon City, Metro Manila, Philippines</span>
                            </div>
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold text-orange-400 mb-2">Get in Touch</h4>
                                <div className="flex space-x-4">
                                    <a href="https://www.facebook.com/joene.tuban?mibextid=LQQJ4d" className="text-orange-400"><FaFacebook size={24} /></a>
                                    <a href="https://www.instagram.com/joenetuban/" className="text-orange-400"><FaInstagram size={24} /></a>
                                    <a href="https://www.linkedin.com/in/joenetuban/" className="text-orange-400"><FaLinkedin size={24} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </header>
    );
};

export default Navbar;