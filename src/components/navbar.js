import { Link } from "react-router-dom";

//Creamos el componente NavBar para que el usuario pueda navegar las páginas sin tener que refrescar
function NavBar() {
  //Se crea la función para refrescar la página y reiniciar los contadores globales
  function handleClick() {
    window.location.reload();
  }
  return (
    <div className="container-fluid d-flex py-4">
      <div className="col-4 d-flex justify-content-start">
        <button className="btn btn-dark">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Inicio{" "}
          </Link>
        </button>
      </div>
      <div className="col-4 d-flex justify-content-around">
        <button className="btn btn-light border border-danger col-4">
          <Link to="/user" style={{ textDecoration: "none", color: "red" }}>
            Jugador 1
          </Link>
        </button>
        <button className="btn btn-danger border border-white col-4">
          <Link to="/gameboard" style={{ textDecoration: "none", color: "white" }}>
            Computador
          </Link>
        </button>
      </div>
      <div className="col-4 d-flex justify-content-end">
        <button className="btn btn-dark">
          <Link onClick={handleClick} style={{ textDecoration: "none" }}>
            {" "}
            Reiniciar{" "}
          </Link>
        </button>
      </div>
    </div>
  );
}
export default NavBar;
