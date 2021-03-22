import React from 'react';
import styles from './wrapper.module.css';

interface wrapperProps{

}

const Wrapper:React.FC<wrapperProps> = ({children}) => {
    return(

        <div className={styles.content}>
            {children}
        </div>

    );
}

export default Wrapper;