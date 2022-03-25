import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./style.css";

export default function Sessao() {
    const { idSessao } = useParams();
    const [sessoes, setSessoes] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        requisicao.then(resposta => setSessoes(resposta.data))
        .catch(erro => console.log(erro.response));
    }, []);

    if (sessoes.length === undefined) {
        console.log(sessoes);
        const {seats, movie, name, day} = sessoes;
        const {title, posterURL} = movie;
        const {weekday} = day;

        return (
            <div className="Sessao">
                <section>
                    <p>Selecione o(s) assento(s)</p>
                </section>
                <main>
                    <div className="assentos">
                    {seats.map(sessao => {
                        const {id, name, isAvailable} = sessao;
                        const css = isAvailable ? "assento" : "assento indisponivel";
                        return (
                            <div key={id} className={css}>{name}</div>
                        );     
                    })}
                    </div>
                    <div className="assentos legendas">
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
                <Link to="/sucesso">
                    <button>Reservar assento(s)</button>
                </Link>
                <footer>
                    <div className="borda">
                        <img src={posterURL} />
                    </div>
                    <div>
                        <p>{title}</p>
                        <p>{weekday} - {name}</p>
                    </div>
                </footer>
            </div>
        )
    }
    else {
        return <></>
    }
}