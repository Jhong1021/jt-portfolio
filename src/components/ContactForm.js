import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useState } from 'react';

const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(true); // State to control the visibility of the form

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from reloading the page

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        // Check if all fields are filled
        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all fields!',
            });
            return;
        }

        // Show success popup if everything is filled out
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been sent successfully.',
        });
    };

    const closeForm = () => {
        // Close the form and reset all state
        setIsOpen(false);
    };

    if (!isOpen) return null; // Return null to remove the form when closed

    return (
        <div className="mt-8 p-6 bg-opacity-50 backdrop-blur-md rounded-md relative">
            <form onSubmit={handleSubmit}>
                {/* Close Button inside the form */}
                <button
                    type="button"
                    className="absolute top-2 right-2 font-bold"
                    onClick={closeForm} // Close the form when the button is clicked
                >
                    X
                </button>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Me</h3>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Your name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Your message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>

            {/* Cellphone number with icon */}
            <div className="mb-4 flex items-center mt-4">
                <FaPhoneAlt className="text-blue-600 mr-2" />
                <span className="text-gray-700">0961 272 4880</span> {/* Your actual cellphone number */}
            </div>
            {/* Location with icon */}
            <div className="mb-4 flex items-center">
                <FaMapMarkerAlt className="text-green-600 mr-2" />
                <span className="text-gray-700">Barangay Culiat, Quezon City, Metro Manila, Philippines</span> {/* Your actual location */}
            </div>

            <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Get in Touch</h4>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
