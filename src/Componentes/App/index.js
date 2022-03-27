import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from "./../Header";
import Filmes from "./../Filmes";
import Horario from "./../Horario";
import Sessao from "./../Sessao";
import Confirmacao from "./../Confirmacao";

export default function App() {
    const [dados, setDados] = useState({});

    return (
        <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/filme/:idFilme" element={<Horario />} />
                <Route path="/sessao/:idSessao" element={<Sessao atualizar={dados => setDados({dados})} />} />
                <Route path="/sucesso" element={<Confirmacao dados={dados} />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}