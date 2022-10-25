import { useState, useEffect, useRef } from 'react';

import Image from 'next/image'
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
                {/* <h1>KITTY SITTER</h1> */}
                <div className={`${Navstyles.logo}`}>
                  <Image src="/images/kittysitter_logo_nav.png" width={726} height={243} />
                </div>
            </div>
            <div className={`${Navstyles.cta_area}`}>
                    <button className={`${Navstyles.main_button}`}>Agendá tu visita</button>
                    {/* Abrir modal */}
                    <button className={`${Navstyles.secondary_button}`}>Ser una Kitty</button>
                    {/* https://docs.google.com/forms/d/1ewLKJZfqE_XkUHjG7Uk45901o3fO94Dv_Ipx6G2uMxE/viewform?edit_requested=true */}

            </div>

        </div>
    );
}