import React from 'react'
import BlurText from '../components/BlurText';
import ShinyText from '../components/ShinyText';


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
export const ProjectText = () => {
  return (
    <div className="text-center mt-40 pb-40">

         
  <h1 className="text-2xl inline-block sm:text-2xl md:text-3xl lg:text-5xl font-light leading-snug">
    <span className="CreatoDisplay">
      Proyectos pioneros que constantemente <br />
      <BlurText 
        text="Redefinen,"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="font-bold inline literata-italic"
      />{" "}
      lo posible
    </span>
  </h1>
  
</div>
  )
}
