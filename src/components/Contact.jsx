import React from "react";

const Footer = () => {
  return (
    <footer id="contactos" className="cont-exterior contactos">
      <div className="cont-interior">
        <div className="cont_contactos">
          <span className="contactos_cta">
            No dude en ponerse en contacto conmigo
          </span>
          <span className="contactos_mail">
            <a href="mailto:nacho_g88@hotmail.com">nacho_g88@hotmail.com</a>
          </span>
          <div className="contatos_redes redes">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
