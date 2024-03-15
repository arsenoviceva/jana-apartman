import Logo from "../../logo1.png";
import "./Navbar.css";
 

const Navbar = () => {
  return (
    <div className="row">
     

      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img className="logo" src={Logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  O nama
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#galery">
                  Galerija
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </div>
  );
};

export default Navbar;
