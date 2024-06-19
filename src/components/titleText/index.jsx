import "./styles.css"

export default function TitleText({titulo,biografia}) {
    return (
        <div style={{padding: 20}}>
            <h1> ----- {titulo}</h1>
            <p>{biografia}</p>
        </div>
    )

}