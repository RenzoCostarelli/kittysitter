import rankingStyles from '../../styles/Reviews.module.scss'

export default function RankingStars(props) {

    // console.log(props.stars)

    const stars = parseInt(props.stars)

    return(
        <div className={`${rankingStyles.stars_container}`}>

            {[...Array(stars)].map((star, index) => {    
                return(
                    
                    <span className={`${rankingStyles.star}`} key={index}>&#9733;</span>
                )
            })}
        </div>
    )

}