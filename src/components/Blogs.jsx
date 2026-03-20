import React from "react";

export default function Blogs() {
  const blogs = [
    {
      title: "Top 10 Travel Destinations in 2026",
      desc: "Explore the best places to visit this year with amazing experiences.",
      img: "/Images/blog1.jpg",
      date: "March 2026",
    },
    {
      title: "How to Book Cheap Flights",
      desc: "Simple tips to save money while booking your next trip.",
      img: "/Images/blog2.jpg",
      date: "Feb 2026",
    },
    {
      title: "Travel Tips for Beginners",
      desc: "Everything you need to know before your first trip.",
      img: "/Images/blog3.jpg",
      date: "Jan 2026",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Blog
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {blogs.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
              src={item.img}
              alt=""
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{item.date}</p>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.desc}</p>

              <button className="text-red-700 font-medium hover:underline">
                Read More →
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}