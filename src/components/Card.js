//import KatieZaferes from "../assets/images/KatieZaferes.png"
import star from "../assets/images/Star.png"

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            { badgeText &&<div className="card--badge">{badgeText}</div>}
            <img src={require(`../assets/images/${props.coverImg}`)} alt={props.img} className="card--img" />
            <div className="card--stats">
                <img src={star} alt="rating" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">&nbsp;({props.stats.reviewCount}) • </span>
                <span className="gray">&nbsp;{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}