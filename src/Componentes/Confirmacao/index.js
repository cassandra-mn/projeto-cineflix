import { Link } from "react-router-dom";
import "./style.css";

export default function Confirmacao(props) {
    console.log(props);
    return (
        <div className="Confirmacao">
            <section>
                <p>Pedido feito com sucesso!</p>
            </section>
            <div className="informacoes">
                <p><strong>Filme e sessão</strong></p>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div className="informacoes">
                <p><strong>Ingressos</strong></p>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div className="informacoes">
                <p><strong>Comprador</strong></p>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <Link to="/">
                <button>Voltar para home</button>
            </Link>
        </div>
    );
}