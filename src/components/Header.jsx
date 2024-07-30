import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header id="header">
      <nav className="cont-exterior menu">
        <div className="cont-interior">
          <div className="cont_menu d-flex flex-wrap justify-content-between align-items-center">
            <div className="menu_logo">
              <p>
                <a className="text-decoration-none text-reset" href="/">
                  I.G.&nbsp;Portafolio
                </a>
              </p>
            </div>
            <div className="menu_redes redes">
              <a href="https://www.linkedin.com/in/guridi-ignacio/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin-square icon" aria-hidden="true" alt="Linkedin"></i>
              </a>
              <a href="https://github.com/nachog8" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square icon" aria-hidden="true" alt="GitHub"></i>
              </a>
              <a href="https://www.instagram.com/nachog8/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram icon" aria-hidden="true" alt="Instagram"></i>
              </a>
            </div>
            <div className="menu_categorias">
              <ul className="d-flex justify-content-between">
                <li>
                  <a className="text-decoration-none text-reset" href="#proyectos">Proyectos</a>
                </li>
                <li>
                  <a className="text-decoration-none text-reset" href="#tecnologias">Tecnologias</a>
                </li>
                <li>
                  <a className="text-decoration-none text-reset" href="#sobre-mi">Sobre mi</a>
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


// import React from "react";

// const Header = () => {
//   return (
//     <header id="header">
//       <nav className="cont-exterior menu">
//         <div className="cont-interior">
//           <div className="cont_menu">
//             <div className="menu_logo">
//               <p>
//                 <a className="text-decoration-none text-reset" href="/">
//                   I.G.&nbsp;Portafolio
//                 </a>
//               </p>
//             </div>
//             <div className="menu_redes redes">
//               <a
//                 href="https://www.linkedin.com/in/guridi-ignacio/"
//                 target="_blank"
//               >
//                 <i
//                   className="fa fa-linkedin-square icon"
//                   aria-hidden="true"
//                   alt="Linkedin"
//                 ></i>
//               </a>
//               <a href="https://github.com/nachog8" target="_blank">
//                 <i
//                   className="fa fa-github-square icon"
//                   aria-hidden="true"
//                   alt="GitHub"
//                 ></i>
//               </a>
//               <a href="https://www.instagram.com/nachog8/" target="_blank">
//                 <i
//                   className="fa-brands fa-instagram icon"
//                   aria-hidden="true"
//                   alt="Instagram"
//                 ></i>
//               </a>
//             </div>
//             <div className="menu_categorias">
//               <ul>
//                 <li>
//                   <a
//                     className="text-decoration-none text-reset"
//                     href="#proyectos"
//                   >
//                     Proyectos
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-decoration-none text-reset"
//                     href="#tecnologias"
//                   >
//                     Tecnologias
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-decoration-none text-reset"
//                     href="#sobre-mi"
//                   >
//                     Sobre mi
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;