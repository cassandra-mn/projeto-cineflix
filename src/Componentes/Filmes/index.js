import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import "./style.css";

export default function Filmes({mudarEstado}) {
    const [filmes, setFilmes] = useState([]);
    mudarEstado(false);

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
                    const {id, overview, posterURL} = filme;
                    return (
                        <Link key={id} to={`/filme/${id}`}>
                            <div key={id} className="borda">
                                <img src={posterURL} alt={overview}/>
                            </div>
                        </Link>
                    );
                })}
            </main>
        </div>
    )
}