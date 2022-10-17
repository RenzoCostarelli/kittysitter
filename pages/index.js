import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import styles from '../styles/Home.module.scss'

import Navbar from '../components/navbar/navbar'
import SvgButton from '../components/svg-button/svgbutton'
import TextScroller from '../components/text-scroller/text_scroller'
import GalleryScroller from '../components/gallery-scroller/gallery_scroller'
import Faq from '../components/faq/faq'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})


export default function Home() {


  gsap.registerPlugin(ScrollTrigger);

  
  let titleRef = useRef(null);
  let bigTextContainerRef = useRef(null);

  useEffect(() => {

          gsap.to('.Home_char__P9JIt', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: .1
          }, titleRef);

  }, [])



  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Kitty Sitter Rosario</title>
        <meta name="description" content="Kitty Sitter es el primer servicio profesional de cuidado exclusivo de gatitos a domicilio en Rosario. Somos un equipo de personas altamente responsables, detallistas y comprometidas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.headerMain}>
        <div className={styles.shadow}></div>
        <div className={`${styles.hero_container} ${styles.bg_primary_400}`}>
            <div className={styles.main_container}>

             

                <div className={styles.hero_box}>
                  <h1 className={`${styles.title} ${styles.text_neutral_900}`} ref={el => {titleRef = el}}>
                    <div className={`${styles.char}`}>K</div>
                    <div className={`${styles.char}`}>i</div>
                    <div className={`${styles.char}`}>t</div>
                    <div className={`${styles.char}`}>t</div>
                    <div className={`${styles.char}`}>y</div>
                    <div className={`${styles.char}`}>&nbsp;</div>
                    <div className={`${styles.char}`}>S</div>
                    <div className={`${styles.char}`}>i</div>
                    <div className={`${styles.char}`}>t</div>
                    <div className={`${styles.char}`}>t</div>
                    <div className={`${styles.char}`}>e</div>
                    <div className={`${styles.char}`}>r</div>
                  </h1>

                  <p className={`${styles.text_neutral_900}`}>
                    Kittysitter es el primer servicio profesional de cuidado exclusivo de gatitos a 
                    domicilio en Rosario. Somos un equipo de personas altamente responsables, 
                    detallistas y comprometidas.
                  </p>

                  {/* <SvgButton /> */}

         

              </div>
            </div>
        </div>
        <div className={styles.canvas_container}>
          <Spline scene="https://prod.spline.design/WH9m24EWCe3v3Il2/scene.splinecode" />
        </div>

        <div className={styles.cat_paw}>
          <div className={styles.paw_gum}></div>
          <div className={styles.paw_gum}></div>
          <div className={styles.paw_gum}></div>
          <div className={styles.paw_gum}></div>
          <div className={styles.cat_bigGum}></div>
        </div>

        
      <div className={styles.custom_divider_top}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      </header>
      <main className={styles.main}>
        <section className={`${styles.section_basic} `}>
          <div className={styles.main_container}>
            
            <h1 className={`${styles.title_absolute} ${styles.right}`}>¿Cómo funciona?</h1>
            <div className={styles.wrapper}>
            <div className={`${styles.image_container} `}>
              <Image className={`${styles.image_fullH}`} src="/images/kitty1.jpg" width={662} height={867} />
            </div>
              <div className={`${styles.info_container} ${styles.flex_basis_0 }`}>
                <p>
                  Hacemos visitas diarias de una hora. 
                  En cada visita nos ocupamos de darles de comer, 
                  cambiar el agua, limpiar las bandejas sanitarias, 
                  hacerles compañía, jugar y mimarlos. 
                  Siempre teniendo en cuenta el temperamento y respetando sus tiempos. 
                  Cuando estamos en tu casa te enviamos la ubicación en tiempo real, fotos y videos.
                </p>
              </div>
            </div>
          </div>
          
        </section>

        <section className={`${styles.section_basic}`}>
          <div className={`${styles.main_container}`}>
           
              <h1 className={`${styles.title_absolute}`}>¿Por qué a domicilio?</h1>
            <div className={`${styles.wrapper}`}>

              <div className={`${styles.info_container} ${styles.flex_basis_0 }`}>
                <p>
                Los gatitos son animales territoriales. 
                Con Kittysitter podes viajar con la tranquilidad de dejarlos en buenas manos y 
                en su propio territorio, con sus olores, 
                sus rutinas y sin someterlos al estrés que es para la gran mayoría el ser trasladados o 
                llevados a un entorno nuevo. Antes de tu partida hacemos una entrevista previa para 
                conocerlos y que nos muestres todo lo que consideres importante.
                </p>
              </div>
              <div className={`${styles.image_container} ${styles.flex_basis_0 }`}>
                <Image src="/images/kitty2.jpg" width={687} height={736} />
              </div>
            </div>
          </div>
          
        </section>

        <section className={`${styles.pb_4}`}>

            <GalleryScroller />
            <TextScroller />

        </section>


        {/* GOOGLE REVIEWS */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )

  
}
