import { useState } from 'react';
import Swal from 'sweetalert2';
import { Send } from "lucide-react";
import { flecha, instagram } from '../../img';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    celular: '',
    ubicacion: '',
    asunto: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_ENDPOINT = 'https://nextevolution.com.mx/api/contact';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validación básica
      const requiredFields = ['nombre', 'empresa', 'email', 'asunto', 'mensaje'];
      const missingFields = requiredFields.filter(field => !formData[field].trim());
      if (missingFields.length > 0) throw new Error(`Campos requeridos: ${missingFields.join(', ')}`);

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) throw new Error('Por favor, ingresa un email válido');

      // Enviar datos
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const text = await response.text(); // Capturamos como texto
      let result;

      try {
        result = JSON.parse(text); // Intentamos parsear JSON
      } catch {
        console.error('Respuesta no es JSON válido:', text);
        result = { success: false, message: 'Error del servidor', raw: text };
      }

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: result.message || 'Mensaje enviado correctamente',
        });

        // Limpiar formulario
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          celular: '',
          ubicacion: '',
          asunto: '',
          mensaje: ''
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: result.message || 'Ocurrió un error al enviar el mensaje',
        });
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Error desconocido',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column */}
          <div className="space-y-8 sm:pt-1 lg:pt-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Let's redefine <span className="font-normal literata-italic"> <b>your strategy.</b></span>
            </h1>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a  href='https://www.instagram.com/nextevolutionmx/' target='_blank'>
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>
              </a>

              <a href="https://www.facebook.com/NextEvolutionMexico" target="_blank"
              >
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
<path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 30 39 L 30 29 L 33.625 29 C 34.129 29 34.555187 28.623047 34.617188 28.123047 L 34.992188 25.123047 C 35.028188 24.839047 34.938047 24.553891 34.748047 24.337891 C 34.559047 24.122891 34.287 24 34 24 L 30 24 L 30 20.5 C 30 19.397 30.897 18.5 32 18.5 L 34 18.5 C 34.552 18.5 35 18.053 35 17.5 L 35 14.125 C 35 13.607 34.604844 13.174906 34.089844 13.128906 C 34.030844 13.123906 32.619984 13 30.833984 13 C 26.426984 13 24 15.616187 24 20.367188 L 24 24 L 20 24 C 19.448 24 19 24.447 19 25 L 19 28 C 19 28.553 19.448 29 20 29 L 24 29 L 24 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z"></path>
</svg>
              </a>

              <a  href="https://www.linkedin.com/company/nextevolutionmx/posts/?feedView=all" target="_blank">
                <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
</svg>
              </a>

              <a href="https://x.com/nextevolutionmx?s=21&t=xo1IlGJTR_CJYl3Rf63rqw" target="_blank">
                <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 50 50">
<path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
</svg>
              </a>
            </div>

            <p className="text-lg text-foreground max-w-md">
              Estamos listos para proporcionar estrategias creativas, efectivas y personalizadas, 
              para ayudarte a conectar con tu audiencia y alcanzar tus objetivos.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="w-full">
            <div className="bg-form-background rounded-3xl p-8 sm:p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full bg-form-field text-form-text placeholder-gray-400 border-0 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-accent bg-black text-white"
                  required
                  disabled={isSubmitting}
                />

                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  className="w-full bg-form-field text-form-text placeholder-gray-400 border-0 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-accent bg-black text-white"
                  required
                  disabled={isSubmitting}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-form-field text-form-text placeholder-gray-400 border-0 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-accent bg-black text-white"
                  required
                  disabled={isSubmitting}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="celular"
                    placeholder="Celular (Opcional)"
                    value={formData.celular}
                    onChange={handleInputChange}
                    className="w-full bg-form-field text-form-text placeholder-gray-400 border-0 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-accent bg-black text-white"
                    disabled={isSubmitting}
                  />
                  <input
                    type="text"
                    name="ubicacion"
                    placeholder="Ubicación (Opcional)"
                    value={formData.ubicacion}
                    onChange={handleInputChange}
                    className="w-full bg-form-field text-form-text placeholder-gray-400 border-0 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-accent bg-black text-white"
                    disabled={isSubmitting}
                  />
                </div>

                <input
                  type="text"
                  name="asunto"
                  placeholder="Asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  className="w-full bg-form-field text-form-text placeholder-gray-400 border-0 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-accent bg-black text-white"
                  required
                  disabled={isSubmitting}
                />

                <textarea
                  name="mensaje"
                  placeholder="Mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-form-field text-form-text placeholder-gray-400 border-0 rounded-2xl px-6 py-4 text-base focus:outline-none focus:ring-2 focus:ring-accent resize-none bg-black text-white"
                  required
                  disabled={isSubmitting}
                />

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-[100px] h-[100px] rounded-full bg-lime-500 flex items-center justify-center shadow-[0px_4px_25px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    ) : (
                      <img src={flecha} alt="Enviar" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;