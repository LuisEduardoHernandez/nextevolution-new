import React from 'react';
// import { arquitectura } from '../../img';
import articles from './blogNews.json';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Datos de ejemplo para los artículos

  return (
    
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl inline-block sm:text-2xl md:text-3xl lg:text-5xl font-light leading-snug CreatoDisplay">
            Explora Las últimas noticias
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto CreatoDisplay p-3 CreatoDisplay">
            Tendencias, Innovación y Estrategias Digitales.
          </p>
        </div>

        {/* Grid de artículos que se adapta automáticamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-2xl">
          {articles.map((article, index) => (
            <article 
              key={article.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 overflow-hidden animate-fade-in "
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Imagen placeholder */}
            <div className="relative h-48 overflow-hidden">
            <div className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            
             <img src={article.image}  alt={article.title} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
             {article.category}
            </span>
        </div>
            <div className="absolute inset-0 bg-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-3 font-medium">
                  {article.date}
                </div>
                
               <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-3 group-hover:text-blue-600 transition-colors duration-300 CreatoDisplay">
            {article.title}
                </h3>

              <Link
                to={`/blog/${article.url}`}
                className="inline-flex items-center px-6 py-3 text-white rounded-xl text-sm font-semibold hover:text-lime-400 transition-all duration-300"
                style={{ backgroundColor: "#323239" }}
              >
                LEER MÁS
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              </div>

              {/* Línea decorativa animada */}
              <div className="h-1 bg-lime-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </article>
          ))}
        </div>

        {/* Botón para cargar más artículos */}
        <div className="text-center mt-12">
         <button className="inline-flex items-center px-8 py-4 bg-[#CAC57A]rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl button-green">
          <a href="/blog">
            Cargar Más Artículos
            </a>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;