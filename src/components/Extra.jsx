// import React from "react";

// const Extra = () => {
//   return (
//     <section id="extra" className="cont-exterior extra">
//       <div className="cont-interior">
//         <h2 className="extra_titulo section-titulo">
//           Tecnologías y habilidades adicionales
//         </h2>
//         <div className="cont_extra section-content">
//           <ul className="extra_lista-item">
//             <li className="extra_item">Git</li>
//             <li className="extra_item">Npm</li>
//             <li className="extra_item">Figma / Adobe XD</li>
//             <li className="extra_item">Node</li>
//             <li className="extra_item">Java</li>
//             <li className="extra_item">MongoDB</li>
//             <li className="extra_item">Aprendizaje rápido</li>
//             <li className="extra_item">Compromiso</li>
//             <li className="extra_item">Inglés B2</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Extra;

import React from "react";

const Extra = () => {
  return (
    <section id="extra" className="cont-exterior extra container-fluid py-5">
      <div className="cont-interior container">
        <h2 className="extra_titulo section-titulo mb-4">
          Tecnologías y habilidades adicionales
        </h2>
        <div className="cont_extra section-content row justify-content-center">
          <ul className="extra_lista-item list-unstyled">
            <li className="extra_item mb-2">Git</li>
            <li className="extra_item mb-2">Npm</li>
            <li className="extra_item mb-2">Figma / Adobe XD</li>
            <li className="extra_item mb-2">Node</li>
            <li className="extra_item mb-2">Java</li>
            <li className="extra_item mb-2">MongoDB</li>
            <li className="extra_item mb-2">Aprendizaje rápido</li>
            <li className="extra_item mb-2">Compromiso</li>
            <li className="extra_item mb-2">Inglés B2</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Extra;
