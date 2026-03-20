import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">

      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold text-red-700 mb-4">404</h1>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-6">
        The page you are looking for might have been removed, renamed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}