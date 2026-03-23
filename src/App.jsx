import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
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
import BlogList from './components/BlogList';
import BlogDetailsPage from './pages/BlogDetailsPage';

function AppContent() {
  const location = useLocation(); // 🔥 important

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out"
    });

    setTimeout(() => {
      AOS.refresh();  // 🔥 refresh on route change
    }, 100);

  }, [location.pathname]); // 🔥 jab page change ho

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutus' element={<AboutPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/booking' element={<SearchFlights />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/blogs' element={<BlogList />} />
          <Route path='/blogs/:slug' element={<BlogDetailsPage />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}