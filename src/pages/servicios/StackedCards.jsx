import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StackedCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

    // title: "Identidad de Marca",
    //   description: "Desarrollo de identidades visuales y conceptuales que diferencian y posicionan marcas, integrando innovación tecnológica y automatización para potenciar su presencia y crecimiento."

  const cardsData = [
    {
      id: 1,
      title: "Identidad de Marca",
      //handle: "@eugenesoch",
      content: "Desarrollo de identidades visuales y conceptuales que diferencian y posicionan marcas, integrando innovación tecnológica y automatización para potenciar su presencia y crecimiento.",
      //time: "5:25 PM · Jul 12, 2024",
      //event: "FlowFest Love",
      //avatar: "ES"
    },
    {
      id: 2,
      title: "Concepto Rector y Storytelling",
      handle: "@IsaWabi_London",
      content: "Definición del eje conceptual y desarrollo de narrativas estratégicas que comunican la esencia y propósito de la marca, creando conexiones auténticas y diferenciadoras a través de mensajes alineados con su identidad y visión.",
      time: "6:42 PM · Jul 12, 2024",
      event: "Tech Conference 2024",
      avatar: "IC"
    },
    {
      id: 3,
      title: "Desarrollo de Producto y/o Servicio",
      handle: "@marcodev",
      content: "Creación y posicionamiento de productos o servicios alineados con identidad de marca, integrando innovación y automatización para potenciar su diferenciación, valor percibido y competitividad en el mercado.",
      time: "4:15 PM · Jul 12, 2024",
      event: "DevConnect Summit",
      avatar: "MR"
    },
    {
      id: 4,
      title: "Diseño Omnicanal",
      handle: "@sarahdesigns",
      content: "Desarrollo de piezas gráficas coherentes y adaptadas para todos los canales digitales y físicos, asegurando una experiencia visual unificada que refuerza la identidad de marca y maximiza su impacto en cada punto de contacto.",
      time: "3:30 PM · Jul 12, 2024",
      event: "Design Innovation Week",
      avatar: "SC"
    },
    {
      id: 5,
      title: "Desarrollo de Producto y/o Servicio",
      handle: "@alextech",
      content: "Construcción de sitios web, e-commerce y plataformas digitales con arquitectura escalable y programación a medida, integrando tecnología avanzada y automatización para optimizar el rendimiento, la seguridad y el crecimiento sostenible de la marca en el entorno digital.",
      time: "2:45 PM · Jul 12, 2024",
      event: "AI Future Forum",
      avatar: "AT"
    },
    {
      id: 6,
      title: "Diseño UI / UX",
      handle: "@lisacodes",
      content: "Creación de interfaces y experiencias de usuario intuitivas, funcionales y alineadas con la identidad de marca, optimizando la interacción en plataformas digitales para maximizar la satisfacción, conversión y fidelidad del usuario.",
      time: "1:20 PM · Jul 12, 2024",
      event: "GreenTech Summit",
      avatar: "LP"
    },

    {
      id: 7,
      title: "Integraciones de Software",
      handle: "@lisacodes",
      content: "Conexión y sincronización de sistemas, plataformas y aplicaciones mediante soluciones personalizadas, optimizando la eficiencia operativa y la automatización de procesos para potenciar la productividad y el crecimiento digital de la marca.",
      event: "GreenTech Summit",
      avatar: "LP"
    },

     {
      id: 8,
      title: "Aplicaciones Web / Mobile",
      handle: "@lisacodes",
      content: "Desarrollo de tiendas en línea y aplicaciones digitales personalizadas, optimizadas para experiencia de usuario fluida y segura, con tecnología avanzada y automatización para escalar operaciones, aumentar conversiones y potenciar el crecimiento en el ecosistema digital.",
      event: "GreenTech Summit",
      avatar: "LP"
    },
     {
      id: 9,
      title: "Arquitectura Estratégica Empresarial",
      handle: "@lisacodes",
      content: "Diseño y estructuración de modelos y procesos de negocio alineados con objetivos, integrando innovación tecnológica y automatización para maximizar eficiencia, rentabilidad y crecimiento sostenible.",
      event: "GreenTech Summit",
      avatar: "LP"
    },
     {
      id: 10,
      title: "SEO / AEO",
      handle: "@lisacodes",
      content: "Optimización de la presencia digital para motores de búsqueda y asistentes inteligentes, integrando innovación tecnológica y automatización para aumentar la visibilidad, el tráfico calificado y la conversión, asegurando posicionamiento de marca en entornos digitales.",
      event: "GreenTech Summit",
      avatar: "LP"
    },
     {
      id: 11,
      title: "Inbound Marketing",
      handle: "@lisacodes",
      content: "Atracción y conversión de clientes mediante contenido relevante y personalizado, integrando automatización e innovación tecnológica para nutrir prospectos, optimizar el embudo de ventas y potenciar el crecimiento sostenible.",
      event: "GreenTech Summit",
      avatar: "LP"
    },
    {
      id: 12,
      title: "Modelo de Negocio B2B",
      handle: "@lisacodes",
      content: "Diseño y estructuración de modelos comerciales y de marketing enfocados a empresas, integrando innovación tecnológica y automatización para maximizar eficiencia, productividad y rentabilidad, alineando procesos y estrategias con los objetivos de negocio en mercados competitivos y digitales.",
      event: "GreenTech Summit",
      avatar: "LP"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    const container = containerRef.current;

    if (!cards.length || !container) return;

    // Set initial positions - todas las cards empiezan desde abajo ocultas excepto la primera
    gsap.set(cards, {
      y: (i) => i === 0 ? 0 : 0,
    scale: (i) => i === 0 ? 1 : 0,
    zIndex: (i) => i + 1,
    rotate: (i) => i === 0 ? 0 : 0,
    
      opacity: (i) => i === 0 ? 1 : 1,
    //   position: "fixed",
    //   left: "50%",
    //   top: "50%",
      //transform: "translate(-50%, -50%)"
    });

    // Create scroll-triggered animation para cada card
    cards.forEach((card, index) => {
      if (index === 0) return; // Skip the first card

      ScrollTrigger.create({
        trigger: container,
        start: `top+=${index * 300} center`,
        end: `top+=${(index + 1) *300} center`,
        
        scrub: 1,
 onUpdate: (self) => {
  const progress = self.progress;

  const yOffset = 700 - (progress * 700) + (index * 3);


 // const yOffset = index * 3; // pequeño desplazamiento hacia abajo
  const scaleValue = 1; // disminuye ligeramente con cada tarjeta
  //const scaleValue = 1 + (progress * 0.1);
  const rotationValue = 0; // cada tarjeta se rota más que la anterior


  
  //const scaleValue = 0.95 + (progress * 0.05) - (index * 0.01);

  //const scaleValue = 0.92 + (progress * 0.1);
  //const opacityValue = (index === cards.length -1) ? progress : 1;
 // const opacityValue = progress;

 const baseRotation = 5; // rotación inicial
    const rotation = baseRotation - index;

  gsap.set(card, {

    //   y: yOffset,
    // scale: Math.max(0.90, scaleValue),
    // rotation: rotation,


    y: yOffset,
    scale: scaleValue,
    rotation: rotationValue,
    transformOrigin: "center center"
   
   // opacity: opacityValue,
   //rotation: progress * (index % 2 === 0 ? -3 : 3)  
    //rotation: progress * -3

  });

  // Ocultar tarjeta anterior al avanzar
//   if (index > 0) {
//     const prevCard = cards[index - 1];

//     if (progress >= 0.99) {
//       gsap.set(prevCard, { opacity: 0 });
//     } else if (progress < 0.5) {
//       // Mostrar de nuevo si se hace scroll hacia arriba
//       gsap.set(prevCard, { opacity: 1 });
//     }
//   }
}
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
  <div className="w-full">
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Stacked Cards Effect</h1>
          <p className="text-gray-600">Scroll down to see the cards stack animation</p>
        </div> */}
        
      <div 
  ref={containerRef}
 className="relative h-[480vh] md:h-[500vh] lg:h-[550vh] flex items-start justify-center py-6"
>
          <div className="sticky top-32 w-full max-w-lg h-[50vh]">
            {cardsData.map((card, index) => (
             <div
  key={card.id}
  ref={el => cardsRef.current[index] = el}
  className="absolute w-full h-[300px] rounded-3xl p-6 will-change-transform"
  style={{
    background: 'linear-gradient(135deg, #101010 0%, #101010 100%)'
  }}
>
                <div className="mb-4 text-center">
  <h3 className="font-bold text-white  text-3xl literata-italic ">{card.title}</h3>
  {/* <p className="text-gray-500 text-sm">{card.handle}</p> */}
</div>
                
                <p className="text-[#CAC57A] leading-relaxed mb-4 sm:text-xs md:text-lg">
                  {card.content}
                </p>
                
               
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600">Scroll back up to see the reverse animation</p>
        </div>
      </div>
    </div>
  );
};

export default StackedCards;