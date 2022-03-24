import image from "./../../assets/image 7.png";
import "./style.css";

export default function Horario() {
    return (
        <div className="Horario">
            <section>
                <p>Selecione o horário</p>
            </section>
            <main>
                <div className="dia-hora">
                    <p>Quinta-feira - 24/06/2021</p>
                    <div className="horarios">
                        <button>15:00</button>
                        <button>19:00</button>
                    </div>
                </div>
                <div className="dia-hora">
                    <p>Sexta-feira - 25/06/2021</p>
                    <div className="horarios">
                        <button>15:00</button>
                        <button>19:00</button>
                    </div>
                </div>
            </main>
            <footer>
                <div className="borda">
                    <img src={image} />
                </div>
                <p>Enola Holmes</p>
            </footer>
        </div>
    )
}