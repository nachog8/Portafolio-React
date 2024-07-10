import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="cont-exterior hero">
      <div className="cont-interior">
        <div className="cont_hero">
          <h1 className="hero_titulo">
            <span>Hola, soy Ignacio,</span>
            <br /> frontend developer
          </h1>
          <p className="hero_desc plain-text">
            Desarrollador web con experiencia en el desarrollo de aplicaciones
            web, con conocimientos en tecnologias como HTML, CSS, JavaScript,
            React, Angular, Node, MongoDB, MySQL, entre otras.
          </p>
          <div className="hero_foto">
            <img src="img/img_nacho.jpg" alt="Ignacio Guridi Foto" />
          </div>
          <a
            className="hero_button button text-decoration-none text-reset"
            href="CV Ignacio Guridi Desarrollador Web.pdf"
            download
          >
            <div>Descargar CV</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
