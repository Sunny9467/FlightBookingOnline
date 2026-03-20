import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay,  Pagination } from "swiper/modules";

export default function Destinations() {

  const data = [
    { img: "/Images/New York City.jpg.jpeg", title: "New York City" },
    { img: "Images/San Francisco.jpg.jpeg", title: "San Francisco" },
    { img: "/Images/Los Angeles.jpg.jpeg", title: "Los Angeles" },
    { img: "/Images/Las Vegas.jpg.jpeg", title: "Las Vegas" },
    { img: "/Images/Miami.jpg.jpeg", title: "Miami" },
    { img: "/Images/Grand Canyon national park.jpg.jpeg", title: "Grand Canyon" },
    { img: "/Images/Walt Disney World.jpg.jpeg", title: "Walt Disney World" },
    { img: "/Images/Yellowstone National Park.jpg.jpeg", title: "Yellowstone National Park" },
  ];

  return (
   <div className='p-5 sm:p-6 md:p-7 relative'>
    <h2 className="text-center mb-2 py-6 text-3xl">Popular Destination</h2>
                    <Swiper
                        speed={300}
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{ clickable: true }}
                      
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 12 },
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                           
                        }}
                        modules={[ Pagination, Autoplay]}
                        className="mySwiper py-5"
                    >

                        {
                            data.map((item, id) => (
                                <SwiperSlide className='' key={id}>

                                    <div className='' >
                                        <div className='relative overflow-hidden group transition'>
                                            <img src={item.img}  className=' h-full w-full object-cover transition-all duration-300 group-hover:scale-110' alt={`${item.img}`} />
                                        </div>
                                        <div className='p-1 sm:p-2 md:p-3'>
                                            <h2 className='text-lg sm:text-xl md:text-2xl text-center'>{item.country}</h2>
                                            <p className='text-sm sm:text-base text-justify'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
  );
}