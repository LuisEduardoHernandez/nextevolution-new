
import React, { useState } from "react";
import { instagram, isotipo } from "../img";

const Footer = () => {
  const [isNewsletterFocused, setIsNewsletterFocused] = useState(false);

  return (
    <footer className="flex flex-col justify-center items-center px-20 py-10 w-full bg-black max-md:px-6 max-md:py-12 max-md:mt-10">
  <div className="max-w-full w-[1078px]">
    <div className="flex flex-wrap md:flex-nowrap gap-10 justify-between max-md:flex-col max-md:items-start">
      {/* Logo y contacto */}
      <div className="text-white">
        <img
          src={isotipo}
          className="w-[40px]"
          alt="Company logo"
        />

        {/* <button onClick={() => window.location = 'mailto:cuentas@nextevolution.com.mx'}> */}
        <a href="mailto:cuentas@nextevolution.com.mx" >
        <p className="mt-6 not-italic">cuentas@nextevolution.com.mx</p>
        {/* </button> */}
        </a>
      </div>

      {/* Navegación */}
      <div className="flex flex-col gap-8 text-white text-base md:flex-row md:gap-16">
        <nav className="flex flex-col gap-4">
          {/* <a href="#" className="opacity-65">Portafolio</a> */}
          <a href="/blog" className="opacity-65">Blog</a>
        </nav>
        <nav className="flex flex-col gap-4">
          <a href="/servicios" className="opacity-65">Servicios</a>
          <a href="/contact" className="opacity-65">Contacto</a>
        </nav>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col gap-4 text-white w-full md:w-auto">
        <h3 className="text-lg">Suscribirse</h3>
        <div className="flex bg-white rounded-md border border-violet-950 border-opacity-20 overflow-hidden w-full">
          <input
            type="email"
            placeholder="Recibe nuestra newsletter"
            className="flex-1 px-2 py-2 text-sm text-slate-900 placeholder:text-gray-500"
            onFocus={() => setIsNewsletterFocused(true)}
            onBlur={() => setIsNewsletterFocused(false)}
            style={{
              opacity: isNewsletterFocused ? "1" : "0.65",
            }}
          />
          <button >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/829d27a14e2bf02d14ee89eac0d256af541b7c32?placeholderIfAbsent=true&apiKey=543a555307aa48618d36ead3cfbd408c"
              className="w-3 md:w-[60px]"
              alt="Enviar"
            />
          </button>
        </div>
      </div>
    </div>

    {/* Línea divisoria */}
    <hr className="mt-16 border-t border-white/20 max-md:mt-10" />

    {/* Redes sociales y derechos */}
<div className="flex flex-wrap justify-between items-center mt-10 text-white text-sm gap-4">
  <div className="flex gap-4 underline">

   

    <a
      href="https://www.instagram.com/nextevolutionmx/" target="_blank"
      className="w-8 h-8 flex items-center justify-center text-foreground hover:text-accent transition-colors"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
        <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
      </svg>
    </a>

     <a
      href="https://www.facebook.com/NextEvolutionMexico" target="_blank"
      className="w-8 h-8 flex items-center justify-center text-foreground hover:text-accent transition-colors"
    >
     <svg  className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22zM25,5c11.05756,0 20,8.94244 20,20c0,9.72979 -6.9642,17.7318 -16.15625,19.5332v-12.96875h5.29297l1.16211,-7.51953h-6.45508v-2.01758c0,-1.03747 0.18982,-1.96705 0.50977,-2.52539c0.31994,-0.55834 0.62835,-0.80078 1.38477,-0.80078h4.44727v-6.69141l-0.86719,-0.11719c-0.59979,-0.08116 -1.96916,-0.27148 -4.43945,-0.27148c-2.7031,0 -5.02334,0.73635 -6.625,2.40234c-1.60166,1.66599 -2.39258,4.14669 -2.39258,7.34961v2.67383h-5.19727v7.51953h5.19727v12.9043c-9.04433,-1.91589 -15.86133,-9.84626 -15.86133,-19.4707c0,-11.05756 8.94244,-20 20,-20z"></path></g></g>
</svg>
    </a>

    <a
      href="https://www.linkedin.com/company/nextevolutionmx/posts/?feedView=all" target="_blank"
      className="w-8 h-8 flex items-center justify-center text-foreground hover:text-accent transition-colors"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
          clipRule="evenodd"
        />
        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
      </svg>
    </a>

    <a
      href="https://x.com/nextevolutionmx?s=21&t=xo1IlGJTR_CJYl3Rf63rqw" target="_blank"
      className="w-8 h-8 flex items-center justify-center text-foreground hover:text-accent transition-colors"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z"></path>
        </g>
      </svg>
    </a>
  </div>

  <div className="text-base text-white whitespace-nowrap">
    © Next Evolution Mexico
  </div>
</div>
  </div>
</footer>
  );
};

export default Footer;
