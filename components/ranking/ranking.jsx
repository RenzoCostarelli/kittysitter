import rankingStyles from '../../styles/Reviews.module.scss'

export default function RankingStars(props) {

    console.log(props)

    return(
        <div className={`${rankingStyles.stars_container}`}>

            {[...Array(5)].map((star) => {    
                return(
    
                    <span className={`${rankingStyles.star}`}>&#9733;</span>
                )
            })}
        </div>
    )

}