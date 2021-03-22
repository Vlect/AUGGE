import React from 'react';
import './../styles/global.css';

interface _appProps{

}

const App = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}

export default App;