import reviewStyles from '../../styles/Reviews.module.scss'

import RankingStars from '../ranking/ranking'


export default function Reviews() {


    // dummy data

    const reviewsList = [
        {
            id: 1,
            img: '',
            name: 'Erika Chaloupka',
            review: 'Excelente servicio, hace 3 años que las elijo para cuidar a mi gatito y siempre quedo re contenta y Andy😻 tmb! Durante los días que quedan a cargo respetan los tiempos y el humor de los michis y estan muy atentas a sus necesidades y los cuidan perfecto, al llegar al domicilio envían ubicación, fotitos y los videos que hacen que te quedes súper tranquila. La responsabilidad y el amor que ponen en el cuidado se notan y son claves. Plus te cuidan las plantitas. Gracias Orly y equipo !!',
            stars: 5,
        },
        {
            id: 2,
            img: '',
            name: 'Veronica Bartalini',
            review: 'Para nosotros fue un descubrimiento hermoso. Una vez más dejamos a Cata con Kittysitter, Orly la trata amorosamente, le hace mimos, juegan, y se llevan muy bien. Cata se siente super cómoda con ella. Sabiendo esto, la dejamos seguros. Amor, cuidado y confianza¡ Gracias totales Orly',
            stars: 5,
        },
        {
            id: 3,
            img: '',
            name: 'Victoria Pistelli',
            review: 'Estuve ausente en mi casa por una semana y en ese tiempo la Kitty Agus me mantenía al tanto de todo enviándome fotos y videos de mis dos michis y contándome cómo estaban , cómo se comportaban y si les hacía falta algo. Pude irme de viaje tranquila, sabiendo que quedaban en muy buenas manos. Fue súper responsable y cariñosa con ellos en todo momento. Esta es la primera vez que contrato este servicio y quedé muy satisfecha, no voy a dudar en volver a contratar Kittysitter en un futuro.',
            stars: 5,
        },
    ]


    return(
        <div className={`${reviewStyles.cards_container}`}>
            {reviewsList.map(({ id, name, review, stars }) => (
                <div className={`${reviewStyles.card}`} key={id}>
                    <div className={`${reviewStyles.card_header}`} >
                        <h3 className={`${reviewStyles.title}`}>{name}</h3>
                    </div>
                    <div className={`${reviewStyles.card_body}`}>
                        <RankingStars stars="5"/>
 
                        <p>{review}</p>
                    </div>
                </div>
            ))}
            {/* <div className={`${reviewStyles.card}`}>
                
            </div>
            <div className={`${reviewStyles.card}`}></div> */}
        </div>
    )
}