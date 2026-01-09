import React from "react";
import styles from "./Home.module.css";
import HeroSection from "./HeroSection";
import ClientLogos from "./ClientLogos";
import ProjectsSection from "./ProjectsSection";
import NewsSection from "./NewsSection";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import SplashCursor from "../components/SplashCursor";
import { ProjectText } from "./ProjectText";
import Slider from "./projects/Slider";
import Blog from "./blog/Blog";

function Home() {
  return (
    
    <div className={styles.home}>
      <main className={styles.mainContainer}>
        {/* <Navbar/> */}
        <SplashCursor />
        <HeroSection />
        {/* <ClientLogos /> */}
        <ProjectText/>
        {/* <ProjectsSection /> */}
        <Slider/>
        <Blog/>
        {/* <NewsSection /> */}
      </main>
    
    </div>
  );
}

export default Home;
