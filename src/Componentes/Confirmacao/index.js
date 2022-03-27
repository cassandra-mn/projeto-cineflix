import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./style.css";

export default function Confirmacao(route) {
    const [confirmar, setConfirmar] = useState({});
    const location = useLocation();
    // const { ids, name, cpf } = route.params;

    // useEffect(() => {
    //     const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many");

    //     requisicao.then(resposta => setConfirmar(resposta.data))
    //         .catch(erro => console.log(erro.response));
    // }, []);

    // console.log(ids);
    // console.log(name);
    // console.log(cpf);

    console.log(location.search);
    
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