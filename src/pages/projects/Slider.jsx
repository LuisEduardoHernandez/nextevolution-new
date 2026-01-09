import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { agador1, agador_logo, anahuac_logo, fisio, formacion_logo, ideas, isaca, isaca_logo, renee_logo, ula_logo, renee } from '../../img/index';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: agador1,
      title: "Agador Spartacus Development",
      subtitle: "Empresa de desarrollo inmobiliario",
      description: "Agador Spartacus se especializa en el desarrollo inmobiliario de lujo en miami de costa a costa, ofreciendo propiedades residenciales y comerciales.",
      tags: ["WEBSITE", "UI/UX", "SEO"]
    },
    {
      id: 2,
      image: isaca,
      title: "ISACA Capítulo CDMX",
      subtitle: "TI y tecnología",
      description: "Capítulo profesional de la asociación global ISACA enfocado en servir a miembros y profesionales interesados ​​en áreas como Gobernanza de TI, Auditoría, Seguridad y Gestión de Riesgos relacionados con las Tecnologías de la Información.",
      tags: ["DIGITAL ARCHITECTURE", "SALES FORCE DEVELOPMENT", "STRATEGY"]
    },
    {
      id: 3,
      image: fisio,
      title: "FI Formación Continua",
      subtitle: "Salud",
      description: "Organización que ofrece educación avanzada a través de cursos internacionales, talleres y diplomados en diversos temas relacionados con la terapia manual y la fisioterapia.",
      tags: ["ADVERTISING", "STRATEGY", "BRANDING"]
    },

    {
      id: 4,
      image: renee,
      title: "Renée",
      subtitle: "Venta de Ropa de Trabajo",
      description: "Se especializan en diseños de prendas personalizadas mediante técnicas como sublimación, bordado y vinilo textil. Ofrecen asesoramiento experto para darle un toque único y elegante a la ropa, enfocándose en diseños a medida para sus clientes.",
      tags: ["WEBSITE", "SOFTWARE", "SOFWARE INTEGRATION"]
    },
    {
      id: 5,
      image: ideas,
      title: "De ideas a resultados",
      subtitle: "Estas marcas son prueba viva de lo que hacemos.",
      description: "",
      tags: [],
      logos: [isaca_logo, agador_logo, formacion_logo, anahuac_logo, ula_logo, renee_logo ],
    }
    // {
    //   id: 4,
    //   image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    //   title: "Digital Marketing Agency",
    //   subtitle: "Growth-Driven Marketing Solutions",
    //   description: "Delivering comprehensive digital marketing strategies that amplify brand presence and accelerate business growth.",
    //   tags: ["MARKETING", "ANALYTICS", "SOCIAL"]
    // }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    
    <div className="relative w-full h-screen lg:h-[70vh] bg-gray-100 overflow-hidden">
      {/* Main Slider Container */}
      <div className="relative h-screen lg:h-[70vh] flex items-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                ? 'opacity-0 -translate-x-full' 
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="h-full flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden ">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-black flex items-center justify-center p-6 lg:p-12">
                <div className="max-w-lg text-center lg:text-left">
                  {/* Logo/Icon */}
                  {/* <div className="mb-6 flex justify-center lg:justify-start">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-white rounded"></div>
                    </div>
                  </div> */}

                  {/* Title */}
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight creato-dislay">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-lg lg:text-xl text-gray-300 mb-6 font-light">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm lg:text-base">
                    {slide.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {slide.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 border border-gray-600 text-gray-300 text-xs lg:text-sm font-medium tracking-wider hover:border-gray-600 hover:text-gray-400 transition-colors duration-300 rounded-md"
                        style={{
  background: 'radial-gradient(circle at center, #000000 0%, #000000 1%, #6e6d6d 100%)',
}}
                        >
                          <b>  {tag}</b>
                      
                    </span>
                    ))}
                  </div>


                  {slide.logos && (
  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
    {slide.logos.map((logo, index) => (
      <span
        key={index}
        className="px-4 py-2 text-xs lg:text-sm font-medium transition-colors duration-300 rounded-md"
      >
        <img
          src={logo}
          alt={`${slide.title} logo ${index}`}
          className="h-6 lg:h-16 max-w-[150px] object-contain transform hover:scale-105 transition-transform duration-700"
        />
      </span>
    ))}
  </div>
)}

                  

                  {/* CTA Button */}
                  {/* <div className="mt-8">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-medium tracking-wide transition-colors duration-300 transform hover:scale-105">
                      VIEW PROJECT
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-lime-400 text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-lime-400 text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-lime-400 w-8' 
                : 'bg-lime-800 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-gray-600 transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>

      {/* Slide Counter */}
      {/* <div className="absolute top-6 lg:top-8 right-6 lg:right-8 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm z-10">
        <span className="text-sm font-medium">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div> */}
    </div>
  );
};

export default Slider;