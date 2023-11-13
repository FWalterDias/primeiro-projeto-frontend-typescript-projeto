import { Link } from "react-router-dom";
import './styles.css';
import Logo from "../../assets/logoCubos.png";

export function SignIn() {
  return (
    <div className='container container-signin'>
      <div className='signin'>
        <img src={Logo} alt="logo" />

        <form>
          <input type='text' placeholder='E-mail' />
          <input type='password' placeholder='Password' />


          <span> Não tem cadastro?<Link to="/signup">Clique aqui!</Link></span>

          <button className="btn-pink">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}