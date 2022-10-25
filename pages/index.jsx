import React, { useEffect, useLayoutEffect, useRef, Suspense } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import styles from '../styles/Home.module.scss'
import BtnStyles from '../styles/Buttons.module.scss'

import Navbar from '../components/navbar/navbar'
import TextScroller from '../components/text-scroller/text_scroller'
import GalleryScroller from '../components/gallery-scroller/gallery_scroller'
import MainCtaButton from '../components/main-cta-button/mainCtaButton'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Reviews from '../components/reviews/reviews'

const Spline = React.lazy(() => import('@splinetool/react-spline'))


export default function Home() {


  gsap.registerPlugin(ScrollTrigger);

  
  let titleRef = useRef(null);
  let bigTextContainerRef = useRef(null);


  function onSplineLoad(splineApp){
    // console.log('cargado')
  }

  useEffect(() => {

          gsap.to('.Home_char__P9JIt', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: .1,
            onComplete(){
              // console.log('iuju');
            }
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

                  <p className={`${styles.text_neutral_100}`}>
                    Kittysitter es el primer servicio profesional de cuidado exclusivo de gatitos a 
                    domicilio en Rosario. Somos un equipo de personas altamente responsables, 
                    detallistas y comprometidas.
                  </p>

                  {/* <SvgButton /> */}

                  <MainCtaButton 
                    text={'Reservar visita'}
                    href={'#'}
                  />

         

              </div>
            </div>
        </div>
        <div className={styles.canvas_container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/WH9m24EWCe3v3Il2/scene.splinecode" onLoad={onSplineLoad}/>
          </Suspense>
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
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>

      </header>
      <main className={styles.main}>
        <section className={`${styles.section_basic} ${styles.pb_2}`}>
          <div className={`${styles.main_container}`}>
            
            <div className={styles.wrapper}>
            <div className={`${styles.image_container} ${styles.flex_basis_0 }`}>
              <Image className={`${styles.image_fullH}`} src="/images/Kitty-1.png" width={999} height={1133} />
            </div>
              <div className={`${styles.info_container} ${styles.flex_basis_0 } ${styles.right}`}>
                <h1 className={``}>¿Cómo funciona?</h1>
                <p>
                  Hacemos visitas diarias de una hora. 
                  En cada visita nos ocupamos de darles de comer, 
                  cambiar el agua, limpiar las bandejas sanitarias, 
                  hacerles compañía, jugar y mimarlos. 
                  Siempre teniendo en cuenta el temperamento y respetando sus tiempos. 
                  Cuando estamos en tu casa te enviamos la ubicación en tiempo real, fotos y videos.
                </p>

                <div className={`${styles.pattern_decoration_dots_small} ${styles.deco_circle}`}></div>
              </div>
            </div>
          </div>
        </section>
        
        
        <section className={`${styles.section_basic}`}>
          <div className={`${styles.main_container}`}>
           
            <div className={`${styles.wrapper}`}>

              <div className={`${styles.info_container} ${styles.flex_basis_0 }`}>
              <h1>¿Por qué a domicilio?</h1>
                <p>
                Los gatitos son animales territoriales. 
                Con Kittysitter podes viajar con la tranquilidad de dejarlos en buenas manos y 
                en su propio territorio, con sus olores, 
                sus rutinas y sin someterlos al estrés que es para la gran mayoría el ser trasladados o 
                llevados a un entorno nuevo. Antes de tu partida hacemos una entrevista previa para 
                conocerlos y que nos muestres todo lo que consideres importante.
                </p>
                <div className={`${styles.pattern_decoration_dots} ${styles.deco_box}`}></div>
              </div>
              <div className={`${styles.image_container} ${styles.flex_basis_0 }`}>
                <Image className={`${styles.image_fullH}`} src="/images/Kitty-2.png" width={999} height={1133} />
              </div>
            </div>
          </div>
          
        </section>
        <section className={`${styles.pb_4} ${styles.pos_relative}`}>


            <GalleryScroller />
            <TextScroller />

          <div className={`${styles.top_divider}`}>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
              </svg>
          </div>
        </section>


        <section className={`${styles.section_basic} ${styles.linear_gradient_background} ${styles.vh_100} ${styles.pb_6} ${styles.flex_align_center}`}>
            <div className={`${styles.main_container} ${styles.z_index_0}`}> 
                <div className={`${styles.pattern_reviews_section_container} ${styles.pattern_decoration_white_dots}`}></div> 
                <div className={`${styles.pattern_container_bottom_right} ${styles.pattern_decoration_white_dots}`}></div> 
            
            
                <h1 className={`${styles.section_title} ${styles.text_center} ${styles.text_neutral_900}`}>Reseñas</h1>
                <Reviews/>
                <div className={`${styles.button_container} ${styles.center_h}`}>
                  <a href="https://www.google.com/search?q=kitty+sitter&rlz=1C1UEAD_esAR980AR980&oq=kitty+sitter&aqs=chrome.0.69i59l2j0i512j0i22i30j0i22i30i457j69i60l2j69i61.1862j0j7&sourceid=chrome&ie=UTF-8#lrd=0x95b7ad7b2ccae8c7:0xa880c6f294a764a9,1,,," className={`${BtnStyles.main_cta_offset}`} target='_blank'>Todas las reseñas</a>
               

                </div>

            </div>


        </section>
        <section className={`${styles.section_basic} `}>
            <div className={`${styles.custom_divider_waves_opacity}`}>
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
              </svg>
            </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <div className={`${styles.wrapper} ${styles.flex_column}`}>
          <div className={`${styles.logo_footer}`}>
              <Image src="/images/kittysitter_logo_nav.png" width={726} height={243} />

          </div>
          <div className={`${styles.social_links} ${styles.gap_1}`}>
            <div className="icon">Facebook</div>
            <div className="icon">Instagram</div>
            <div className="icon">Wsp</div>

          </div>
            <div className="footer_cta_container">

            </div>
            <div className="footer_bottom_section">

            </div>
        </div>
        {/* LOGO */}
        {/* REDES */}
        {/* CTA FORM */}
        {/* CTA DOC */}
        {/* LINK A MI WEB */}

      </footer>
    </div>
  )

  
}
