import "./style.css";
import image1 from "./../../assets/image 3.png";
import image2 from "./../../assets/image 7.png";

export default function Filmes() {
    return (
        <>
            <nav>
                <p>CINEFLEX</p>
            </nav>
            <section>
                <p>Selecione o filme</p>
            </section>
            <main className="filmes">
                <div className="borda">
                    <img src={image1} />
                </div>
                <div className="borda">
                    <img src={image2} />
                </div>
                <div className="borda">
                    <img src={image1} />
                </div>
                <div className="borda">
                    <img src={image2} />
                </div>
                <div className="borda">
                    <img src={image1} />
                </div>
                <div className="borda">
                    <img src={image2} />
                </div>
                <div className="borda">
                    <img src={image1} />
                </div>
                <div className="borda">
                    <img src={image2} />
                </div>
            </main>
        </>
    )
}