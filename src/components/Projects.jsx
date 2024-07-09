import React from "react";

const Projects = () => {
  return (
    <main className="main-flex">
      <section id="proyectos" className="cont-exterior proyectos">
        <div className="cont-interior">
          <h2 className="proyectos_titulo section-titulo">Proyectos</h2>
          <div className="cont_proyectos section-content">
            {/* Primer Proyecto */}
            <div className="proyectos_proyecto proyecto">
              <div className="proyecto_content">
                <div className="proyecto_cont">
                  <div className="proyecto_imagen">
                    <img
                      src="img/proyectos/conectando-saberes.png"
                      alt="Conectando Saberes' Exposicion de carreras Universitarias"
                    />
                  </div>
                  <div className="proyecto_text-content">
                    <h3 className="proyecto_header">
                      Conectando Saberes (Proyecto Municipal)
                    </h3>
                    <p className="proyecto_texto plain-text">
                      Proyecto dedicado a conectar a los vecinos y vecinas con
                      todas las propuestas que 16 instituciones académicas de
                      educación superior. Utilizamos tecnologías como HTML,
                      Angular, Node, SCSS, TypeScript, Java.
                    </p>
                  </div>
                  <div className="proyecto_opc">
                    <a
                      className="proyecto_button proyecto_button_l button"
                      href="https://conectandosaberes.villamaria.gob.ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>Visitar web</div>
                    </a>
                    <a
                      className="proyecto_button proyecto_button_r button"
                      href="https://github.com/utn-conectando-saberes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>GitHub</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Segundo Proyecto */}
            <div className="proyectos_proyecto proyecto">
              <div className="proyecto_content">
                <div className="proyecto_cont">
                  <div className="proyecto_imagen">
                    <img
                      src="img/proyectos/JuniorCoderBook.png"
                      alt="JuniorCoderBook - Red Social para Juniors Developers"
                    />
                  </div>
                  <div className="proyecto_text-content">
                    <h3 className="proyecto_header">
                      JuniorCoderBook (Proyecto NoCountry)
                    </h3>
                    <p className="proyecto_texto plain-text">
                      Red social para juniors developers. Comparte tus notas con
                      otros desarrolladores y estudiantes. Utilizamos
                      tecnologías como React, Axios, Express, Node, SCSS.
                    </p>
                  </div>
                  <div className="proyecto_opc">
                    <a
                      className="proyecto_button proyecto_button_r button"
                      href="https://github.com/nachog8/JuniorCoderBook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>GitHub</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
