import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.png";
import "./navbar.css";

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="/cauta_anunt">
        <img src={logo} style={{ width: "40px" }} alt="Logo proiect onel" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"></li>
        </ul>

        <ul style={{ margin:5 }}>
          <a href="/cauta_anunt">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Cauta anunt
            </button>
          </a>
        </ul>

        <ul style={{ margin:0 }}>
          <a href="/creare_anunt">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Adauga anunt nou
            </button>
          </a>
        </ul>

        <ul style={{margin:0}}>
          <a className="nav-link" href="/contul_meu">
            Lista anunturi
          </a>
        </ul>
      </div>
    </nav>
  );

  
}

export default navbar;
