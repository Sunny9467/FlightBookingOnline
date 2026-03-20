import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
  return (

    <>
      <div className="relative h-[90vh]">

        <img
          src="/Images/home page banner.jpg.jpeg"
          alt="banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white">

          <div className="mt-20">

            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              Let’s connect and solve your queries with our dedicated support team today
            </h1>

            <p className="mb-6 text-lg text-center">
              Your satisfaction is our priority. Contact us for any help, feedback, or questions and we will make sure to guide you with the best solution.
            </p>
          </div>
          <button className="mb-6 text-lg  text-center">
            <Link to='tel:918858587858' className="bg-red-700 p-4 rounded-xl hover:bg-red-800">Contact Us</Link>
          </button>
        </div>
      </div>
      <section className="bg-gray-100 py-10 px-4">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Left Side - Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6 text-center hover:shadow-xl transition">

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-600">
                Have questions? We'd love to hear from you. Reach out anytime.
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-5">

              {/* Address */}
              <div className="flex items-center justify-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-red-700 text-xl" />
                </div>
                <p className="text-gray-700">
                  <strong>Address:</strong> Delhi, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaPhoneAlt className="text-red-700 text-xl" />
                </div>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91 9876543210
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaEnvelope className="text-red-700 text-xl" />
                </div>
                <p className="text-gray-700">
                  <strong>Email:</strong> support@example.com
                </p>
              </div>

            </div>

          </div>
          {/* Right Side - Form */}
          <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">
            <label>Name*</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            />
            <label>Email*</label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            />
            <label>Phone*</label>
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            />
            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            />
            <label>Message</label>
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            ></textarea>

            <button className="w-full bg-red-700 cursor-pointer text-white py-3 rounded-lg hover:bg-red-800 transition">
              Send Message
            </button>
          </form>

        </div>
      </section>
    </>

  );
}