import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { mapa } from '../../img';
import BlurText from '../../components/BlurText';
import "animate.css";
import StackedCards from './StackedCards';





export const Services = () => {

  
  const servicios = [
    {
      title: "Identidad de Marca",
      description: "Desarrollo de identidades visuales y conceptuales que diferencian y posicionan marcas, integrando innovación tecnológica y automatización para potenciar su presencia y crecimiento."
    },
    {
      title: "Concepto Rector y Campañas Publicitarias",
      description: "Definición del eje conceptual y desarrollo de narrativas estratégicas que comunican la esencia y propósito de la marca, creando conexiones auténticas y diferenciadoras a través de mensajes alineados con su identidad y visión."
    },
    {
      title: "Desarrollo de Producto / Servicio",
      description: "Creación y posicionamiento de productos o servicios alineados con identidad de marca, integrando innovación y automatización para potenciar su diferenciación, valor percibido y competitividad en el mercado."
    },
     {
      title: "Diseño y Estrategia Multicanal / Omnicanal",
      description: "Desarrollo de piezas gráficas coherentes y adaptadas para todos los canales digitales y físicos, asegurando una experiencia visual unificada que refuerza la identidad de marca y maximiza su impacto en cada punto de contacto."
    },
     {
      title: "Desarrollo y Arquitecura Web",
      description: "Construcción de sitios web, e-commerce y plataformas digitales con arquitectura escalable y programación a medida, integrando tecnología avanzada y automatización para optimizar el rendimiento, la seguridad y el crecimiento sostenible de la marca en el entorno digital."
    },
    {
      title: "Diseño UI / UX",
      description: "Creación de interfaces y experiencias de usuario intuitivas, funcionales y alineadas con la identidad de marca, optimizando la interacción en plataformas digitales para maximizar la satisfacción, conversión y fidelidad del usuario. "
    },
    {
      title: "Integraciones de Software",
      description: "Conexión y sincronización de sistemas, plataformas y aplicaciones mediante soluciones personalizadas, optimizando la eficiencia operativa y la automatización de procesos para potenciar la productividad y el crecimiento digital de la marca."
    },
    {
      title: "Aplicaciones Web / Mobile",
      description: "Desarrollo de tiendas en línea y aplicaciones digitales personalizadas, optimizadas para experiencia de usuario fluida y segura, integrando tecnología avanzada y automatización para escalar operaciones, aumentar conversiones y potenciar el crecimiento en el ecosistema digital."
    },
  
    {
      title: "Arquitectura Estratégica Empresarial",
      description: "Diseño y estructuración de modelos y procesos de negocio alineados con objetivos, integrando innovación tecnológica y automatización para maximizar eficiencia, rentabilidad y crecimiento sostenible."
    },

    {
      title: "Posicionamiento Digital",
      description: "Optimización de la presencia digital para motores de búsqueda y asistentes inteligentes, integrando innovación tecnológica y automatización para aumentar la visibilidad, el tráfico calificado y la conversión, asegurando posicionamiento de marca en entornos digitales."
    },
    {
      title: "Inbound Marketing & Sales Force",
      description: "Atracción y conversión de clientes mediante contenido relevante y personalizado, integrando automatización e innovación tecnológica para nutrir prospectos, optimizar el embudo de ventas y potenciar el crecimiento sostenible."
    },
    {
      title: "Entornos B2B",
      description: "Diseño y estructuración de modelos comerciales y de marketing enfocados a empresas, integrando innovación tecnológica y automatización para maximizar eficiencia, productividad y rentabilidad, alineando procesos y estrategias con los objetivos de negocio en mercados competitivos y digitales."
    }

    
  ];
const [openStates, setOpenStates] = useState(Array(servicios.length).fill(false));

  const toggleCard = (index) => {
    setOpenStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };


  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 text-white text-base font-medium rounded-md mb-8"  style={{
  background: 'radial-gradient(circle at center, #000000 0%, #000000 1%, #6e6d6d 100%)',
}}>
            STRATEGY RE-ENGINEERING
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnología y estrategia a tú alcance.
          </p>
        </div>

       {/* // servicios Cards  */}

         <div className="hidden sm:grid md:grid-cols-3 gap-6 mb-20">
          {servicios.map((service, index) => {
          const isOpen = openStates[index];
           
            return (
              <div
                key={index}
                className={`bg-[#101010] rounded-3xl p-8 transition-all duration-500 overflow-hidden relative cursor-pointer ${
                  isOpen ? 'h-auto' : 'h-25'
                }`}
              >
                <div
                  className={`flex flex-col items-center justify-center text-center transition-all duration-500 ${
                    isOpen ? 'translate-y-[-20px]' : ''
                  }`}
                >
                  <h3 className="text-3xl font-bold text-white leading-tight literata-italic mb-4 animate__animated animate__fadeInUp">
                    {service.title}
                  </h3>
                </div>

                <p
                  className={`text-gray-200 text-lg leading-relaxed text-center transition-all duration-500 ease-in-out ${
                    isOpen ? 'opacity-100 max-h-100 pt-4' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}
                >
                  {service.description}
                </p>

                <button
                onClick={() => toggleCard(index)}
                className="absolute bottom-4 right-4 w-12 h-12 bg-[#CAC57A] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#CAC57A] "
                aria-label="Expandir contenido"
              >
                {isOpen ? (
                  <Minus className="w-6 h-6 text-gray-900" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-900" />
                )}
              </button>
              </div>
            );
          })}
        </div> 






        {/* MODIFICAR PARA MOSTRAR EN MOBILE */}
<div className="block lg:hidden mb-10">
  <StackedCards />
</div>



         
        
          <h1 className="text-3xl md:text-5xl max-w-5xl mx-auto creato-display text-center py-16 px-0">
  Nos dedicamos a convertir tus objetivos en ecosistemas adaptados a la {" "}
  <span>
    <BlurText
      text="evolución comercial"
      delay={150}
      animateBy="words"
      direction="top"
      className="font-medium inline literata-italic"
    />
  </span>
</h1>

   
        

        

        {/* Map and Timeline Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center ">
          {/* Map Card */}
         <div
  className="0 rounded-3xl p-8 h-80 relative overflow-hidden group bg-cover bg-center"
  
>


           
             <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-75"
      style={{ backgroundImage: `url(${mapa})` }}
    ></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                {/* <div className="w-16 h-16 bg-yellow-400 rounded-full mb-4 opacity-80"></div>
                <div className="w-12 h-12 bg-yellow-300 rounded-full ml-8 mb-4 opacity-60"></div>
                <div className="w-8 h-8 bg-yellow-200 rounded-full ml-16 opacity-40"></div> */}
              </div>
              <div className="text-white">
               
               <h3
       className="text-xl font-bold mb-2 creato-display "
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
      >
      Presencia en México <br />
      y Estados Unidos
      </h3>

       
              </div>
            </div>
            
          </div>

          {/* Timeline Card */}
          <div className="bg-gray-100 rounded-3xl p-8 h-80 flex flex-col justify-center">
            <div className="text-center">
              <div className="text-8xl font-bold text-gray-900 mb-4">
                2023
              </div>
              <p className="text-lg text-gray-600 font-medium creato-display">
                Creación de Next Evolution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
