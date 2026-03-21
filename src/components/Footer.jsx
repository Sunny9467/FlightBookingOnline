import React from "react";
import { MapPin, Mail, Phone, Copyright, Send } from "lucide-react";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black from-gray-900 via-gray-800 to-gray-900 text-white mt-10">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
            Contact Us
          </h3>

          <div className="space-y-6">

            <div className="flex gap-4 items-start group">
              <MapPin className="text-blue-400 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <Link className="text-sm text-gray-300 hover:text-red-700 transition">
                Palam,New Delhi
                </Link>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <Phone className="text-blue-400 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <Link
                  to={"tel:8986286734"}
                  className="text-sm text-gray-300 hover:text-red-700 transition"
                >
                  (+91)8986286734
                </Link>
              </div>
            </div>

            <div className="flex gap-4 items-start group">
              <Mail className="text-blue-400 group-hover:scale-110 transition" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <Link to={`mailto: kumarsunny919200@gmail.com`} className="text-sm text-gray-300 hover:text-red-700 transition">
                  kumarsunny919200@gmail.com
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
            Quick Links
          </h3>

          <ul className="grid gap-3 text-sm">

            <li><Link to="/" className="hover:text-red-700">Home</Link></li>
            <li><Link to="/aboutus" className="hover:text-red-700">About Us</Link></li>
            <li><Link to="/faq" className="hover:text-red-700">Faq</Link></li>
            <li><Link to="/contact-us" className="hover:text-red-700">Contact Us</Link></li>
            <li><Link to="/blog" className="hover:text-red-700">Blog</Link></li>

          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
            Support Links
          </h3>
          <ul className="grid  gap-3 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-red-700">Privacy & Policy</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-red-700">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy" className="hover:text-red-700">Refund & Cancellation</Link></li>
            <li><Link to="/disclaimer" className="hover:text-red-700">Disclaimer</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>

          <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
            Newsletter
          </h3>

          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Subscribe to our newsletter for a premium travel experience.
            Receive updates on flight deals, top airlines, and exclusive offers
            for domestic and international routes.
          </p>

          {/* Newsletter Input */}
          <div className="bg-white/10 backdrop-blur-lg border border-red-700 rounded-xl p-3 flex items-center">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2"
            />

            <button className="bg-white-600 hover:bg-red-700 cursor-pointer p-2 rounded-lg transition">
              <Send size={18}/>
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 text-xl">

            <Link className="hover:text-pink-500 transition">
              <FaInstagram/>
            </Link>

            <Link  className="hover:text-blue-500 transition">
              <FaFacebook/>
            </Link>

            <Link  className="hover:text-red-500 transition">
              <FaPinterest/>
            </Link>

            <Link  className="hover:text-red-500 transition">
              <FaYoutube/>
            </Link>

            <Link className="hover:text-blue-400 transition">
              <FaLinkedin/>
            </Link>

          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">

          <div className="flex items-center gap-2">
            <Copyright size={16}/>
            2026 Book Flight Online. All Rights Reserved.
          </div>

          <p>Your trusted online booking  tickets platform.</p>

          <div className="flex gap-6">
            <Link to="/terms-conditions" className="hover:text-white">Terms&Conditions</Link>
            <Link to="/privacy-policy" className="hover:text-white">Privacy&Policy</Link>
          </div>

        </div>

      </div>

    </footer>
  );
}