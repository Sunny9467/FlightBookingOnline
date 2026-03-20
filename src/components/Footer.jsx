import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4">

            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

                {/* Logo + About */}
                <div>
                    <div className="flex-1 md:justify-start">
                        <Link to="/">
                            <img
                                src="/Images/logo/flight-booking-online-logo-final-png.png"
                                alt="logo"
                                className="h-full max-h-30 object-contain"
                            />
                        </Link>
                    </div>
                    <p className="text-sm">
                        We provide the best services with quality and trust. Your satisfaction is our priority.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/aboutus" className="hover:text-white">About</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                    <ul className="space-y-2">
                        <li>Flight Booking</li>
                        <li>Hotel Booking</li>
                        <li>Tour Packages</li>
                        <li>Support</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                        <a className="bg-gray-800 p-3 rounded-full hover:bg-red-700 transition">
                            <FaFacebookF />
                        </a>
                        <a className="bg-gray-800 p-3 rounded-full hover:bg-red-700 transition">
                            <FaInstagram />
                        </a>
                        <a className="bg-gray-800 p-3 rounded-full hover:bg-red-700 transition">
                            <FaTwitter />
                        </a>
                        <a className="bg-gray-800 p-3 rounded-full hover:bg-red-700 transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                © {new Date().getFullYear()} Flight Booking Online. All rights reserved.
            </div>

        </footer>
    );
}