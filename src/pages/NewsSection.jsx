import React from "react";
import styles from "./Home.module.css";
import "../ui/blogs.css";
import NewsCard from "./NewsCard";

function NewsSection() {
  return (
    <section className={styles.div7}>
      <span className={styles.ltimasnoticias}>ÚLTIMAS NOTICIAS</span>
      <h2 className={styles.exploraLasltimasnoticias}>
        Explora Las últimas noticias
      </h2>
      <p className={styles.tendenciasInnovacinyEstrategiasDigitales}>
        Tendencias, Innovación y Estrategias Digitales.
      </p>
      <div className={styles.newsContainer}>
  <div className={styles.newsRow}>
    <div className={styles.newsColumn}>
      <NewsCard />
    </div>
    <div className={styles.newsColumn}>
      <NewsCard />
    </div>
    <div className={styles.newsColumn}>
      <NewsCard />
    </div>
  </div>
</div>
      <div className={styles.div13}>
        <button className={styles.leerms} aria-label="Leer más artículos">
          LEER MÁS
        </button>
        <button className={styles.leerms} aria-label="Leer más artículos">
          LEER MÁS
        </button>
        <button className={styles.leerms} aria-label="Leer más artículos">
          LEER MÁS
        </button>
      </div>
    </section>
  );
}

export default NewsSection;
