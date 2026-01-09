import React from "react";
import Navbar from "../components/Navbar";
import BlurText from "../components/BlurText";
import SplashCursor from "../components/SplashCursor";
import Footer from "./Footer";
import { Section } from "lucide-react";
import { video, video2, video3 } from "../assets";
import ServicesSection from "./bes/ServicesSection";
import "animate.css";
import AnimatedImage from "./bes/AnimatedImage";



const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function HeroSection() {
  return (

    <>
 
 {/* <section className="min-h-screen px-4 sm:px-10 lg:px-24 pt-10 pb-20"> */}
  {/* Título */}
  {/* <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mt-20 sm:mt-32 md:mt-40">
    <BlurText
      text="Redefining destinies,"
      delay={150}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="font-bold block"
    />

    

    <span className="italic block ml-auto">designing brands.</span>
  </h1> */}

  {/* Descripción alineada a la derecha */}
  {/* <p className="text-sm sm:text-base md:text-lg text-black mt-12 sm:mt-16 md:mt-20 text-right max-w-2xl ml-auto">
    Ser la empresa líder en Marketing Digital, reconocida por su capacidad
    para transformar la presencia en internet de las marcas y ayudarles a
    alcanzar el éxito en un mundo digital en constante evolución.
  </p>
</section> */}






  <video
  className="mt-20 sm:mt-0"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  autoPlay
  loop
  muted
  playsInline
  disablePictureInPicture
  controlsList="nodownload nofullscreen noremoteplayback"
>
  <source src={video3} type="video/mp4" />
</video>





<div className="container">
  <h2 className="text-2xl md:text-3xl max-w-5xl mx-auto">Next Evolution es una consultora especializada en <span>
    <BlurText
        text="estrategia y arquitectura digital,"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="font-medium inline literata-italic"
      />{" "}
    </span>dedicada a acompañar a las marcas en su proceso de transformación y crecimiento en el entorno digital.</h2>

  <hr />
  <button className="button-green" type="button">
    <a href="/contact">
    <b>Contáctanos</b>
    </a>
    </button>
  </div>

    <div className="container text-center">  
      <h1 className="literata-variable text-4xl md:text-5xl max-w-5xl p-8"> <b>Next-level </b><span> <b><BlurText
        text="performance"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="font-medium inline literata-italic"
      />{" "}</b></span> </h1>
      <h2 className="text-2xl md:text-3xl max-w-5xl mx-auto">Los <b>tres</b> pilares que redefinen el destino digital de nuestros clientes</h2>   

  </div>
    <div className="flex justify-center">

  <AnimatedImage/>
</div>

    

  

 <ServicesSection/>
    



    
    </>
   
  );
}

export default HeroSection;