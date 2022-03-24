import image from "./../../assets/image 7.png";
import "./style.css";

export default function Sessao() {
    return (
        <div className="Sessao">
            <section>
                <p>Selecione o(s) assento(s)</p>
            </section>
            <main>
                <div className="assentos">
                    <div className="assento">01</div>
                    <div className="assento">02</div>
                    <div className="assento">03</div>
                    <div className="assento">04</div>
                    <div className="assento">05</div>
                    <div className="assento">06</div>
                    <div className="assento">07</div>
                    <div className="assento">08</div>
                    <div className="assento">09</div>
                    <div className="assento">10</div>
                </div>
                <div className="assentos">
                    <div className="assento">01</div>
                    <div className="assento">02</div>
                    <div className="assento">03</div>
                    <div className="assento">04</div>
                    <div className="assento">05</div>
                    <div className="assento">06</div>
                    <div className="assento">07</div>
                    <div className="assento">08</div>
                    <div className="assento">09</div>
                    <div className="assento">10</div>
                </div>
                <div className="assentos">
                    <div className="assento">01</div>
                    <div className="assento">02</div>
                    <div className="assento">03</div>
                    <div className="assento">04</div>
                    <div className="assento">05</div>
                    <div className="assento">06</div>
                    <div className="assento">07</div>
                    <div className="assento">08</div>
                    <div className="assento">09</div>
                    <div className="assento">10</div>
                </div>
                <div className="assentos">
                    <div className="assento">01</div>
                    <div className="assento">02</div>
                    <div className="assento">03</div>
                    <div className="assento">04</div>
                    <div className="assento">05</div>
                    <div className="assento">06</div>
                    <div className="assento">07</div>
                    <div className="assento">08</div>
                    <div className="assento">09</div>
                    <div className="assento">10</div>
                </div>
                <div className="assentos">
                    <div className="assento">01</div>
                    <div className="assento">02</div>
                    <div className="assento">03</div>
                    <div className="assento">04</div>
                    <div className="assento">05</div>
                    <div className="assento">06</div>
                    <div className="assento">07</div>
                    <div className="assento">08</div>
                    <div className="assento">09</div>
                    <div className="assento">10</div>
                </div>
                <div className="assentos">
                    <div className="legenda">
                        <div className="assento selecionado"></div>
                        <p>Selecionado</p>
                    </div>
                    <div className="legenda">
                        <div className="assento disponivel"></div>
                        <p>Disponível</p>
                    </div>
                    <div className="legenda">
                        <div className="assento indisponivel"></div>
                        <p>Indisponível</p>
                    </div>
                </div>
            </main>
            <aside>
                <div className="informacoes">
                    <label>Nome do comprador:</label>
                    <input type="text" placeholder="Digite seu nome..." />
                </div>
                <div className="informacoes">
                    <label>CPF do comprador:</label>
                    <input type="text" placeholder="Digite seu CPF..." />
                </div>
            </aside>
            <button>Reservar assento(s)</button>
            <footer>
                <div className="borda">
                    <img src={image} />
                </div>
                <div>
                    <p>Enola Holmes</p>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </footer>
        </div>
    );
}