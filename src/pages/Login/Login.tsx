import styles from "./Login.module.css";
import Logo from '../../assets/Images/compass.uol_Negativo 1.png'
import BlueButton from "../../shared/Ui/buttonLogin/BlueButton";
import { useEffect } from "react";
import { useUser } from "../../Components/auth/UserContext";



function Login() {

  const {login} = useUser();


  return (
    <section className={styles.login}>
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Compass video</h1>
        <p>Acesse sua conta para ver <br /> nossos titulos</p>
        <BlueButton content="INICIAR SESSÃO COM TMDB" onClick={login}/>
        <h5 className={styles.link}>Não tem conta ? <a href="#">Entre como convidado</a></h5>
        <img className={styles.logo} src={Logo} alt=""/>
       
      </div>
    </div>
    </section>
  );
}

export default Login;
