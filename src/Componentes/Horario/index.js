import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./style.css";

export default function Horario() {
    const { idFilme } = useParams();
    const [dias, setDias] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        requisicao.then(resposta => {
            setDias(resposta.data);
        }).catch(erro => {
            console.log(erro.response);
        });
    }, []);

    if (dias.length === undefined) {
        const { title, posterURL, days } = dias;
        return (
            <div className="Horario">
                <section>
                    <p>Selecione o horário</p>
                </section>
                <main>
                    {days.map((dia, id) => {
                        const { weekday, date, showtimes } = dia;
                        return (
                            <div key={id} className="dia-hora">
                                <p>{weekday} - {date}</p>
                                <div className="horarios">
                                    {showtimes.map((time, id) => {
                                        const { name } = time;
                                        return (
                                            <Link key={id} to="/sessao/1">
                                                <button>{name}</button>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </main>
                <footer>
                    <div className="borda">
                        <img src={posterURL} />
                    </div>
                    <p>{title}</p>
                </footer>
            </div>
        );
    }
    else {
        return <></>
    }
}