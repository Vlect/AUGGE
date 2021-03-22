import React from 'react';
import ContactUs from './contactUs';
import Home from './home';
import OurProjects from './ourProjects';
import OurServices from './ourServices';
import WhoWeAre from './whoWeAre';

interface sectionsProps{

}

const Sections:React.FC<sectionsProps> = ({}) => {
    return(
        <>
            <Home />
            <OurServices />
            <OurProjects />
            <WhoWeAre />
            <ContactUs />
        </>
    );
}

export default Sections;