import React from 'react';
import Navbar from '../components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import HeroSection from '../pages/HeroSection';
import Home from '../pages/Home';
import { Portfolio } from '../pages/portfolio/Portfolio'
import { Services } from "../pages/servicios/Services";

import {BlogSection} from '../pages/blog/BlogSection';
import ScrollToTop from './ScrollToTop';
import ArticlePage from '../pages/blog/ArticlePage';
import Footer from '../pages/Footer';
import ContactSection from '../pages/Contact/ContactSection';
import { Download } from 'lucide-react';



export const PageRoutes = () => {
  return (
    <>
    <Navbar />
    <ScrollToTop />
            <Routes>
                <Route path="/*" element={ <Home />} />
                {/* <Route path="/portfolio" element={<Portfolio />} />    */}
                <Route path="/servicios" element={<Services/>} />      
                <Route path="/blog" element={<BlogSection />} />
                <Route path="/blog/:url" element={<ArticlePage />} />
                <Route path="/contact" element={<ContactSection />} />
               

           

                                   
                {/* <Route path="/" element={<Navigate to="/home" />}    /> */}

            </Routes>
            <Footer/>
    </>
  )
}
