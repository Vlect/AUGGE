import React from "react";
import styles from "./navBar.module.css";
import Image from "next/image";

interface navBarProps {}

const NavBar: React.FC<navBarProps> = ({}) => {
  return (
    <div className={styles.navBar}>
      {/* <div className={styles.navBar}>
        <div className={styles.logo}>
          <div className={styles.hexagon}>
            <span></span>
            <span></span>
          </div>
          <p>AUGGE</p>
        </div>
        <div className={styles.currentSection}>
          <span></span>
          <p>WHO WE ARE</p>
        </div>
      </div> */}
      <div
        className={styles.fondoGlobal}
      >
        <Image 
          src="/images/MainLogo2.svg"
          width={180}
          color="white"
          height={180}
        />
      </div>
    </div>
  );
};

export default NavBar;
