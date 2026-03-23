import React, { useState } from 'react'

export default function SearchFlights() {
    let [open, setopen] = useState(null)
    const today = new Date().toISOString().split("T")[0];
    const [tripType, setTripType] = useState("oneway");
    const [from, setFrom] = useState("DEL");
    const [to, setTo] = useState("KOL");
    const [departDate, setDepartDate] = useState(today);
    const [returnDate, setReturnDate] = useState("");

    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };
    return (
        <>

             <section data-aos="zoom-in">
                <div className="relative min-h-screen">

                    {/* Background Image */}
                    <img
                        src="/Images/booking Banner.jpg.jpeg"
                        alt="banner"
                        className="w-full h-full object-cover absolute inset-0"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/15"></div>

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




        </>
    )
}