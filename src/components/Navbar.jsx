import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // íconos del menú, opcional: puedes usar otros
import { nextImg } from "../img";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 inset-x-5 z-50 text-white px-6 lg:px-24 pt-[10px] pb-4 flex justify-between items-center rounded-2xl"
      style={{ background: 'rgba(31, 33, 35, 0.8)' }}>
      
      <NavLink
          to="/"
          >
      <img src={nextImg} width={130} alt="Next Evolution logo" />
</NavLink>
      {/* Botón hamburguesa */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menú en escritorio */}
      <ul className="hidden md:flex space-x-12 tracking-widest text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? 'text-lime-400' : 'text-white'}`
          }>
          INICIO
        </NavLink>

        <NavLink
          to="/servicios"
          className={({ isActive }) =>
            `nav-link ${isActive ? 'text-lime-400' : 'text-white'}`
          }>
          SERVICIOS
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `nav-link ${isActive ? 'text-lime-400' : 'text-white'}`
          }>
          BLOG
        </NavLink>
      </ul>

      {/* Botón contacto escritorio */}
      <NavLink to="/contact"  
      className={({ isActive }) =>
            `nav-link ${isActive ? 'bg-lime-400 text-black rounded-md' : 'text-white'}`
          }>
      <button className="hidden md:block border border-white px-4 py-2 rounded-md text-sm tracking-widest hover:bg-lime-400 hover:text-black transition">
        CONTACTO
      </button>
      </NavLink>

      {/* Menú móvil */}
      {/* Menú móvil */}
{isOpen && (
  <div className="absolute top-full left-0 w-full text-white rounded-b-2xl py-4 px-6 mt-2  md:hidden flex flex-col gap-4 text-sm tracking-widest rounded-md" style={{ background: 'rgba(31, 33, 35, 0.8)' }}>
    <NavLink
      to="/"
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `nav-link ${isActive ? 'text-lime-400' : 'text-white'}`
      }>
      INICIO
    </NavLink>

    <NavLink
      to="/servicios"
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `nav-link ${isActive ? 'text-lime-400' : 'text-white'}`
      }>
      SERVICIOS
    </NavLink>

    <NavLink
      to="/blog"
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `nav-link ${isActive ? 'text-lime-400' : 'text-white'}`
      }>
      BLOG
    </NavLink>
 <NavLink
      to="/contact"
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `nav-link ${isActive ? 'text-lime-400' : 'text-white'}`
      }>
    <button
      onClick={() => setIsOpen(false)}
      className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition"
    >
      CONTACTO
    </button>
    </NavLink>
  </div>
)}
    </nav>
  );
};

export default Navbar;