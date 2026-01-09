import React from "react";

import  "../ui/blogs.css";

function NewsCard() {
  return (
    <article className="contenedor">
     <div className="pleca efecto" />
      <h3 className="ttulodelartculo">Título del artículo</h3>
      <time className="fechaarticulo">19/02/2025</time>
    </article>
  );
}

export default NewsCard;
