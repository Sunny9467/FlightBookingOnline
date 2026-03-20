import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay,  Pagination } from "swiper/modules";

export default function Destinations() {

  const data = [
    { img: "/Images/d1.jpg", title: "London, UK" },
    { img: "/Images/d2.jpg", title: "Maldives" },
    { img: "/Images/d3.jpg", title: "Tokyo, Japan" },
    { img: "/Images/d4.jpg", title: "Paris, France" },
    { img: "/Images/d5.jpg", title: "Dubai" },
    { img: "/Images/d5.jpg", title: "Dubai" },
    { img: "/Images/d5.jpg", title: "Dubai" },
    { img: "/Images/d5.jpg", title: "Dubai" },
    { img: "/Images/d5.jpg", title: "Dubai" }
  ];

  return (
   <div className='p-5 sm:p-6 md:p-7 relative'>
    <h2 className="text-center mb-2 py-4 text-3xl">Popular Destination</h2>
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
                                            <img src={item.img}  className=' h-[300px] w-[450px] border transition-all duration-300 group-hover:scale-110' alt={`${item.img}`} />
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