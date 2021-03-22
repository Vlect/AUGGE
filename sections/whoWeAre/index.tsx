import React from 'react';

interface contactUsprops{
    label?:string;
}

const ContactUs : React.FC<contactUsprops> = ({}) => {
    return(
        <div>
            <p>Section No.4</p>
            <p>Who we are</p>
        </div>
    );
}

export default ContactUs;