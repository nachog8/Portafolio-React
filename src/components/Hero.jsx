import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <section id="hero" className="cont-exterior hero">
      <div className="container cont-interior">
        <div className="row">
          <div className="col-md-8">
            <div className="cont_hero text-left">
              <h1 className="hero_titulo">
                <span>Hola, soy Ignacio,</span>
                <br /> frontend developer
              </h1>
              <p className="hero_desc plain-text">
                Desarrollador web con experiencia en el desarrollo de aplicaciones web, con conocimientos en tecnologías como HTML, CSS, JavaScript, React, Angular, Node, MongoDB, MySQL, entre otras.
              </p>
              <a
                className="hero_button button text-decoration-none text-reset mt-4"
                href="CV Ignacio Guridi Desarrollador Web.pdf"
                download
              >
                <div>Descargar CV</div>
              </a>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div className="hero_foto">
              <img src="img/img_nacho.jpg" alt="Ignacio Guridi Foto" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;






// import React from "react";

// const Hero = () => {
//   return (
//     <section id="hero" className="cont-exterior hero">
//       <div className="cont-interior">
//         <div className="cont_hero">
//           <h1 className="hero_titulo">
//             <span>Hola, soy Ignacio,</span>
//             <br /> frontend developer
//           </h1>
//           <p className="hero_desc plain-text">
//             Desarrollador web con experiencia en el desarrollo de aplicaciones
//             web, con conocimientos en tecnologias como HTML, CSS, JavaScript,
//             React, Angular, Node, MongoDB, MySQL, entre otras.
//           </p>
//           <div className="hero_foto">
//             <img src="img/img_nacho.jpg" alt="Ignacio Guridi Foto" />
//           </div>
//           <a
//             className="hero_button button text-decoration-none text-reset"
//             href="CV Ignacio Guridi Desarrollador Web.pdf"
//             download
//           >
//             <div>Descargar CV</div>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
