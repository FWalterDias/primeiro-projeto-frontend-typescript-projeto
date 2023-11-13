import { Link, useNavigate } from "react-router-dom";
import './styles.css';
import Logo from "../../assets/logoCubos.png";
import api from "../../services/api";
import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function SignIn() {

  const { handleGetToken, handleAddToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function hadleForm(e: FormEvent) {
    e.preventDefault();

    try {

      if (!email || !password) throw new Error("Preencha todos os campos");

      const response = await api.post("/login", {
        email: email,
        password: password
      });

      const { accessToken } = response.data;

      handleAddToken(accessToken);
      
      navigate("/main")
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='container container-signin'>
      <div className='signin'>
        <img src={Logo} alt="logo" />

        <form onSubmit={hadleForm}>
          <input
            type='text'
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />

          <span> Não tem cadastro?<Link to="/signup">Clique aqui!</Link></span>

          <button className="btn-pink">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}