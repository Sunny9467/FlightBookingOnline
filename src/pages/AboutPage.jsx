import React from "react";
import { FaCheckCircle, FaHeadset, FaShieldAlt } from "react-icons/fa";
import Testimonial from "../components/Testimonial";

const About = () => {
  return (
    <>
      <div className="w-full">

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
          </div>
        </div>

        {/* Content + Image */}
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 text-justify mb-4 text-lg">
              We started our journey with a simple goal — to make services easy, fast, and reliable for everyone. Our platform is built with a passion for helping people find the best solutions without confusion or delay. From the beginning, we have focused on quality, trust, and customer satisfaction. Every feature we create is designed to improve user experience and save time. Our team works continuously to innovate and bring better services to our customers. Today, we are proud to serve a growing community and remain committed to delivering excellence, building trust, and creating meaningful experiences for every user who connects with us.
            </p>
            <p className="text-gray-600 text-justify text-lg">
              We started our journey with a simple goal — to make services easy, fast, and reliable for everyone. Our platform is built with a passion for helping people find the best solutions without confusion or delay. From the beginning, we have focused on quality, trust, and customer satisfaction. Every feature we create is designed to improve user experience and save time. Our team works continuously to innovate and bring better services to our customers. Today, we are proud to serve a growing community and remain committed to delivering excellence, building trust, and creating meaningful experiences for every user who connects with us.

            </p>
          </div>

          {/* Right Image */}
          <div className="order-2 md:order-1 shadow-md hover:shadow-xl transition hover:-translate-y-2">
            <img
              src="/Images/about.jpg"
              alt="about"
              className="w-[550px] h-[560px] border"
            />
          </div>
        </div>

        {/* Full Width Section */}
        <div className="bg-gray-100 py-12 text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg text-justify">
            Our mission is to simplify everyday services by providing a fast, reliable, and user-friendly platform for everyone. We aim to connect people with the right solutions while ensuring quality, transparency, and trust at every step. Our focus is on creating meaningful experiences that save time and add value to our users’ lives. We continuously work to improve our services through innovation and customer feedback. By maintaining high standards and a customer-first approach, we strive to build long-term relationships and become a trusted name that people can rely on anytime they need support or assistance.
          </p>
        </div>

        {/* Another Full Content */}
        <div className="py-12 text-center px-4">
          <h2 className=" font-bold mb-4 text-3xl">Our Vision</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg text-justify">
            Our vision is to become a trusted and leading platform that transforms the way people access services. We aim to build a future where convenience, reliability, and innovation come together to create seamless user experiences. By continuously improving and adapting to changing needs, we strive to set new standards in quality and customer satisfaction. Our goal is to empower users with simple, efficient solutions that make their lives easier. We envision growing as a brand that people trust and recommend, while expanding our reach and delivering value to a wider community across different regions and industries.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-100 p-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us
          </h2>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Quality */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <FaCheckCircle className="text-4xl text-red-700 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Quality</h3>
              <p className="text-gray-600">We deliver top quality services.</p>
            </div>

            {/* Support */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <FaHeadset className="text-4xl text-red-700 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Support</h3>
              <p className="text-gray-600">24/7 customer support available.</p>
            </div>

            {/* Trust */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <FaShieldAlt className="text-4xl text-red-700 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Trust</h3>
              <p className="text-gray-600">Trusted by many clients.</p>
            </div>

          </div>
        </div>
      </div>

      <Testimonial />
    </>
  );
};

export default About;