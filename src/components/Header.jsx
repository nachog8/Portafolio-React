import React from "react";

const Header = () => {
  return (
    <header id="header">
      <nav className="cont-exterior menu">
        <div className="cont-interior">
          <div className="cont_menu">
            <div className="menu_logo">
              <p>
                <a href="/">I.G.&nbsp;Portafolio</a>
              </p>
            </div>
            <div className="menu_redes redes">
              <a
                href="https://www.linkedin.com/in/guridi-ignacio/"
                target="_blank"
              >
                <i
                  className="fa fa-linkedin-square icon"
                  aria-hidden="true"
                  alt="Linkedin"
                ></i>
              </a>
              <a href="https://github.com/nachog8" target="_blank">
                <i
                  className="fa fa-github-square icon"
                  aria-hidden="true"
                  alt="GitHub"
                ></i>
              </a>
              <a href="https://www.instagram.com/nachog8/" target="_blank">
                <i
                  className="fa-brands fa-instagram icon"
                  aria-hidden="true"
                  alt="Instagram"
                ></i>
              </a>
            </div>
            <div className="menu_categorias">
              <ul>
                <li>
                  <a href="#proyectos">Proyectos</a>
                </li>
                <li>
                  <a href="#tecnologias">Tecnologias</a>
                </li>
                <li>
                  <a href="#sobre-mi">Sobre mi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
