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
            <p>Welcome</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
