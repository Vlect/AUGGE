import React from "react";
import styles from "./home.module.css";

interface homeProps {
  label?: string;
}

const Home: React.FC<homeProps> = ({}) => {
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.homeContent}>
          <div className={styles.contentText}>
            <p>Bienvenidos</p>
            <p>
              Escribimos una nueva página de la estructura del desarrollo inmobiliario, bajo nuestro concepto PAGE (Proyectos, Autenticos-Genuinos-Extraordinarios). 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
