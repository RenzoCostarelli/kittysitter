import reviewStyles from '../../styles/Reviews.module.scss'

export default function Reviews() {
    return(
        <div className={`${reviewStyles.cards_container}`}>
            <div className={`${reviewStyles.card}`}></div>
            <div className={`${reviewStyles.card}`}></div>
            <div className={`${reviewStyles.card}`}></div>
        </div>
    )
}