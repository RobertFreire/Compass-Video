import "./Login.css";
import BlueButton from "../../Components/BlueButton";
function Login() {
  return (
    <div className="container">
      <div className="content">
        <h1>Compass video</h1>
        <p>Acesse sua conta para ver nossos titulos</p>
        <BlueButton content="Iniciar Sessão com TMDB"/>
      </div>
    </div>
  );
}

export default Login;
