import React from "react";
import styles from "./Home.module.css";


const logos = [
  "https://cdn.builder.io/api/v1/image/assets/543a555307aa48618d36ead3cfbd408c/bc87dc23b1ad8644bcb2b95cebd7c7a486459f55?placeholderIfAbsent=true",
  "https://cdn.builder.io/api/v1/image/assets/543a555307aa48618d36ead3cfbd408c/d75667b9c5422959900254f3e6ebef92c609f81f?placeholderIfAbsent=true",
  "https://cdn.builder.io/api/v1/image/assets/543a555307aa48618d36ead3cfbd408c/3243754cf0f82808333878df8be9f05eccb16593?placeholderIfAbsent=true",
  // Puedes agregar más URLs aquí
];

function ClientLogos() {
  return (
    <section className={styles.mainContainer}>
  <div className="overflow-hidden py-6 ">
      <div className="whitespace-nowrap animate-slide flex items-center gap-16 hover:[animation-play-state:paused]">
        {logos.concat(logos).map((logo, idx) => (
          <img key={idx} src={logo} alt={`logo-${idx}`} className="h-12 w-auto object-contain" />
        ))}
      </div>
    </div>
    </section>
  );
}

export default ClientLogos;
