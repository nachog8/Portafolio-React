import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Technologies = () => {
  return (
    <section id="tecnologias" className="cont-exterior tecno">
      <div className="container cont-interior">
        <h2 className="tecno_titulo section-titulo">Tecnologías</h2>
        <div className="cont_tecno section-content">
          <div className="tecno-item">
            <div className="tecno-item_desc d-flex justify-content-between">
              <h4 className="tecno-item_titulo">HTML</h4>
              <p className="tecno-item_nivel">Avanzado</p>
            </div>
            <div className="tecno-item_barra-exterior">
              <div className="tecno-item_barra-interior" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="tecno-item">
            <div className="tecno-item_desc d-flex justify-content-between">
              <h4 className="tecno-item_titulo">CSS, Sass & Bootstrap</h4>
              <p className="tecno-item_nivel">Avanzado</p>
            </div>
            <div className="tecno-item_barra-exterior">
              <div className="tecno-item_barra-interior" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="tecno-item">
            <div className="tecno-item_desc d-flex justify-content-between">
              <h4 className="tecno-item_titulo">JavaScript, TypeScript</h4>
              <p className="tecno-item_nivel">Intermedio</p>
            </div>
            <div className="tecno-item_barra-exterior">
              <div className="tecno-item_barra-interior" style={{ width: "50%" }}></div>
            </div>
          </div>
          <div className="tecno-item">
            <div className="tecno-item_desc d-flex justify-content-between">
              <h4 className="tecno-item_titulo">React, Next.js, Angular</h4>
              <p className="tecno-item_nivel">Principiante</p>
            </div>
            <div className="tecno-item_barra-exterior">
              <div className="tecno-item_barra-interior" style={{ width: "25%" }}></div>
            </div>
          </div>
          <div className="tecno-item">
            <div className="tecno-item_desc d-flex justify-content-between">
              <h4 className="tecno-item_titulo">Tailwind</h4>
              <p className="tecno-item_nivel">Principiante</p>
            </div>
            <div className="tecno-item_barra-exterior">
              <div className="tecno-item_barra-interior" style={{ width: "25%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;


// import React from "react";

// const Technologies = () => {
//   return (
//     <section id="tecnologias" className="cont-exterior tecno">
//       <div className="cont-interior">
//         <h2 className="tecno_titulo section-titulo">Tecnologias</h2>
//         <div className="cont_tecno section-content">
//           <div className="tecno_tecno-item tecno-item">
//             <div className="tecno-item_desc">
//               <h4 className="tecno-item_titulo">HTML</h4>
//               <p className="tecno-item_nivel">Avanzado</p>
//             </div>
//             <div className="tecno-item_barra-exterior">
//               <div
//                 className="tecno-item_barra-interior"
//                 style={{ width: "75%" }}
//               ></div>
//             </div>
//           </div>
//           <div className="tecno_tecno-item tecno-item">
//             <div className="tecno-item_desc">
//               <h4 className="tecno-item_titulo">CSS, Sass & Bootstrap</h4>
//               <p className="tecno-item_nivel">Avanzado</p>
//             </div>
//             <div className="tecno-item_barra-exterior">
//               <div
//                 className="tecno-item_barra-interior"
//                 style={{ width: "75%" }}
//               ></div>
//             </div>
//           </div>
//           <div className="tecno_tecno-item tecno-item">
//             <div className="tecno-item_desc">
//               <h4 className="tecno-item_titulo">JavaScript, TypeScript</h4>
//               <p className="tecno-item_nivel">Intermedio</p>
//             </div>
//             <div className="tecno-item_barra-exterior">
//               <div
//                 className="tecno-item_barra-interior"
//                 style={{ width: "50%" }}
//               ></div>
//             </div>
//           </div>
//           <div className="tecno_tecno-item tecno-item">
//             <div className="tecno-item_desc">
//               <h4 className="tecno-item_titulo">React, Next.js, Angular</h4>
//               <p className="tecno-item_nivel">Principiante</p>
//             </div>
//             <div className="tecno-item_barra-exterior">
//               <div
//                 className="tecno-item_barra-interior"
//                 style={{ width: "25%" }}
//               ></div>
//             </div>
//           </div>
//           <div className="tecno_tecno-item tecno-item">
//             <div className="tecno-item_desc">
//               <h4 className="tecno-item_titulo">Tailwind</h4>
//               <p className="tecno-item_nivel">Principiante</p>
//             </div>
//             <div className="tecno-item_barra-exterior">
//               <div
//                 className="tecno-item_barra-interior"
//                 style={{ width: "25%" }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Technologies;
