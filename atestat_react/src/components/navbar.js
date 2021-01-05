import 'bootstrap/dist/css/bootstrap.min.css';

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="/">
        Logoul companiei
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Numele site ului <span class="sr-only">(current)</span></a>
          </li>

        </ul>

        <ul>
          <a href="/creare_anunt">
           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Adauga anunt nou</button>
        </a> 
         </ul>

         <ul> 
          <a className="nav-link" href="/contul_meu">Contul meu</a>
         </ul>

      </div>
    </nav>

    
  );

  
}

export default navbar;
