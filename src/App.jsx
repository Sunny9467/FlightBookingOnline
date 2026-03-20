
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SearchFlights from './pages/BookingPage'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import FaqPage from './pages/FaqPage'
import ContactUsPage from './pages/ContactUsPage'
import Testimonial from './components/Testimonial'
import PageNotFound from './pages/PageNotFound'
import LoginPage from './pages/user/LoginPage'
import SignupPage from './pages/user/SingupPage'
import Blogs from './components/Blogs'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutus' element={<AboutPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>

        {/* User */}
        <Route path='/login'element={<LoginPage/>} />
        <Route path='/signup'element={<SignupPage/>} />



        <Route path='/booking'element={<SearchFlights/>} />
        <Route path='/destination'element={<SearchFlights/>} />
        <Route path='/testimonial'element={<Testimonial/>} />
        <Route path='/blogs' element={<Blogs/>}/>


        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
