import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-12 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <h6 className="text-xl font-bold mb-4">Contact Us</h6>
                    <p className="mb-2">Mirpur, 1502 St.</p>
                    <p className="mb-2">Dhaka, Bangladesh</p>
                    <p className="mb-2">Email: support@lingo-bingo.com</p>
                    <p>Phone: +880 1813 150708</p>
                </div>

                <div>
                    <h6 className="text-xl font-bold mb-4">Company</h6>
                    <ul className="flex flex-col gap-2">
                        <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition">Jobs</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-xl font-bold mb-4">Follow Us</h6>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-blue-500 transition"><FaFacebookF size={20} /></a>
                        <a href="#" className="hover:text-blue-500 transition"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-blue-500 transition"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-blue-500 transition"><FaLinkedinIn size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Lingo Bingo Language Learning App. <br /> All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
