// import React from "react";

// const Footer = () => {
//   return (
//     <footer id="contactos" className="cont-exterior contactos">
//       <div className="cont-interior">
//         <div className="cont_contactos">
//           <span className="contactos_cta">
//             No dude en ponerse en contacto conmigo
//           </span>
//           <span className="contactos_mail">
//             <a href="mailto:nacho_g88@hotmail.com">nacho_g88@hotmail.com</a>
//           </span>
//           <div className="contatos_redes redes">
//             <a
//               href="https://www.linkedin.com/in/guridi-ignacio/"
//               target="_blank"
//             >
//               <i
//                 className="fa fa-linkedin-square icon"
//                 aria-hidden="true"
//                 alt="Linkedin"
//               ></i>
//             </a>
//             <a href="https://github.com/nachog8" target="_blank">
//               <i
//                 className="fa fa-github-square icon"
//                 aria-hidden="true"
//                 alt="GitHub"
//               ></i>
//             </a>
//             <a href="https://www.instagram.com/nachog8/" target="_blank">
//               <i
//                 className="fa-brands fa-instagram icon"
//                 aria-hidden="true"
//                 alt="Instagram"
//               ></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";

const Footer = () => {
  return (
    <footer
      id="contactos"
      className="cont-exterior contactos container-fluid py-5 text-white"
    >
      <div className="cont-interior container">
        <div className="cont_contactos row justify-content-between">
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center">
              <span className="contactos_cta mr-3">
                No dude en ponerse en contacto conmigo
              </span>
              <span className="contactos_mail">
                <a
                  href="mailto:nacho_g88@hotmail.com"
                  className="text-white text-decoration-none"
                >
                  nacho_g88@hotmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <div className="contatos_redes redes d-flex">
              <a
                href="https://www.linkedin.com/in/guridi-ignacio/"
                target="_blank"
                className="text-white mx-2"
              >
                <i
                  className="fa fa-linkedin-square icon"
                  aria-hidden="true"
                  alt="Linkedin"
                ></i>
              </a>
              <a
                href="https://github.com/nachog8"
                target="_blank"
                className="text-white mx-2"
              >
                <i
                  className="fa fa-github-square icon"
                  aria-hidden="true"
                  alt="GitHub"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/nachog8/"
                target="_blank"
                className="text-white mx-2"
              >
                <i
                  className="fa-brands fa-instagram icon"
                  aria-hidden="true"
                  alt="Instagram"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
