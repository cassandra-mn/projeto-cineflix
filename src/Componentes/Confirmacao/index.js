import { Link } from "react-router-dom";
import "./style.css";

export default function Confirmacao({dados}) {
    const {ids, name, cpf, title, hora, data} = dados.dados;
    
    return (
        <div className="Confirmacao">
            <section>
                <p>Pedido feito com sucesso!</p>
            </section>
            <div className="informacoes">
                <p><strong>Filme e sessão</strong></p>
                <p>{title}</p>
                <p>{data} {hora}</p>
            </div>
            <div className="informacoes">
                <p><strong>Ingressos</strong></p>
                {ids.map(id => 
                    <p>Assento {id}</p>
                )}
            </div>
            <div className="informacoes">
                <p><strong>Comprador</strong></p>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </div>
            <Link to="/">
                <button>Voltar para home</button>
            </Link>
        </div>
    );
}