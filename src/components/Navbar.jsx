import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      setShowNav(false);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setScroll(window.scrollY > 50);
        setShowNav(true);
      },1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] h-20 flex items-center transition-all duration-500 ${
          showNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0"
        } ${
          scroll
            ? "bg-white/90 backdrop-blur-md text-black shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-4 relative">

          {/* Mobile Menu Icon (Left) */}
          <div className="md:hidden z-10">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu
                size={28}
                className={`${scroll ? "text-black" : "text-black cursor-pointer"}`}
              />
            </button>
          </div>

          {/* Logo (Center in mobile, left in desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link to="/">
              <img
                src="/Images/logo/flight-booking-online-logo-final-png.png"
                alt="logo"
                className="h-25 md:h-50 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium ml-auto">
            <li>
              <Link
                to="/"
                className={`hover:text-red-700 ${
                  scroll ? "text-black" : "text-black font-semibold"
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/aboutus"
                className={`hover:text-red-700 ${
                  scroll ? "text-black" : "text-black font-semibold"
                }`}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/booking"
                className={`hover:text-red-700 ${
                  scroll ? "text-black" : "text-black font-semibold"
                }`}
              >
                Booking
              </Link>
            </li>

            <li>
              <Link
                to="/blogs"
                className={`hover:text-red-700 ${
                  scroll ? "text-black" : "text-black font-semibold"
                }`}
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                to="/contactus"
                className={`hover:text-red-700 ${
                  scroll ? "text-black" : "text-black font-semibold"
                }`}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className={`hover:text-red-700 ${
                  scroll ? "text-black" : "text-black font-semibold"
                }`}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-15 left-0 w-full bg-white text-black shadow-md md:hidden text-center">
            <Link to="/" className="block py-3 hover:text-red-700 font-semibold">Home</Link>
            <Link to="/aboutus" className="block py-3 hover:text-red-700 font-semibold">About Us</Link>
            <Link to="/booking" className="block py-3 hover:text-red-700 font-semibold">Booking</Link>
            <Link to="/blogs" className="block py-3 hover:text-red-700 font-semibold">Blogs</Link>
            <Link to="/contactus" className="block py-3 hover:text-red-700 font-semibold">Contact</Link>
            <Link to="/login" className="block py-3 hover:text-red-700 font-semibold">Login</Link>
          </div>
        )}
      </nav>

      {/* Content shift */}
      <div className="pt-20"></div>
    </>
  );
}




