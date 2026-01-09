import React from 'react';
import { branding, ecosystem, strategy } from '../../img';
import BlurText from '../../components/BlurText';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const ServicesSection = () => {
  const services = [
    {
      title: "Branding",
      icon: (
        <img src={branding} alt="" />
      ),
      description: "Mucho más que el diseño de una imagen visual; es la creación estratégica de una identidad memorable que conecta a las marcas con el mercado. Nuestro enfoque parte de entender a fondo la esencia, valores y objetivos de cada cliente para construir marcas que no solo destaquen, sino que lideren y evolucionen en mercados altamente competitivos.",
      quote: "Los productos hacen cosas, las marcas significan cosas"
    },
    {
      title: "Ecosystem",
      icon: (
       <img src={ecosystem} alt="" />
      ),
      description: "El núcleo donde convergen la innovación tecnológica, el diseño digital y la estrategia comercial para crear soluciones digitales integrales y personalizadas. Aquí desarrollamos y conectamos todos los activos digitales y tradicionales de una marca, asegurando que trabajen en sinergia creando un entorno digital dirigido a metas comerciales.",
      quote: "Nos dedicamos a convertir tus objetivos en ecosistemas adaptados a la evolución comercial"
    },
    {
      title: "Strategy",
      icon: (
       <img src={strategy} alt="" />
      ),
      description: "Motor que impulsa el crecimiento y la transformación de las marcas, combinando inteligencia comercial, tácticas avanzadas y metodologías de vanguardia para diseñar estrategias integrales que escalan negocios en el mercado actual. Creamos soluciones integrales personalizadas desde objetivos comerciales enfocándonos en la rentabilidad y evolución.",
      quote: "Las mejores ideas son estratégicas, no publicitarias"
    }
  ];

  return (
//   <section className="w-full bg-gray-900 text-white py-20">

    <section className="w-auto h-full text-white py-20 px-8" style={{ backgroundColor: '#222228' }}>

    
  <div className="w-full">
    {/* Header */}
    <div className="text-center mb-16 px-8">
      <h3 className="text-2xl md:text-3xl font-light leading-tight max-w-5xl mx-auto text-gray-300">
        Integramos desarrollo de software, <span className="italic text-gray-300 literata-italic"> <BlurText
        text="branding,"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="font-bold inline"
      />{" "}</span> y <span className="literata-italic  text-gray-300 literata-italic">
           <BlurText
        text="estrategia,"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="font-bold inline"
      />{" "}
          
          </span> comercial en un solo <span className="italic text-gray-300 literata-italic"><BlurText
        text="ecosistema,"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="font-bold inline"
      />{" "}</span> pensado para escalar, automatizar y vender más; 
        potencializado por agentes de Inteligencia Artificial.
      </h3>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-3 gap-8 mb-16 px-1">
      {services.map((service, index) => (
  <div
  key={index}
  className="rounded-lg p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
   style={{
  background: 'radial-gradient(circle at center, #000000 0%, #000000 1%, #6e6d6d 100%)',
}}
>
         <div className="flex justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-110 text-4xl">
  {service.icon}
</div>
<h3 className="text-center text-4xl font-bold italic mb-4 transition-colors duration-300 group-hover:text-lime-400 literata-italic">
<BlurText
        text={service.title}
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="font-bold inline"
      />{" "}

  
</h3>
<p className="text-gray-300 font-bold leading-relaxed text-base transition-colors duration-300 group-hover:text-white">
  {service.description}
</p>
        </div>
      ))}
    </div>

    {/* Quotes */}
    <div className="grid md:grid-cols-3 gap-8 px-8">
      {services.map((service, index) => (
        <div key={index} className="text-center">
          <p className="text-gray-400 italic text-sm">
            "{service.quote}".
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default ServicesSection;