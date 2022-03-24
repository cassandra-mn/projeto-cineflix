import { Link } from "react-router-dom";
import image1 from "./../../assets/image 3.png";
import image2 from "./../../assets/image 7.png";
import "./style.css";

export default function Filmes() {
    return (
        <div className="Filmes">
            <section>
                <p>Selecione o filme</p>
            </section>
            <main className="filmes">
                <Link to="/filme/37">
                    <div className="borda">
                        <img src={image1} />
                    </div>
                </Link>
                <Link to="/filme/37">
                    <div className="borda">
                        <img src={image2} />
                    </div>
                </Link>
                <Link to="/filme/37">
                    <div className="borda">
                        <img src={image1} />
                    </div>
                </Link>
                <Link to="/filme/37">
                    <div className="borda">
                        <img src={image2} />
                    </div>
                </Link>
                <Link to="/filme/37">
                    <div className="borda">
                        <img src={image1} />
                    </div>
                </Link>
                <Link to="/filme/37">
                    <div className="borda">
                        <img src={image2} />
                    </div>
                </Link>
                <Link to="/filme/37">
                    <div className="borda">
                        <img src={image1} />
                    </div>
                </Link>
                <Link to="/filme/37">
                    <div className="borda">
                        <img src={image2} />
                    </div>
                </Link>
            </main>
        </div>
    )
}