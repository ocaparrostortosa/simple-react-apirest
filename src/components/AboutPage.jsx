import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";

// Funcion de ejemplo para obtener la ruta en la que nos encontramos
function usePageViews() {
    let location = useLocation();
    React.useEffect(() => {
     console.log(location.pathname);
    }, [location]);
  }

const AboutPage = () => {

    usePageViews();
    return (
        
        <div></div>
    )
}

export default AboutPage
