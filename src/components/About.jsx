import React from "react";

const About = () => {
  return (
    <main className="main-flex">
      <section id="sobre-mi" className="cont-exterior about">
        <div className="cont-interior">
          <h2 className="about_titulo section-titulo">Sobre mi</h2>
          <div className="cont_about section-content">
            <ul className="about_linea-temporal">
              <li className="about_item item">
                <h3 className="item_año">2019</h3>
                <div className="item_separador"></div>
                <p className="item_texto">
                  Me gradué de la secundaria y comencé a estudiar Ingeniería en
                  sistemas de información en la Universidad Tecnológica Nacional
                  de Villa María.
                </p>
              </li>
              <li className="about_item item">
                <h3 className="item_año">2020</h3>
                <div className="item_separador"></div>
                <p className="item_texto">
                  Realicé cursos de Diseño gráfico y comencé a trabajar como
                  Diseñador en una empresa de nutrición y salud reconocida.
                  Después de 6 meses, inicié mi propia práctica freelance.
                </p>
              </li>
              <li className="about_item item">
                <h3 className="item_año">2021</h3>
                <div className="item_separador"></div>
                <p className="item_texto">
                  Me interesé más en el sector de IT a medida que avanzaba en la
                  carrera y decidí probar la programación. Completé un curso de
                  frontend y trabajé en un proyecto propio.
                </p>
              </li>
              <li className="about_item item">
                <h3 className="item_año">2024</h3>
                <div className="item_separador"></div>
                <p className="item_texto">
                  Todo este tiempo continué aprendiendo y practicando, hasta que
                  me decidí a dedicarme de lleno al desarrollo y poder trabajar
                  en proyectos más grandes y desafiantes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
