import React, {useEffect} from 'react';
import Menu from '../menu';
import NavBar from './../navBar';
import NavBarFooter from './../navBarFooter';
import styles from './layout.module.css';
import ContactUs from './../../sections/contactUs';
import Home from './../../sections/home';
import OurPrjects from './../../sections/ourProjects';
import OurServices from './../../sections/ourServices';
import WhoWeAre from './../../sections/whoWeAre';
import OurProjects from './../../sections/ourProjects';
import {useRouter} from 'next/router';
import { OurServicesData, OurProjectsData } from '../imageSlider/SliderData';

interface indexProps{
    query?:any;
}

const Layout = ({query}) => {
    // useEffect(() => {
    //     console.log(<Sections />);
    //   }, [])
    return(
        <div className={styles.layout}>  
            <NavBar />
            <Menu initialTab={query}>
                <Home label="Tab 1"/>
                <OurServices slides={OurServicesData} label="Tab 2"/>
                <OurProjects slides={OurProjectsData}label="Tab 3"/>
                {/* <WhoWeAre label="Tab 4"/> */}
                <ContactUs label="Tab 5"/>
            {/* <div>
                <p>Section No.5</p>
                <p>Contact US</p>
            </div>
            <div>
                <p>Section No.4</p>
                <p>Contact US</p>
            </div>
            <div>
                <p>Section No.3</p>
                <p>Contact US</p>
            </div>
            <div>
                <p>Section No.2</p>
                <p>Contact US</p>
            </div>
            <div>
                <p>Section No.1</p>
                <p>Contact US</p>
            </div> */}
            </Menu>
            {/* <NavBarFooter/> */}
        </div>
    );
}

Layout.getInitialProps = ({query}) => {
    return {query};
}

export default Layout;