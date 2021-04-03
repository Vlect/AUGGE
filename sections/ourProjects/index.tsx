import React, { Fragment, useState } from "react";
import Image from "next/image";
import styles from "./ourProjects.module.css";
import { OurProjectsData } from "./../../components/imageSlider/SliderData";

interface ourProjectsProps {
  label?: string;
  slides?;
}

const OurProjects: React.FC<ourProjectsProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  console.log(currentSlide)

  return (
    <div className={styles.ourProjectsSection}>
      <div className={styles.sectionInfo}>
        <h1>Our Projects</h1>
        <p>Go see all our current projects!</p>
      </div>
      <div className={styles.cardButtons}>
        <div className={styles.leftButton} onClick={prevSlide}>
          <div className={styles.leftButtonArrow}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.hexagonButton}>
            <div className={styles.hexBottomButton}></div>
            <div className={styles.hexMiddleButton}></div>
            <div className={styles.hexTopButton}></div>
          </div>
        </div>

        <div className={styles.rightButton} onClick={nextSlide}>
          <div className={styles.rightButtonArrow}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.hexagonButton}>
            <div className={styles.hexBottomButton}></div>
            <div className={styles.hexMiddleButton}></div>
            <div className={styles.hexTopButton}></div>
          </div>
        </div>
      </div>
      <div className={styles.projects}>
        {OurProjectsData.map((slide, index) => {
          return (
            <Fragment key={index} >
              <div
                className={`${styles.hexagonProject} ${
                  index === currentSlide ? `${styles.active}` : styles.noActive
                }`}
              >
                <div className={styles.hexagon}>
                  <div className={styles.hexBottom}></div>
                  <div className={styles.hexMiddle}></div>
                  <div className={styles.hexTop}></div>
                </div>
                <a
                  href={slide.link}
                  target="_blank"
                >
                  <div className={styles.hexagonImage}>
                    <Image
                      src={slide.image}
                      width={130}
                      height={130}
                      alt={slide.alt}
                    />
                  </div>
                </a>
              </div>
              <div
                className={`${styles.watchProject} ${
                  index === currentSlide ? `${styles.activeWatchProject}` : styles.noActiveWatchProject
                }`}
                >
                {index === currentSlide && (
                  <a href={`${slide.link}`} target="_blank">
                    <div className={styles.topLeft}>
                      <div></div>
                      <div></div>
                    </div>
                    <div className={styles.bottomRight}>
                      <div></div>
                      <div></div>
                    </div>
                    <button className={`${styles.watchProjectButton}`}>
                      Watch Project
                    {/* {slide.link} */}
                    </button>
                  </a>
                )}
              </div>
            </Fragment>
          );
        })}

        {/* <div className={styles.hexagonProject}>
          <div className={styles.hexagon}>
            <div className={styles.hexBottom}></div>
            <div className={styles.hexMiddle}></div>
            <div className={styles.hexTop}></div>
          </div>
          <div className={styles.hexagonImage}>
            <Image
              src="/images/ecomerceIcons/186.svg"
              width={60}
              height={60}
              alt="YOY Vitaparques"
            />
          </div>
        </div>
        <div className={styles.hexagonProject}>
          <div className={styles.hexagon}>
            <div className={styles.hexBottom}></div>
            <div className={styles.hexMiddle}></div>
            <div className={styles.hexTop}></div>
          </div>
          <div className={styles.hexagonImage}>
            <Image
              src="/images/ecomerceIcons/186.svg"
              width={60}
              height={60}
              alt="YOY Vitaparques"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurProjects;
