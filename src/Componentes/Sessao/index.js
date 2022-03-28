import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cpf } from './../Mask';
import axios from 'axios';
import "./style.css";

export default function Sessao({ atualizar }) {
    const [sessoes, setSessoes] = useState([]);
    const [assentos, setAssentos] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const { idSessao } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        requisicao.then(resposta => setSessoes(resposta.data))
            .catch(erro => console.log(erro.response));
    }, []);

    function enviarDados(e, title, name, date) {
        e.preventDefault();
        
        atualizar({ids: assentos, name: nome, cpf: Cpf(cpf), title: title, hora: name, data: date});

        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: assentos,
            name: nome,
            cpf: Cpf(cpf)
        });

        requisicao.then(resposta => {
            navigate("/sucesso");
        }).catch(erro => console.log(erro.response));
    }

    if (sessoes.length === undefined) {
        const { seats, movie, name, day } = sessoes;
        const { title, posterURL } = movie;
        const { weekday, date } = day;

        return (
            <div className="Sessao">
                <section>
                    <p>Selecione o(s) assento(s)</p>
                </section>
                <main>
                    <div className="assentos">
                        {seats.map(sessao =>
                            <Seat seat={sessao} assentos={assentos} setAssentos={setAssentos} />
                        )}
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
                <form onSubmit={(e) => enviarDados(e, title, name, date)}>
                    <div className="informacoes">
                        <label>Nome do comprador:</label>
                        <input type="text" required placeholder="Digite seu nome..." value={nome} onChange={(event) => setNome(event.target.value)} />
                    </div>
                    <div className="informacoes">
                        <label>CPF do comprador:</label>
                        <input type="text" required placeholder="Digite seu CPF..." value={Cpf(cpf)} onChange={(event) => setCpf(event.target.value)} />
                    </div>
                    <button type="submit">Reservar assento(s)</button>
                </form>

                <footer>
                    <div className="borda">
                        <img src={posterURL} alt={title} />
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

function Seat({ seat, assentos, setAssentos }) {
    const { id, name, isAvailable } = seat;
    const [selecionado, setSelecionado] = useState(false);

    return isAvailable ? (
        <div key={id} className={selecionado ? "assento selecionado" : "assento"}
            onClick={() => {
                setSelecionado(!selecionado);
                selecionado ? setAssentos(assentos.filter(assento => assento !== name)) : setAssentos([...assentos, name]);
            }}>
            {name}
        </div>
    ) : (
        <div key={id} className="assento indisponivel"
            onClick={() => alert("Esse assento não está disponível")}>
            {name}
        </div>
    );
}