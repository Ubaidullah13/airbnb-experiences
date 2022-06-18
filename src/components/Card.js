import KatieZaferes from "../assets/images/KatieZaferes.png"
import star from "../assets/images/Star.png"

export default function Card(){
    return(
        <div className="card">
            <img src={KatieZaferes} alt="Katie Zaferes" className="card--img" />
            <div className="card--stats">
                <img src={star} alt="rating" className="card--star"/>
                <span>5.0</span>
                <span className="gray">&nbsp;(6) • </span>
                <span className="gray">&nbsp;USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}