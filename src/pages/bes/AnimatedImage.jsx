import React, { useRef, useEffect, useState } from 'react';
import { bes } from '../../img';
 // ajusta según tu ruta

const AnimatedImage = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Reiniciar animación al salir y volver a entrar
            setTimeout(() => setIsVisible(false), 1000); // dura lo que dure la animación
          }
        });
      },
      {
        threshold: 0.5, // cuando el 50% de la imagen sea visible
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={bes}
      alt=""
      className={`w-full max-w-[800px] h-auto ${
        isVisible ? 'animate__animated animate__jackInTheBox' : ''
      }`}
    />
  );
};

export default AnimatedImage;