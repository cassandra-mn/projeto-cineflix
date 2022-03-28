import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './style.css';

export default function Voltar() {
    const navigate = useNavigate();
    
    return (
        <button className="Voltar" onClick={() => navigate(-1)}>
            <FaArrowLeft />
        </button>
    );
}