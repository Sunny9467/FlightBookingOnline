import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

export default function Destinations() {

    const data = [
        {
            img: "/Images/New York City.jpg.jpeg",
            title: "New York City",
            description: "New York City is a vibrant global hub known for its iconic skyline, diverse culture, and nonstop energy. From Times Square to Central Park, it offers world-class dining, shopping, and entertainment. Visitors can explore famous landmarks, museums, and Broadway shows while experiencing the fast-paced lifestyle of this unforgettable city."
        },
        {
            img: "Images/San Francisco.jpg.jpeg",
            title: "San Francisco",
            description: "San Francisco is famous for its stunning Golden Gate Bridge, rolling hills, and historic cable cars. The city blends modern culture with rich history, offering attractions like Alcatraz Island and Fisherman’s Wharf. Its diverse neighborhoods, scenic waterfront, and tech influence make it one of America’s most unique destinations."
        },
        {
            img: "/Images/Los Angeles.jpg.jpeg",
            title: "Los Angeles",
            description: "Los Angeles is the entertainment capital of the world, home to Hollywood, beautiful beaches, and sunny weather. Visitors can explore movie studios, walk along the Walk of Fame, and relax in Santa Monica. The city offers a mix of glamour, culture, and outdoor lifestyle experiences."
        },
        {
            img: "/Images/Las Vegas.jpg.jpeg",
            title: "Las Vegas",
            description: "Las Vegas is known for its vibrant nightlife, luxury casinos, and world-class entertainment. Located in the Nevada desert, it offers spectacular shows, fine dining, and themed resorts. Beyond the Strip, visitors can explore nearby natural wonders, making it a destination full of excitement and adventure."
        },
        {
            img: "/Images/Miami.jpg.jpeg",
            title: "Miami",
            description: "Miami is a lively coastal city known for its beautiful beaches, vibrant nightlife, and Latin-inspired culture. With its art deco architecture, warm climate, and crystal-clear waters, it’s a perfect destination for relaxation and fun. Visitors can enjoy beach life, cultural festivals, and delicious cuisine."
        },
        {
            img: "/Images/Grand Canyon national park.jpg.jpeg",
            title: "Grand Canyon",
            description: "The Grand Canyon is one of the world’s most breathtaking natural wonders, carved by the Colorado River over millions of years. Its vast size, layered rock formations, and stunning views attract millions of visitors. Hiking, photography, and sightseeing make it an unforgettable outdoor experience."
        },
        {
            img: "/Images/Walt Disney World.jpg.jpeg",
            title: "Walt Disney World",
            description: "Walt Disney World is a magical theme park resort in Florida, perfect for families and adventure seekers. It features multiple parks, exciting rides, and beloved Disney characters. Visitors can enjoy immersive experiences, entertainment, and unforgettable memories in this world-famous destination."
        },
        {
            img: "/Images/Yellowstone National Park.jpg.jpeg",
            title: "Yellowstone National Park",
            description: "Yellowstone National Park is America’s first national park, known for its geysers, hot springs, and diverse wildlife. It offers breathtaking landscapes, including forests, rivers, and mountains. Visitors can explore nature through hiking, camping, and wildlife watching in this stunning natural paradise."
        },
    ];

    return (
        <div className='p-5 sm:p-6 md:p-7 relative' data-aos="fade-up">
            <h2 className="text-center mb-2 py-6 font-bold text-red-700 text-3xl">Popular Destination</h2>
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
                modules={[Pagination, Autoplay]}
                className="mySwiper py-5"
            >

                {
                    data.map((item, id) => (
                        <SwiperSlide className='' key={id}>

                            <div className='' >
                                <div className='relative overflow-hidden group transition'>
                                    <img src={item.img} className=' h-full w-full cursor-pointer object-cover transition-all duration-300 group-hover:scale-110' alt={`${item.img}`} />
                                </div>
                                <div className='p-1 sm:p-2 md:p-3'>
                                    <h2 className='text-lg sm:text-xl md:text-2xl text-center'>{item.title}</h2>
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