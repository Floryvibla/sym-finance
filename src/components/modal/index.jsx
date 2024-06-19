import InputUser from "../input"
import "./styles.css"

export default function Modal() {
    return (
        <div className="container-modal">
            <div className="content-modal">
                <div>

                </div>
                <form>
                    <h1>Cadastrar transação</h1>
                    <div>
                        <InputUser />
                        <InputUser />
                    </div>
                </form>
            </div>
        </div>
    )
}