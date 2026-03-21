import React, { useState } from 'react'
import BookingInfoPage from './BookingInfoPage';

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
            <section className="relative w-full h-full overflow-hidden">
                <img
                    src="/Images/booking Banner.jpg.jpeg"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 max-w-6xl mx-auto my-auto py-15 w-full mx-4">
                    <div className="bg-black opacity-50 rounded-3xl shadow-2xl p-6 md:p-10">

                        <div className="text-center text-white mb-8">
                            <h1 className="text-3xl md:text-5xl font-bold">
                                Premium Business Class Flights at Exclusive Fares
                            </h1>
                            <h3 className="mt-2 text-white/80">
                                Search Flights & Fly Premium
                            </h3>
                        </div>


                        <div className="flex justify-center gap-3 mb-6">
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

                        {/* Form */}
                        <form className={`grid grid-cols-1 md:grid-cols-6  gap-6 ${tripType === "roundtrip" ? 'grid grid-cols-1 md:grid-cols-7 gap-6' : ""} gap-4 text-gray-800`}>
                            <div>
                                <label className="text-sm text-white">From</label>
                                <input
                                    type="text"
                                    placeholder="Delhi (DEL)"
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                    className="w-full mt-1 p-3 rounded-xl bg-white/90 outline-none"
                                />
                            </div>


                            <div className="flex items-end justify-center">
                                <button
                                    type="button"
                                    onClick={handleSwap}
                                    className="mb-1 bg-white/80 hover:bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-md transition hover:rotate-180"
                                    title="Swap"
                                >
                                    ⇄
                                </button>
                            </div>

                            <div>
                                <label className="text-sm text-white">To</label>
                                <input
                                    type="text"
                                    placeholder="New York (JFK)"
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                    className="w-full mt-1 p-3 rounded-xl bg-white/90 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white">Departure</label>
                                <input
                                    type="date"
                                    value={departDate}
                                    min={today}
                                    onChange={(e) => setDepartDate(e.target.value)}
                                    className="w-full mt-1 p-3 rounded-xl  bg-white/90 outline-none "
                                />
                            </div>

                            {tripType === "roundtrip" && (
                                <div>
                                    <label className="text-sm text-white">Return</label>
                                    <input
                                        type="date"
                                        value={returnDate}
                                        min={departDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                        className="w-full mt-1 p-3 rounded-xl bg-white/90 outline-none"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="text-sm text-white">Adult</label>
                                <select className="w-full mt-1 p-3 rounded-xl bg-white/90 outline-none">
                                    <option>1 Adult</option>
                                    <option>2 Adults</option>
                                    <option>3 Adults</option>
                                    <option>4 Adults</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm text-white">Child</label>
                                <select className="w-full mt-1 p-3 rounded-xl bg-white/90 outline-none">
                                    <option>1 child</option>
                                    <option>2 childs</option>
                                    <option>3 childs</option>
                                    <option>4 childs</option>
                                </select>
                            </div>

                            <div className="md:col-span-6 mt-4 text-center">
                                <button
                                    type="submit"
                                    className="bg-red-700 hover:bg-red-800 transition text-white px-10 py-3 rounded-full font-semibold shadow-xl hover:scale-105"
                                >
                                    Search Flights
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <BookingInfoPage/>
        </>
    )
}