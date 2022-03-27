import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import "./style.css";

export default function Filmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setFilmes(resposta.data);
        });
    }, []);

    return (
        <div className="Filmes">
            <section>
                <p>Selecione o filme</p>
            </section>
            <main className="filmes">
                {filmes.map(filme => {
                    const {id, posterURL} = filme;
                    return (
                        <Link to={`/filme/${id}`}>
                            <div key={id} className="borda">
                                <img src={posterURL} />
                            </div>
                        </Link>
                    );
                })}
            </main>
        </div>
    )
}