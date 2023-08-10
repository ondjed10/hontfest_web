import React, { useEffect, useMemo, useState } from "react";
import Map from "./Map";
import {IoMdCall, IoMdMail, IoMdContact} from 'react-icons/io'

function useMediaQuery(query) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);
  
    useEffect(() => {
      const onChange = () => setMatch(mediaQuery.matches);
      mediaQuery.addEventListener("change", onChange);
  
      return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);
  
    return match;
}

function useMediaQueries() {
    const md = useMediaQuery("(max-width: 800px)");
    // const lg = useMediaQuery("(min-width: 1200px)");
  
    return { md };
}


function Contact(){
    const { md } = useMediaQueries()

    const location = {
        center: {
            lat: 48.165916315391726,
            lng: 18.8846644087941,
        },
        zoom: md ? 14 : 15,
        address: 'Amfiteáter Dudince'
    }

    return (
        <section id="contact">
            <div className="sectionNameContainer">
                <h1 className="sectionName" id="contactHead">Kontakty</h1>
            </div>
            
            
            <div className="row">
                
                <div className="columnMap">
                    <Map /> 
                </div>
            </div>
            <div className="row">
                        <p className="contactText">
                                <IoMdContact/>  Dominik Belica
                        </p>
                        <p className="contactText"><IoMdCall />  +421904343305</p>
                        <p className="contactText"><IoMdMail />  dominik.belica@gmail.com</p>        
            </div>
            
        </section>
    )
}

export default Contact