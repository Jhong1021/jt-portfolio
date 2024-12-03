import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Me from "../assets/images/L.png";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
const Landing = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleDownload = () => {
        Swal.fire({
            icon: 'success',
            title: 'Download Successful',
            text: 'Resume has been downloaded successfully!',
            timer: 2000,
            showConfirmButton: false,
        });

        const link = document.createElement('a');
        link.href = '/images/Portfolio resume.pdf'; // Update with the actual path
        link.download = 'Joene_Tuban_Resume.pdf';
        link.click();
    };

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
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation to check if all fields are filled
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: 'error',
                title: 'Incomplete Form',
                text: 'Please fill in all the fields before submitting.',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been successfully sent. We will get back to you soon.',
            confirmButtonText: 'OK'
        });

        // Reset form after submission (optional)
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (

        <section id='home' className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 min-h-screen">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 mt-7">
                    {/* Left side: Text */}
                    <motion.div
                        className="opacity-0"
                        initial={{ opacity: 0, y: -100 }} // Start above the view
                        whileInView={{ opacity: 1, y: 0 }} // Move to normal position
                        transition={{ duration: 1 }}
                    >
                        <p className="text-black font-semibold">
                            Hey 👋 I am
                        </p>
                        <h2 className="text-9xl font-bold mt-2 text-black">
                            Joene Tuban
                        </h2>


                        <h2 className="text-3xl font-bold mt-5 text-black">
                            <Typewriter
                                words={['Frontend Developer', 'Web Designer', 'UI Designer']}
                                loop={false} // Set to `true` for infinite loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h2>

                        {/* Buttons Section */}
                        <motion.div
                            className="mt-8 space-x-4"
                            initial={{ opacity: 0, y: 100 }} // Start below the view
                            whileInView={{ opacity: 1, y: 0 }} // Move to normal position
                            transition={{ duration: 1.5 }}
                        >
                            <button
                                onClick={handleDownload}
                                className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white px-6 py-3 text-lg font-semibold rounded-lg"
                            >
                                Download CV
                            </button>
                            <button
                                onClick={handleContactClick}
                                className="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 text-blue-600 px-6 py-3 text-lg font-semibold rounded-lg"
                            >
                                Contact Me
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right side: Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 100 }} // Start from the right
                        whileInView={{ opacity: 1, x: 0 }} // Move to normal position
                        transition={{ duration: 1.5 }}
                    >
                        <img
                            className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                            alt=""
                        />
                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                            src={Me}
                            alt="Joene Tuban"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Conditionally render Modal Contact Form */}
            {showForm && (
                <div className="fixed inset-0 bg-opacity-20 flex justify-center items-center z-50">
                    <div className="bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg max-w-lg w-full">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 mt-1 border-b-2 border-black focus:border-blue-500 bg-transparent text-gray-700 placeholder-gray-500"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 mt-1 border-b-2 border-black focus:border-blue-500 bg-transparent text-gray-700 placeholder-gray-500"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full p-2 mt-1 border-b-2 border-black focus:border-blue-500 bg-transparent text-gray-700 placeholder-gray-500"
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
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md mr-2"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                        <div className="mb-4 flex items-center mt-4">
                            <FaPhoneAlt className="text-blue-600 mr-2" />
                            <span className="text-gray-700">0961 272 4880</span>
                        </div>
                        <div className="mb-4 flex items-center">
                            <FaMapMarkerAlt className="text-green-600 mr-2" />
                            <span className="text-gray-700">Barangay Culiat, Quezon City, Metro Manila, Philippines</span>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Get in Touch</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/joene.tuban?mibextid=LQQJ4d" className="text-blue-500"><FaFacebook size={24} /></a>
                                <a href="https://www.instagram.com/joenetuban/" className="text-pink-500"><FaInstagram size={24} /></a>
                                <a href="https://www.linkedin.com/in/joenetuban/" className="text-blue-700"><FaLinkedin size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Landing;