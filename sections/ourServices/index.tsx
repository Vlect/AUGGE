import React,{useState} from "react";
import Image from "next/image";
import styles from "./ourServices.module.css";
import { OurServicesData } from "../../components/imageSlider/SliderData";

interface ourServices {
  label?:string;
  slides
}

const OurServices: React.FC<ourServices> = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  // console.log(currentSlide);
  return (
    <div className={styles.ourServicesSection}>
      <div className={styles.sectionInfo}>
        <h1>Nuestras Compañias</h1>
        <p>Generan AUGGE inmobiliario</p>
      </div>
      <div className={styles.cardButtons}>

        <div className={styles.leftButton} onClick={prevSlide}>
          <div className={styles.leftButtonArrow}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.hexagon}>
            <div className={styles.hexBottom}></div>
            <div className={styles.hexMiddle}></div>
            <div className={styles.hexTop}></div>
          </div>
        </div>

        <div className={styles.rightButton} onClick={nextSlide}>
          <div className={styles.rightButtonArrow}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.hexagon}>
            <div className={styles.hexBottom}></div>
            <div className={styles.hexMiddle}></div>
            <div className={styles.hexTop}></div>
          </div>
        </div>

      </div>

      <div className={styles.serviceCards}>
        {OurServicesData.map((slide, index) => {
          return(
            <div key={index} className={ `${styles.serviceCard} ${index === currentSlide ? `${styles.active}` : styles.noActive}`}>
              {/* {index === currentSlide && (
                <> */}
                  {/* <h1>{slide.title}</h1> */}
                  <a href={slide.link} target="_blank" className={styles.link}>
                    <Image
                      className={styles.image}
                      src={slide.image}
                      height={400}
                      width={400}
                      alt="logo-services"
                    />
                  </a>
                  {/* <p className={styles.serviceText}>
                    {slide.description}
                  </p> */}
                {/* </>
              )} */}
            </div>
          );
        })}
        {/* <div className={styles.hexagon}></div> */}
        {/* <div className={styles.hexagon}>
        <div className={styles.hexBottom}></div>
        <div className={styles.hexMiddle}></div>
        <div className={styles.hexTop}></div>
      </div> */}
      </div>
    </div>
  );
};

export default OurServices;
