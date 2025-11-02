import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
                    <ul className="space-y-2 text-gray-400">
                        <li>Mirpur, 1502 St.</li>
                        <li>Dhaka, Bangladesh</li>
                        <li>Email: <span className="text-gray-300">support@lingo-bingo.com</span></li>
                        <li>Phone: <span className="text-gray-300">+880 1813 150708</span></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-white">Company</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Jobs</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Terms & Conditions</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Help Center</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-white">Stay Connected</h2>
                    <p className="text-gray-400 mb-4">Follow us on social media for updates and learning tips.</p>
                    <div className="flex gap-4 mb-6">
                        <a href="#" className="p-2 bg-gray-700 hover:bg-blue-600 rounded-full transition"><FaFacebookF size={18} /></a>
                        <a href="#" className="p-2 bg-gray-700 hover:bg-blue-400 rounded-full transition"><FaTwitter size={18} /></a>
                        <a href="#" className="p-2 bg-gray-700 hover:bg-pink-500 rounded-full transition"><FaInstagram size={18} /></a>
                        <a href="#" className="p-2 bg-gray-700 hover:bg-blue-700 rounded-full transition"><FaLinkedinIn size={18} /></a>
                    </div>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 px-4 py-2 rounded-r-lg text-white font-medium hover:bg-blue-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-500">
                © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Lingo Bingo</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
