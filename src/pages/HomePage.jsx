import { CalendarCheck, Clock, CreditCard, Globe, Headphones, MapPin, PlaneTakeoff, ShieldCheck } from "lucide-react";
import React, { useState } from "react";
import Destinations from "./DestinationPage";
import { Link } from "react-router-dom";
import FaqPage from "./FaqPage";
import Testimonial from "../components/Testimonial";

export default function HomePage() {
    const [tripType, setTripType] = useState("oneway")
    const today = new Date().toISOString().split("T")[0];

    const [from, setFrom] = useState("DEL")
    const [to, setTo] = useState("BOM")
    const [departDate, setDepartDate] = useState(today)
    const [returnDate, setReturnDate] = useState("");


    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };

    const Features = [
        {
            icon: <PlaneTakeoff size={28} />,
            title: "Easy Flight Booking",
            desc: "Book flights quickly with our simple and user-friendly platform. Search, compare, and confirm tickets in just a few clicks, making your travel planning smooth, fast, and completely hassle-free."
        },
        {
            icon: <CalendarCheck size={28} />,
            title: "Flexible Dates",
            desc: "Choose travel dates that suit your schedule easily. Find better deals and convenient flight options by adjusting dates, ensuring you get the best price and comfortable journey every time."
        },
        {
            icon: <MapPin size={28} />,
            title: "Multiple Destinations",
            desc: "Travel to thousands of destinations worldwide with ease. Explore both domestic and international routes, giving you complete flexibility to plan trips anywhere with the best available flight options."
        },
        {
            icon: <CreditCard size={28} />,
            title: "Secure Payments",
            desc: "Make payments safely using our secure system. We support multiple payment methods and protect your financial information with advanced encryption, ensuring every transaction is safe and reliable.  "
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "100% Secure Booking",
            desc: "Your booking is completely safe with us. We use advanced security measures to protect your personal details and ensure a secure, reliable, and trusted booking experience every time."
        },
        {
            icon: <Headphones size={28} />,
            title: "24/7 Support",
            desc: "Our support team is available 24/7 to assist you. Get help with bookings, cancellations, or any queries anytime, ensuring a smooth and stress-free travel experience."
        },
        {
            icon: <Clock size={28} />,
            title: "Instant Confirmation",
            desc: "Receive instant confirmation after booking your flight. Get all travel details immediately, helping you plan your journey confidently without delays or uncertainty about your ticket status."
        },
        {
            icon: <Globe size={28} />,
            title: "Global Airlines",
            desc: "Book flights from top airlines worldwide. We provide access to trusted carriers, offering competitive prices and comfortable travel options for both domestic and international journeys."
        }
    ]

    return (

        <div>

            {/* Home Section */}
            <section data-aos="zoom-in">
                <div className="relative min-h-screen">

                    {/* Background Image */}
                    <img
                        src="/Images/Home page banner.jpg.jpeg"
                        alt="banner"
                        className="w-full h-full object-cover absolute inset-0"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-center items-center text-white px-4 pt-24 pb-10">

                        {/* Heading */}
                        <h1 className="text-2xl md:text-5xl font-bold mb-3 text-center">
                            Explore The Skies
                        </h1>

                        <p className="mb-6 text-sm md:text-lg text-center max-w-xl">
                            Your Ultimate Flight Booking Search Engine for Seamless Travel Experiences!
                        </p>

                        {/* Trip Type */}
                        <div className="flex gap-3 mb-6 flex-wrap mt-20 justify-center">
                            <button
                                onClick={() => setTripType("oneway")}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${tripType === "oneway"
                                    ? "bg-red-700 text-white"
                                    : "bg-white/70 text-gray-800"
                                    }`}
                            >
                                One Way
                            </button>

                            <button
                                onClick={() => setTripType("roundtrip")}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${tripType === "roundtrip"
                                    ? "bg-red-700 text-white"
                                    : "bg-white/70 text-gray-800"
                                    }`}
                            >
                                Round Trip
                            </button>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white/80 backdrop-blur-md  rounded-2xl p-4 md:p-6 w-full max-w-5xl shadow-2xl">

                            <form
                                className={`grid text-black grid-cols-1 md:grid-cols-6 gap-4 ${tripType === "roundtrip" ? "md:grid-cols-7" : ""
                                    }`}
                            >

                                {/* From */}
                                <div className="border rounded-xl p-3">
                                    <p className="text-xs">From</p>
                                    <input
                                        type="text"
                                        placeholder="Delhi (DEL)"
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                        className="w-full outline-none font-semibold"
                                    />
                                </div>

                                {/* Swap Button (hidden in mobile) */}
                                <div className="hidden md:flex items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={handleSwap}
                                        className="bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center hover:rotate-180 transition"
                                    >
                                        ⇄
                                    </button>
                                </div>

                                {/* To */}
                                <div className="border rounded-xl p-3">
                                    <p className="text-xs">To</p>
                                    <input
                                        type="text"
                                        placeholder="Mumbai (BOM)"
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                        className="w-full outline-none font-semibold"
                                    />
                                </div>

                                {/* Departure */}
                                <div className="border rounded-xl p-3">
                                    <p className="text-xs">Departure</p>
                                    <input
                                        type="date"
                                        value={departDate}
                                        min={today}
                                        onChange={(e) => setDepartDate(e.target.value)}
                                        className="w-full outline-none font-semibold"
                                    />
                                </div>

                                {/* Return */}
                                {tripType === "roundtrip" && (
                                    <div className="border rounded-xl p-3">
                                        <p className="text-xs">Return</p>
                                        <input
                                            type="date"
                                            value={returnDate}
                                            min={departDate}
                                            onChange={(e) => setReturnDate(e.target.value)}
                                            className="w-full outline-none font-semibold"
                                        />
                                    </div>
                                )}

                                {/* Adults */}
                                <div className="border rounded-xl p-3">
                                    <p className="text-xs">Adults</p>
                                    <select className="w-full outline-none font-semibold">
                                        <option>1 Adult</option>
                                        <option>2 Adults</option>
                                        <option>3 Adults</option>
                                        <option>4 Adults</option>
                                    </select>
                                </div>

                                {/* Children */}
                                <div className="border rounded-xl p-3">
                                    <p className="text-xs">Children</p>
                                    <select className="w-full outline-none font-semibold">
                                        <option>0 Child</option>
                                        <option>1 Child</option>
                                        <option>2 Children</option>
                                        <option>3 Children</option>
                                    </select>
                                </div>

                                {/* Button */}
                                <div className="md:col-span-full">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-red-700 hover:bg-red-800 text-white px-10 py-3 rounded-xl font-semibold transition"
                                    >
                                        Search Flights
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Home Section End */}


            {/* About Section */}
            <section data-aos="zoom-in-up">
                <h2 className="text-center py-4 font-bold mt-2 text-red-700 text-3xl">About Us</h2>

                <div className="max-w-7xl mx-auto py-6 md:py-10 grid md:grid-cols-2 gap-6 md:gap-10 items-center">

                    {/* Image */}
                    <div className="order-1 md:order-1 shadow-xl  cursor-pointer transition hover:-translate-y-2">
                        <img
                            src="/Images/About Us intro.jpg.jpeg"
                            alt="about"
                            className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
                        />
                    </div>

                    {/* Content */}
                    <div className="order-2 text-center md:text-left">
                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            At FlyAway, we make flight booking simple, fast, and affordable.
                            Our platform helps you search, compare, and book flights from top airlines worldwide with ease.
                        </p>

                        <p className="text-gray-600 mb-6 text-sm md:text-base">
                            We focus on providing secure payments, real-time availability, and a smooth booking experience.
                            Whether you travel for business or leisure, we ensure your journey starts stress-free.
                        </p>

                        <Link
                            to="/about"
                            className="inline-block bg-red-600 px-6 py-3 rounded-full text-white hover:bg-red-800 transition"
                        >
                            Read More
                        </Link>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="max-w-7xl mx-auto py-6 md:py-10 grid md:grid-cols-2 gap-6 md:gap-10 items-center">

                    {/* Image */}
                    <div className="order-1 md:order-2 shadow-xl  cursor-pointer transition hover:-translate-y-2">
                        <img
                            src="/Images/About Us intro.jpg.jpeg"
                            alt="about"
                            className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
                        />
                    </div>

                    {/* Content */}
                    <div className="order-1 text-center md:text-left">
                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            At FlyAway, we make flight booking simple, fast, and affordable.
                            Our platform helps you search, compare, and book flights from top airlines worldwide with ease.
                        </p>

                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            We focus on providing secure payments, real-time availability, and a smooth booking experience.
                        </p>

                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                            Whether you travel for business or leisure, we ensure your journey starts stress-free.
                        </p>

                        <Link
                            to="/about"
                            className="inline-block bg-red-600 px-6 py-3 rounded-full text-white hover:bg-red-800 transition"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </section>
            {/*About Section End*/}


            {/* Features Section */}
            <section data-aos="fade-up"
              data-aos-duration="3000">
                <h2 className="text-center text-3xl font-bold text-red-700  py-4 mb-2">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 mt-2 gap-4 p-6">
                    {
                        Features.map((item, index) => {
                            return <div key={index} className="bg-white cursor-pointer mb-5 rounded-xl p-6 text-center shadow-xl border-b-4 border-b-red-700 hover:shadow-red-300 transition hover:-translate-y-2">

                                {/* Icon */}
                                <div className="text-red-700 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-semibold text-lg mb-2">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm">
                                    {item.desc}
                                </p>
                            </div>

                        })
                    }
                </div>
            </section>
            {/*Feature Section End */}

            {/* Destination Section */}
            <Destinations />
            <FaqPage />

            <Testimonial />

            {/* Contact Form Section */}
            <section className="bg-gray-100  p-4 px-3" data-aos="fade-up">

                {/* Center Form */}
                <div className="max-w-3xl mx-auto">
                <h2 className="text-center font-bold p-4 mb-6 text-red-700 text-3xl">Contact Us</h2>

                    <form className="bg-white p-6 rounded-2xl shadow-lg space-y-4">

                        <div>
                            <label className="block mb-1 font-medium">Name*</label>
                            <input
                                type="text"
                                placeholder="Enter Your Full Name"
                                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Email*</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Phone*</label>
                            <input
                                type="tel"
                                placeholder="Enter Your Phone Number"
                                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Subject</label>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                            ></textarea>
                        </div>

                        <button className="w-full bg-red-700 cursor-pointer text-white py-3 rounded-lg hover:bg-red-800 transition">
                            Send Message
                        </button>

                    </form>
                </div>
            </section>
            {/* Contact Form Section End */}
        </div>
    );
}