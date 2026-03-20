import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <section className="bg-gray-900 text-gray-300">

                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

                    <div>

                        <img
                            src="/Images/logo/flight-booking-online-logo-final-png.png"
                            alt="logo"
                            className="h-full max-h-30 object-contain text-justify"
                        />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam id omnis veritatis ab fugit ratione et qui error quia molestias?
                        </p>
                    </div>

                    <div className='mt-20'>
                        <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-md">
                            <li className="hover:text-red-700 cursor-pointer"><Link to="/">Home</Link></li>
                            <li className="hover:text-red-700 cursor-pointer"><Link to="/aboutus">About</Link></li>
                            <li className="hover:text-red-700 cursor-pointer"><Link to="/booking">Booking</Link></li>
                            <li className="hover:text-red-700 cursor-pointer"><Link to="/blog">Blogs</Link></li>
                            <li className="hover:text-red-700 cursor-pointer"><Link to="/contactus">ContactUs</Link></li>

                        </ul>
                    </div>

                     <div className='mt-20'>
                        <h3 className="text-white font-semibold mb-3">Support</h3>
                        <ul className="space-y-2 text-md">
                            <li className="hover:text-red-700 cursor-pointer"><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li className="hover:text-red-700 cursor-pointer"><Link to="/terms-condition">Terms And Conditions</Link></li>
                            <li className="hover:text-red-700 cursor-pointer"><Link to="/faq">Faq</Link></li>
                            <li className="hover:text-red-700 cursor-pointer"><Link to="/contactus">ContactUs</Link></li>

                        </ul>
                    </div>

                    {/* <div className='mt-20  '>
                        <h3 className="text-white font-semibold">Newsletter</h3>
                        <div className='flex  items-center justify-center '>
                        <input type="text" className='h-10 rounded-2xl bg-white text-black' placeholder='Subscribe Newsletter'/>
                            <button className=''>Send</button>
                        </div>
                    </div> */}


                </div>

                <div className="border-t border-gray-700 items-center">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex-col md:flex-row justify-between  text-md">

                        <p>© 2026 YourCompany. All rights reserved.</p>

                        {/* <div className="flex gap-4 md:mt-0">
                            <span className="hover:text-red-700 cursor-pointer"><Link to="/privacy">Privacy</Link></span>
                            <span className="hover:text-red-700 cursor-pointer"><Link to="/termcondition">Terms&Conditions</Link></span>
                        </div> */}

                    </div>
                </div>

            </section>
        </>
    )
}
