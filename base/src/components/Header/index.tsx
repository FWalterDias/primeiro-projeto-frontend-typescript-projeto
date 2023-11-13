import "./styles.css";
import logo from "../../assets/logoCubos.png";
import voltar from "../../assets/voltar.png";
import { useNavigate } from "react-router-dom"

type mostrarBotaoVoltarProps = {
    mostarBotaovoltar?: boolean
}

export function Header({ mostarBotaovoltar }: mostrarBotaoVoltarProps) {
    const navigate = useNavigate();

    return (
        <header>
            {
                mostarBotaovoltar &&
                <img
                    src={voltar}
                    alt="img-voltar"
                    className="voltar"
                    onClick={() => navigate(-1)} />

            }
            <img src={logo} alt="logo" />
        </header>
    )
}