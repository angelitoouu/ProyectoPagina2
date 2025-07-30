import { FaHome } from "react-icons/fa";
import "@styles/home.css";

const Home = () => {
  return (
    <div className="home-banner">
      <p className="welcome-message">
        ¡Bienvenido a la página principal de nuestro proyecto! Explora las funcionalidades y descubre más.
      </p>
      <p className="page-description">
        Esta página es una mini version de lo que se muestra en una administracion de condominio.
      </p>
      <h1>Inicio</h1>
      <FaHome className="icon" />
    </div>
  );
};

export default Home;
