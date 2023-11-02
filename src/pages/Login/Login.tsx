import "./Login.css";
import BlueButton from "../../Components/BlueButton";
import Logo from '../../Images/compass.uol_Negativo 1.png'
function Login() {
  return (
    <div className="container">
      <div className="content">
        <h1>Compass video</h1>
        <p>Acesse sua conta para ver <br /> nossos titulos</p>
        <BlueButton content="INICIAR SESSÃO COM TMDB"/>
        <h5 className="link">Não tem conta ? <a href="#">Entre como convidado</a></h5>
        <img className="logo" src={Logo} alt=""/>
      </div>
    </div>
  );
}

export default Login;
