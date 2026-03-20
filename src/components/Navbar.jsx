import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        let scrolled = () => setScroll(window.scrollY >100)
        window.addEventListener("scroll", scrolled)
        return () => window.removeEventListener("scroll", scrolled)
    }, [])
    return (
        <nav className={`sticky top-0 w-full z-50 h-23 text-center transition-all duration-300 ${scroll ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
            }`}>

            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 ">

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu size={28} className="cursor-pointer text-black "/>
                    </button>
                </div>

                <div className="flex-1 md:justify-start">
                    <Link to="/">
                        <img
                            src="/Images/logo/flight-booking-online-logo-final-png.png"
                            alt="logo"
                            className="h-full max-h-25 object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex text-center space-x-8 font-medium text-gray-700">
                    <li><Link className="hover:text-red-700" to="/">Home</Link></li>
                    <li><Link className="hover:text-red-700" to="/aboutus">About</Link></li>
                    <li><Link className="hover:text-red-700" to="/booking">Booking</Link></li>
                    <li><Link className="hover:text-red-700" to="/offers">Offers</Link></li>
                    <li><Link className="hover:text-red-700" to="/blogs">Blogs</Link></li>
                    <li><Link className="hover:text-red-700" to="/contactus">ContactUs</Link></li>
                    <li><Link className="hover:text-red-700" to="/login">Login</Link></li>
                </ul>
            </div>

            {/* 🔥 Mobile Menu (Niche open hoga) */}
            {menuOpen && (
                <div className="md:hidden w-full bg-gray-100 py-3 text-black   text-center">
                    <Link to="/" className="block">Home</Link>
                    <Link to="/aboutus" className="block">About</Link>
                    <Link to="/booking" className="block">Booking</Link>
                    <Link to="/offers" className="block">Offers</Link>
                    <Link to="/blogs" className="block">Blogs</Link>
                    <Link to="/contactus" className="block">ContactUs</Link>
                    <Link to="/login" className="block">Login</Link>
                </div>
            )}

        </nav>
    );
}