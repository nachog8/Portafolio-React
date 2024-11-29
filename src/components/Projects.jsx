import React, { useState } from "react";

const Projects = () => {
  const [mostrarMasProjects, setMostrarMasProjects] = useState(false);

  const toggleProjects = () => {
    setMostrarMasProjects(!mostrarMasProjects);
  };

  return (
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
                    src="img/proyectos/medlink.png"
                    alt="Medilink - Sistema de turnos médicos"
                  />
                </div>
                <div className="proyecto_text-content">
                  <h3 className="proyecto_header">
                    Medlink (Proyecto DevLights)
                  </h3>
                  <p className="proyecto_texto plain-text">
                    MedLink es un sistema de gestión integral para consultorios, centros de salud,
                    clínicas, sanatorios, hospitales y redes de salud. Nuestra empresa está 
                    enfocada en fortalecer y mejorar la gestión de las instituciones de salud.
                    Utilizamos tecnologías como Nextjs, Node, Express, MongoDB, Tailwind, TypeScript, entre otras.
                  </p>
                </div>
                <div className="proyecto_opc">
                  <a
                    className="proyecto_button proyecto_button_l button text-decoration-none text-reset"
                    href="https://medlink-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Visitar web</div>
                  </a>
                  <a
                    className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
                    href="https://github.com/nachog8/MedLink"
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
                    src="img/proyectos/dropped.png"
                    alt="Dropped - E-commerce"
                  />
                </div>
                <div className="proyecto_text-content">
                  <h3 className="proyecto_header">
                    Dropped (Proyecto DevLights)
                  </h3>
                  <p className="proyecto_texto plain-text">
                    Proyecto dedicado al desarrollo de una plataforma de e-commerce 
                    para la venta de productos de tecnología y indumentaria. Implementamos 
                    un sistemas de pago con Strip y auntenticación con Clerk. Ademas de un Admin Panel
                    para la gestión de productos y pedidos.
                    Utilizamos tecnologías como Nextjs, Node, Express, MongoDB, Tailwind, TypeScript, entre otras.
                  </p>
                </div>
                <div className="proyecto_opc">
                  <a
                    className="proyecto_button proyecto_button_l button text-decoration-none text-reset"
                    href="https://dropped-store.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Visitar web</div>
                  </a>
                  <a
                    className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
                    href="https://github.com/nachog8/dropped_store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>GitHub</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tercer Proyecto */}
          <div className="proyectos_proyecto proyecto">
            <div className="proyecto_content">
              <div className="proyecto_cont">
                <div className="proyecto_imagen">
                  <img
                    src="img/proyectos/ticktask.png"
                    alt="TickTask - Proyecto Cilsa"
                  />
                </div>
                <div className="proyecto_text-content">
                  <h3 className="proyecto_header">
                    TickTask (Proyecto Cilsa)
                  </h3>
                  <p className="proyecto_texto plain-text">
                    Proyecto dedicado al desarrollo de una plataforma de gestión de tareas con 
                    filtros de estados y importancia de las tareas. Utilice tecnologías como Nextjs,
                    Node, Express, MongoDB, Tailwind, TypeScript, entre otras.

                  </p>
                </div>
                <div className="proyecto_opc">
                  <a
                    className="proyecto_button proyecto_button_l button text-decoration-none text-reset"
                    href="https://tick-task-delta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Visitar web</div>
                  </a>
                  <a
                    className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
                    href="https://github.com/nachog8/TickTask"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>GitHub</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Cuarto Proyecto */}
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
                    className="proyecto_button proyecto_button_l button text-decoration-none text-reset"
                    href="https://conectandosaberes.villamaria.gob.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Visitar web</div>
                  </a>
                  <a
                    className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
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

          {/* Quinto Proyecto */}
          <div className="proyectos_proyecto proyecto">
            <div className="proyecto_content">
              <div className="proyecto_cont">
                <div className="proyecto_imagen">
                  <img
                    src="img/proyectos/star_wars.jpg"
                    alt="Tribute page screenshot"
                  />
                </div>
                <div className="proyecto_text-content">
                  <h3 className="proyecto_header">
                    Stars Wars (Proyecto de curso)
                  </h3>
                  <p className="proyecto_texto plain-text">
                    Este proyecto es una página web que interactúa con la API de
                    Star Wars (SWAPI) para mostrar información sobre personajes,
                    naves espaciales y películas del universo de Star Wars.
                    Utilizamos tecnologias como React, Boostrap, SWAPI.
                  </p>
                </div>
                <div className="proyecto_opc">
                  <a
                    className="proyecto_button proyecto_button_l button text-decoration-none text-reset"
                    href="https://star-wars-nachog8.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Visitar web</div>
                  </a>
                  <a
                    className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
                    href="https://github.com/nachog8/Star-Wars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>GitHub</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sexto Proyecto */}
          <div className="proyectos_proyecto proyecto">
            <div className="proyecto_content">
              <div className="proyecto_cont">
                <div className="proyecto_imagen">
                  <img
                    src="img/proyectos/daw.png"
                    alt="Vintage bikes store landing page screenshot"
                  />
                </div>
                <div className="proyecto_text-content">
                  <h3 className="proyecto_header">
                    Daw Reservas (Proyecto de universidad)
                  </h3>
                  <p className="proyecto_texto plain-text">
                    Sistemas de reservas de espacio para la Universidad
                    Tecnologica Nacional. Utilizamos tecnologias como Angular,
                    Node, Spring Boot, TypeScript, Java.
                  </p>
                </div>
                <div className="proyecto_opc">
                  <a
                    className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
                    href="https://github.com/yarmoiseev/frontend_lp_bikes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>GitHub</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Septimo Proyecto */}
          {mostrarMasProjects && (
              <><div className="proyectos_proyecto proyecto">
              <div className="proyecto_content">
                <div className="proyecto_cont">
                  <div className="proyecto_imagen">
                    <img
                      src="img/proyectos/copa_america.png"
                      alt="Regresion logistica con dataset oficial de la Copa America" />
                  </div>
                  <div className="proyecto_text-content">
                    <h3 className="proyecto_header">
                      Regresion logica (Proyecto de universidad)
                    </h3>
                    <p className="proyecto_texto plain-text">
                      Regresion logistica con dataset oficial de la Copa America,
                      para predecir los resultados de la copa. Utilizamos
                      tecnologia Jupiter Notebook, Python, Pandas, Numpy,
                      Matplotlib.
                    </p>
                  </div>
                  <div className="proyecto_opc">
                    <a
                      className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
                      href="https://github.com/nachog8/Regresion-Logistica-Copa-America"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>GitHub</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Octavo Proyecto */}
            <div className="proyectos_proyecto proyecto">
                <div className="proyecto_content">
                  <div className="proyecto_cont">
                    <div className="proyecto_imagen">
                      <img
                        src="img/proyectos/intranoc.png"
                        alt="Simple survey form screenshot" />
                    </div>
                    <div className="proyecto_text-content">
                      <h3 className="proyecto_header">
                        IntraNoc (Proyecto NoCountry)
                      </h3>
                      <p className="proyecto_texto plain-text">
                        IntraNoc es una App de Gestión de Equipo de Trabajo.
                        Utilizamos tecnologias como React, Next.js, Node,
                        TypeScript, Postgresql.
                      </p>
                    </div>
                    <div className="proyecto_opc">
                      <a
                        className="proyecto_button proyecto_button_l button text-decoration-none text-reset"
                        href="https://www.figma.com/proto/Qns32BvZ8hcT8jxzGil1H6/PROYECTO_S16?node-id=222-824&starting-point-node-id=222%3A824"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>Vista Previa</div>
                      </a>
                      <a
                        className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
                        href="https://github.com/nachog8/IntraNoc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>GitHub</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Noveno Proyecto */}
              <div className="proyectos_proyecto proyecto">
                <div className="proyecto_content">
                  <div className="proyecto_cont">
                    <div className="proyecto_imagen">
                      <img
                        src="img/proyectos/JuniorCoderBook.png"
                        alt="JuniorCoderBook - Red Social para Juniors Developers" />
                    </div>
                    <div className="proyecto_text-content">
                      <h3 className="proyecto_header">
                        JuniorCoderBook (Proyecto NoCountry)
                      </h3>
                      <p className="proyecto_texto plain-text">
                        Red social para juniors developers. Comparte tus notas con
                        otros desarrolladores y estudiantes. Utilizamos tecnologías
                        como React, Axios, Express, Node, SCSS.
                      </p>
                    </div>
                    <div className="proyecto_opc">
                      <a
                        className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
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
              
              {/* Decimo Proyecto */}
              <div className="proyectos_proyecto proyecto">
                <div className="proyecto_content">
                  <div className="proyecto_cont">
                    <div className="proyecto_imagen">
                      <img
                        src="img/proyectos/pert.png"
                        alt="Tribute page screenshot" />
                    </div>
                    <div className="proyecto_text-content">
                      <h3 className="proyecto_header">
                        PertApp (Proyecto de universidad)
                      </h3>
                      <p className="proyecto_texto plain-text">
                        Aplicacion de escritorio para resolver el algoritmo de
                        PERT. Utilizamos tecnologias como Python, Tkinter.
                      </p>
                    </div>
                    <div className="proyecto_opc">
                      <a
                        className="proyecto_button proyecto_button_r button text-decoration-none text-reset"
                        href="https://github.com/nachog8/PertApp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>GitHub</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div></>
          )}
        </div>

        {/* Botón para mostrar/ocultar nuevos proyectos */}
        <a
          className="proyecto_button proyecto_button_r button mostrar_mas_button text-decoration-none text-reset"
          onClick={toggleProjects}
          style={{ cursor: "pointer" }}
        >
          <div>{mostrarMasProjects ? "Ocultar" : "Mostrar Más"}</div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
