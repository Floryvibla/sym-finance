import { useEffect } from "react"
import "./styles.css"


function CardTitle({ title, subtitle, position, cima }) {
    
    return (
        <div className={cima ? "card-cima" : "card"}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {cima ? <h1>yeeeeees</h1> : ""}
        </div>
    )
}

export default CardTitle