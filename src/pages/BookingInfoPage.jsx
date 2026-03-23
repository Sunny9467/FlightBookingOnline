import { FaClock, FaHeadset, FaPlaneDeparture } from "react-icons/fa";

export default function BookingInfoPage() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-10" data-aos="zoom-in-up" >
      
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl text-red-700 md:text-4xl font-bold mb-4">
          Why Book With Us?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We make flight booking simple, fast, and affordable. Our platform ensures you get the best deals,
          seamless experience, and complete support throughout your journey.
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-6 md:grid-cols-3 text-center mb-12">

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-red-300 transition">
            <FaPlaneDeparture className="text-red-700 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Best Price Guarantee</h3>
          <p className="text-gray-600 text-sm">
            We compare multiple airlines to give you the lowest fares available, ensuring maximum savings.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-red-300 transition">
            <FaClock className="text-red-700 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Easy & Fast Booking</h3>
          <p className="text-gray-600 text-sm">
            Book your flights in just a few clicks with our simple and user-friendly interface.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-red-300 transition">
            <FaHeadset className="text-red-700 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">24/7 Customer Support</h3>
          <p className="text-gray-600 text-sm">
            Our support team is always ready to assist you anytime, anywhere during your journey.
          </p>
        </div>

      </div>

      {/* Extra Info */}
      <div className="bg-white rounded-2xl shadow p-6 md:p-8 text-center">
        <h3 className="text-xl text-red-700 md:text-2xl font-semibold mb-3">
          Book Your Dream Trip Today 
        </h3>
        <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
          Whether you're planning a vacation, business trip, or family visit, we help you find the perfect flight
          at the best price. Start your journey with confidence and convenience.
        </p>

        <button className=" hover:bg-red-800 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold transition">
          Explore More Flights
        </button>
      </div>

    </section>
  );
}