import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  from-gray-100 to-red-50 px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl text-red-700 font-bold">Create Account</h2>
         
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name*</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email*</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password*</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full p-3 outline-none hover:border-red-700"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">Confirm Password*</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox"/>
            <span>
              I agree to the{" "}
              <Link href="#" className="text-red-700">Terms & Conditions</Link>
            </span>
          </div>

          {/* Button */}
          <button className="w-full bg-red-700 cursor-pointer text-white py-3 rounded-lg hover:bg-red-800 transition">
            Sign Up
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-md text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-red-700 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}