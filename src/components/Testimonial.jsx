import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonial() {
  const data = [
    {
      name: "Sunny Gupta",
      review: "Amazing service! Booking was super easy and fast. Highly recommended.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Vishal Kumar",
      review: "Very smooth experience. Customer support was very helpful and responsive.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Amit Kumar",
      review: "Great platform! I loved the UI and booking process was seamless.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Amit Kumar",
      review: "Great platform! I loved the UI and booking process was seamless.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: false }}
          autoplay={{ delay: 2500 }}
          loop={true}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-20 h-20 mx-auto rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4">"{item.review}"</p>
                <h4 className="font-semibold text-lg">{item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}