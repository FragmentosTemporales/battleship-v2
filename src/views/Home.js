import { Link } from "react-router-dom";
import GameScore from "../components/globalScore";

//El componente Home nos muestra los marcadores globales y la opción de iniciar la nueva partida
function Home() {
  return (
    <div className="pt-5 pb-4" style={{ height: "100vh" }}>
      <div className="container d-flex justify-content-center pt-5">
        <h1>BATTLEFIELD</h1>
      </div>
      <div className="container d-flex justify-content-center pt-5">
        <GameScore />
      </div>
      <div className="container d-flex justify-content-center pt-5">
        <button className="btn btn-dark">
          <Link to="/user" style={{textDecoration: "none"}}>Nueva Partida</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
