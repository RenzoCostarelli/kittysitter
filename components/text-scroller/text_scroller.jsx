import React, { useEffect, useLayoutEffect, useRef } from 'react'

import { gsap } from "gsap";
import stylesTextScroller from '../../styles/Home.module.scss'

export default function TextScroller() {
    
    let bigTextRef = useRef(null);

    useEffect(() => {
                  // scroll texto
                  gsap.to(bigTextRef, {
                    xPercent: -350,
                    ease: "none", // <-- IMPORTANT!
                    scrollTrigger: {
                      trigger: bigTextRef,
                      start: "left center",
                      end: "+=2000",
                      pin: false,
                      scrub: 0.5
                    }
                  });
    }, [])

    return (
        <div className={`${stylesTextScroller.wrapper_overflow_hidden} ${stylesTextScroller.line} `} >
        <div className={`${stylesTextScroller.big_text}`} ref={el => {bigTextRef = el}}>
          <span className={`${stylesTextScroller.fw_thin}`}>purr</span><span className={`${stylesTextScroller.fancy_text} ${stylesTextScroller.fs_italic}`}>miau</span><span className={`${stylesTextScroller.fw_thin}`}>purrr</span><span className={`${stylesTextScroller.fancy_text}`}>meow</span>
          <span className={`${stylesTextScroller.fs_italic}`}>meow</span><span className={`${stylesTextScroller.fancy_text}`}>miau</span><span className={`${stylesTextScroller.fs_italic}`}>purrr</span><span className={`${stylesTextScroller.fancy_text}`}>meow</span>
        </div>
      </div>
    );
    
}