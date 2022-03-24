import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./../Header";
import Filmes from "./../Filmes";
import Horario from "./../Horario";
import Sessao from "./../Sessao";
import Confirmacao from "./../Confirmacao";

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/filme/:idFilme" element={<Horario />} />
                <Route path="/sessao/240" element={<Sessao />} />
                <Route path="/sucesso" element={<Confirmacao />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}