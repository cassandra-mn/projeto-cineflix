import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Voltar from "../Voltar";
import Header from "./../Header";
import Filmes from "./../Filmes";
import Horario from "./../Horario";
import Sessao from "./../Sessao";
import Confirmacao from "./../Confirmacao";

export default function App() {
    const [dados, setDados] = useState({});
    const [visivel, setVisivel] = useState(false);

    return (
        <>
        <BrowserRouter>
            <Voltar visivel={visivel}/>
            <Header />
            <Routes>
                <Route path="/" element={<Filmes mudarEstado={estado => setVisivel(estado)}/>} />
                <Route path="/filme/:idFilme" element={<Horario mudarEstado={estado => setVisivel(estado)} />} />
                <Route path="/sessao/:idSessao" element={<Sessao atualizar={dados => setDados({dados})} />} />
                <Route path="/sucesso" element={<Confirmacao dados={dados} />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}