import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import stylesGalleryScroller from '../../styles/Home.module.scss'

export default function GalleryScroller() {
    gsap.registerPlugin(ScrollTrigger);
    let hGalleryRef = useRef(null);

    const galleryData = [
        {
          src: `/images/gallery/1.jpg`,
        },
        {
          src: `/images/gallery/2.jpg`,
        },
        {
          src: `/images/gallery/3.jpg`,
        },
        {
          src: `/images/gallery/4.jpg`,
        },
        {
          src: `/images/gallery/5.jpg`,
        },
        {
          src: `/images/gallery/6.jpg`,
        },
        {
          src: `/images/gallery/7.jpg`,
        },
        {
          src: `/images/gallery/8.jpg`,
        },
        {
          src: `/images/gallery/9.jpg`,
        },
        {
          src: `/images/gallery/10.jpg`,
        },
        {
          src: `/images/gallery/12.jpg`,
        }
    ];
    
    let bigTextRef = useRef(null);

    useEffect(() => {
    let scrollTween = gsap.to(".Home_gallery_item__7s_23", {
        xPercent: 400,
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          trigger: hGalleryRef,
          start: "left center",
          end: "+=1000",
          pin: false,
          scrub: 0.5
        }
      });
    }, [])

    return (
        <div className={`${stylesGalleryScroller.wrapper_overflow_hidden} ${stylesGalleryScroller.scroll_gallery}`} ref={el => {hGalleryRef = el}}>
                {galleryData.map(({ src }) => (
                <div className={stylesGalleryScroller.gallery_item} key={src}>
                  <Image src={src} width={1000} height={1000} alt='kittysitter.com.ar'/>
                </div>
                ))}
        </div>
    );
}