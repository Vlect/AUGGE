import React, { useEffect, useState } from "react";
import {useRouter} from 'next/router';
import styles from "./menu.module.css";
import Image from "next/image";
import {Slugify} from './../../utils/slugify';
import { route } from "next/dist/next-server/server/router";
import {TabImages} from './../imageSlider/SliderData';
interface menuProps {
  initialTab
}

const Menu: React.FC<menuProps> = ({children}:any, initialTab) => {

  const router = useRouter();
  const countImage = 5
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  }

  useEffect(() => {
    if(initialTab.tab){
      setActiveTab(initialTab.tab);
      console.log(initialTab)
    }
  }, [])
  
  useEffect(() => {
    router.push(`${router.pathname}?tab=${Slugify(activeTab)}`, undefined, {shallow:true})
  }, [activeTab])

  // console.log(TabImages)

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        {children.map((tab, index) => {
          const label = tab.props.label;
          return(
            <div key={label} className={`${styles.tab} ${label == activeTab ? styles.current : ""}`}>
              <div className={styles.hexagon}>
                <div className={styles.hexBottom}></div>
                <div className={styles.hexMiddle}></div>
                <div className={styles.hexTop}></div>
              </div>
              <a href="#" onClick={(e) => handleClick(e, label) }>
                <div className={styles.iconSection}>
                  <Image
                    src={TabImages[index].image}
                    height={30}
                    width={30}
                    alt="Nuestros servicios"
                  />
                </div>
              </a> 
            </div>
          );
        })}
        {/* <div className={styles.tab}>
          <div className={styles.hexagon}>
            <div className={styles.hexBottom}></div>
            <div className={styles.hexMiddle}></div>
            <div className={styles.hexTop}></div>
          </div>
          <div className={styles.iconSection}>
            <Image
              src="/images/ecomerceIcons/187.svg"
              height={30}
              width={30}
              alt="Nuestros servicios"
            />
          </div>
        </div>
        <div className={styles.tab}>
          <div className={styles.hexagon}>
            <div className={styles.hexBottom}></div>
            <div className={styles.hexMiddle}></div>
            <div className={styles.hexTop}></div>
          </div>
          <div className={styles.iconSection}>
            <Image
              src="/images/ecomerceIcons/188.svg"
              height={30}
              width={30}
              alt="Nuestros servicios"
            />
          </div>
        </div>
        <div className={styles.tab}>
          <div className={styles.hexagon}>
            <div className={styles.hexBottom}></div>
            <div className={styles.hexMiddle}></div>
            <div className={styles.hexTop}></div>
          </div>
          <div className={styles.iconSection}>
            <Image
              src="/images/ecomerceIcons/189.svg"
              height={30}
              width={30}
              alt="Nuestros servicios"
            />
          </div>
        </div>
        <div className={styles.tab}>
          <div className={styles.hexagon}>
            <div className={styles.hexBottom}></div>
            <div className={styles.hexMiddle}></div>
            <div className={styles.hexTop}></div>
          </div>
          <div className={styles.iconSection}>
            <Image
              src="/images/ecomerceIcons/190.svg"
              height={30}
              width={30}
              alt="Nuestros servicios"
            />
          </div>
        </div> */}
      </div>
      {children.map((one) => {
        if(one.props.label == activeTab){
          return(
            <div key={one.props.label}>
              {one}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;
