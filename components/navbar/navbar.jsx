import { useState, useEffect, useRef } from 'react';
import Navstyles from '../../styles/Navbar.module.scss'

import { gsap } from "gsap";

export default function Navbar() {
    let btnPath = useRef(null);
    
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    

    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(true); 
        } else { // if scroll up show the navbar
          setShow(false);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }

    }, [lastScrollY]);
    return (
        <div className={`${Navstyles.navBar} ${Navstyles.bg_neutral_100} ${show && Navstyles.visible}`}>
            <div className={`${Navstyles.svg_container}`}>


            </div>
            <div className={`${Navstyles.title_area}`}>
                <h1>KITTY SITTER</h1>
            </div>
            <div className={`${Navstyles.cta_area}`}>
                    <button>Agendá tu visita</button>
            </div>

        </div>
    );
}