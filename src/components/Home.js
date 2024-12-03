import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const techLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png",
    "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
    "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
    "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
];

const Home = () => {
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
        <motion.div
            className="font-sans max-w-6xl mx-auto pt-20 bg-gray-50 dark:bg-gray-800"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div id="home" className="relative grid md:grid-cols-2 items-center md:gap-8 gap-6 min-h-screen">
                <IntroductionSection handleDownload={handleDownload} handleContactClick={handleContactClick} />
                <ProfileImageSection />
            </div>

            {/* Conditionally render Modal Contact Form */}
            {showForm && (
                <div className="fixed inset-0 bg-opacity-20 flex justify-center items-center z-50">
                    <div className="bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-lg max-w-lg w-full">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 mt-1 border-b-2 border-black focus:border-blue-500 bg-transparent text-gray-700 placeholder-gray-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 mt-1 border-b-2 border-black focus:border-blue-500 bg-transparent text-gray-700 placeholder-gray-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full p-2 mt-1 border-b-2 border-black focus:border-blue-500 bg-transparent text-gray-700 placeholder-gray-500"
                                    rows="4"
                                    placeholder="Your Message"
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
                                <a href="https://www.facebook.com/joene.tuban?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="https://www.instagram.com/joene.tuban?igsh=MWRpcm5rczQybHZtNw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="www.linkedin.com/in/joenetuban" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

const IntroductionSection = ({ handleDownload, handleContactClick }) => (
    <motion.div
        className="max-md:order-1 max-md:text-center relative z-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
        <p className="text-sm font-bold text-blue-600 mb-2">
            <span className="rotate-90 inline-block mr-2">|</span> HI, I'M JOENE TUBAN
        </p>
        <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px] transition-transform duration-500 transform hover:scale-105">
            Front-end Developer
        </h2>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Embark on a journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.
        </p>
        <div className="mt-8 space-x-4">
            <Button onClick={handleDownload} className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white">
                Download CV
            </Button>
            <Button onClick={handleContactClick} className="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 text-blue-600">
                Contact Me
            </Button>
        </div>
        <hr className="mt-8 border-gray-300" />
        <TechStack />
    </motion.div>
);

const Button = ({ children, onClick, className }) => (
    <button
        type="button"
        onClick={onClick}
        className={`${className} font-semibold tracking-wide text-sm rounded-full px-6 py-2.5`}
    >
        {children}
    </button>
);

const TechStack = () => (
    <div className="mt-8">
        <p className="text-sm font-bold text-blue-600 mb-2">
            <span className="rotate-90 inline-block mr-2">|</span> My Tech Stack
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {techLogos.map((logo, index) => (
                <motion.img
                    key={logo}
                    src={logo}
                    className="w-20 mx-auto"
                    alt={`tech-logo-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: index * 0.2 }}
                />
            ))}
        </div>
    </div>
);

const ProfileImageSection = () => (
    <motion.div
        className="relative flex items-center overflow-hidden lg:h-[650px] md:h-[550px] h-auto max-h-full"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
    >
        <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-500 z-0"></div>
        <div className="relative z-10">
            <img
                src="https://joene-portfolio.vercel.app/images/contactme2.jpg"
                className="rounded-md w-full lg:w-3/4 md:w-11/12 max-h-full object-cover aspect-auto"
                alt="Joene Tuban"
            />
        </div>
    </motion.div>
);

export default Home;
