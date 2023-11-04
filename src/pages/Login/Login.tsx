import "./Login.css";
import Logo from '../../assets/Images/compass.uol_Negativo 1.png'
import BlueButton from "../../shared/Ui/buttonLogin/BlueButton";
import { useUser } from "../../Components/auth/UserContext";
import { useEffect } from "react";


function Login() {

  const {login} = useUser();


  return (
    <div className="container">
      <div className="content">
        <h1>Compass video</h1>
        <p>Acesse sua conta para ver <br /> nossos titulos</p>
        <BlueButton content="INICIAR SESSÃO COM TMDB" onClick={login}/>
        <h5 className="link">Não tem conta ? <a href="#">Entre como convidado</a></h5>
        <img className="logo" src={Logo} alt=""/>
       
      </div>
    </div>
  );
}

export default Login;
