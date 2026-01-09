import React from "react";
import styles from "./Home.module.css";
import {proyecto1} from "../img/index"
function ProjectsSection() {
  return (
    <section className={styles.div3}>
      <div className={styles.div4}>
        <div className={styles.column}>
          <img
            src={proyecto1}
            className={styles.img8}
            alt="Agador Spartacus Development"
          />
        </div>
        <div className={styles.column2}>
          <div className={styles.div5}>
            <span className={styles.realestatedevelopment}>
              REAL ESTATE & DEVELOPMENT
            </span>
            <h3 className={styles.agadorSpartacusDevelopment}>
              Agador Spartacus Development
            </h3>
            <div className={styles.div6}>
              <span className={styles.website}>WEBSITE</span>
              <span className={styles.strategy}>STRATEGY</span>
              <span className={styles.design}>DESIGN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
