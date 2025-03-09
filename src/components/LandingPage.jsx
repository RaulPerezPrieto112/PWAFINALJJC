
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LandingPage.css";
// import RataImage from "../assets/rata-Photoroom.png";
// import LogoImage from "../assets/logo.png";
// import gameplayVideo from "../assets/Gameplay1.mp4";
// import MouseGif from "../assets/MouseGif.gif";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [activeSection, setActiveSection] = useState("Conocenos");
//   const [userEmail, setUserEmail] = useState("");

//   useEffect(() => {
//     const email = localStorage.getItem("userEmail");
//     if (!email) {
//       navigate("/login"); // Redirigir al login si no hay usuario logueado
//     } else {
//       setUserEmail(email); // ✅ Ahora se asigna correctamente
//     }
//   }, [navigate]);
  

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setActiveSection(id);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("userEmail"); // Elimina el email de la sesión
//     navigate("/login"); // Redirige al login
//   };

//   return (
//     <div className="landing-container">
//       {/* Video de fondo */}
//       <video className="video-background" src={gameplayVideo} autoPlay loop muted />

//       <header className="landing-header fixed-header">
//         <div className="landing-logo-container">
//           <span className="landing-logo">Cheese Lab</span>
//           <span className="welcome-text">Bienvenido: {userEmail}</span>
//         </div>
//         <nav className="landing-nav">
//           <button onClick={() => scrollToSection("Conocenos")} className={activeSection === "Conocenos" ? "nav-link active" : "nav-link"}>Conócenos</button>
//           <button onClick={() => scrollToSection("Objetivo")} className={activeSection === "Objetivo" ? "nav-link active" : "nav-link"}>Objetivo</button>
//           <button onClick={() => scrollToSection("Tematica")} className={activeSection === "Tematica" ? "nav-link active" : "nav-link"}>Temática</button>
//           <button onClick={() => scrollToSection("Descargar")} className={activeSection === "Descargar" ? "landing-contact-button active" : "landing-contact-button"}>Descargar</button>
//           <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
//         </nav>
//       </header>

//       <main className="landing-content">
//         <section id="Conocenos" className="landing-section full-screen reverse">
//           <div className="section-content">
//           <div className="image-content">
//               <img src={RataImage} alt="Conocenos" className="section-image" />
//             </div>
//             <div className="text-content">
//               <h1 className="landing-title">Conócenos</h1>
//               <p className="landing-description">
//                 Cheesy Lab es un estudio independiente apasionado por los videojuegos en pixel art. 
//                 Nuestro viaje comenzó con la idea de crear experiencias nostálgicas y desafiantes.
//               </p>
//             </div>
            
//           </div>
//         </section>

//         <section id="Objetivo" className="landing-section full-screen">
//           <div className="section-content">
//             <div className="image-content">
//               <img src={LogoImage} alt="Objetivo" className="section-image" />
//             </div>
//             <div className="text-content">
//               <h1 className="landing-title">Objetivo</h1>
//               <p className="landing-description">
//                 En Jumping Jack Cheese, nuestra misión es ofrecer una experiencia de juego dinámica y accesible para todo tipo de jugadores. 
//                 Nos enfocamos en brindar acción rápida y desafiante para quienes disponen de poco tiempo, 
//                 permitiéndoles disfrutar de partidas cortas y entretenidas. 
//                 Al mismo tiempo, ofrecemos la posibilidad de perfeccionar estrategias y optimizar tiempos, 
//                 creando una experiencia ideal para quienes buscan el reto del speedrunning. 
//                 Nuestro objetivo es equilibrar diversión, desafío y rejugabilidad en un entorno ágil y estimulante.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section id="Tematica" className="landing-section full-screen reverse">
//           <div className="section-content">
//             <div className="text-content">
//               <h1 className="landing-title">Temática</h1>
//               <p className="landing-description">
//                 Jumping Jack Cheese es un juego de plataformas en 2D donde los jugadores toman el control de un ágil
//                 ratón que debe recolectar tres quesos y llevarlos a su madriguera antes de que el tiempo se agote.
//               </p>
//             </div>
//             <div className="image-content">
//               <img src={MouseGif} alt="Descargar" className="section-image" />
//             </div>
//           </div>
//         </section>

//         <section id="Descargar" className="landing-section full-screen">
//           <div className="section-content">
//             <div className="image-content">
//               <img src={MouseGif} alt="Descargar" className="section-image" />
//             </div>
//             <div className="text-content">
//               <h1 className="landing-title">Descargar</h1>
//               <p className="landing-description">¿Estás listo para sumergirte en un juego divertido, adictivo y sobre todo... ¡Entretenido!?</p>
//               <a href="#" className="download-button" onClick={() => window.location.href = "https://mega.nz/file/62pmDDKS#thrf6CZHPLYC5MEeWKceH3K3ahNawYxodFdMPj_3va8/direct"}>
//   Download Game (.rar)
// </a>


//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="landing-footer">
//         <p>&copy; 2024 Jumping Jack Cheese. Todos los derechos reservados.</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./LandingPage.css";
import RataImage from "../assets/rata-Photoroom.png";
import LogoImage from "../assets/logo.png";
import gameplayVideo from "../assets/Gameplay1.mp4";
import MouseGif from "../assets/MouseGif.gif";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Conocenos");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const scrollToSection = (id) => {
    if (id === "Descargar" && !userEmail) {
      Swal.fire({
        title: "¡Debes registrarte!",
        text: "Crea una cuenta para descargar el juego.",
        icon: "warning",
        confirmButtonText: "Registrarme",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/register");
        }
      });
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
    window.location.reload(); // Recarga la página para reflejar el cambio
  };

  return (
    <div className="landing-container">
      {/* Video de fondo */}
      <video className="video-background" src={gameplayVideo} autoPlay loop muted />

      <header className="landing-header fixed-header">
        <div className="landing-logo-container">
          <span className="landing-logo">Cheese Lab</span>
          {userEmail && <span className="welcome-text">Bienvenido: {userEmail}</span>}
        </div>
        <nav className="landing-nav">
          <button onClick={() => scrollToSection("Conocenos")} className={activeSection === "Conocenos" ? "nav-link active" : "nav-link"}>Conócenos</button>
          <button onClick={() => scrollToSection("Objetivo")} className={activeSection === "Objetivo" ? "nav-link active" : "nav-link"}>Objetivo</button>
          <button onClick={() => scrollToSection("Tematica")} className={activeSection === "Tematica" ? "nav-link active" : "nav-link"}>Temática</button>
          <button onClick={() => scrollToSection("Descargar")} className="landing-contact-button">Descargar</button>
          {userEmail ? (
            <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
          ) : (
            <button onClick={() => navigate("/login")} className="logout-button">Ingresar</button>
          )}
        </nav>
      </header>

      <main className="landing-content">
        <section id="Conocenos" className="landing-section full-screen reverse">
          <div className="section-content">
            <div className="image-content">
              <img src={RataImage} alt="Conocenos" className="section-image" />
            </div>
            <div className="text-content">
              <h1 className="landing-title">Conócenos</h1>
              <p className="landing-description">
                Cheesy Lab es un estudio independiente apasionado por los videojuegos en pixel art. 
                Nuestro viaje comenzó con la idea de crear experiencias nostálgicas y desafiantes.
              </p>
            </div>
          </div>
        </section>

        <section id="Objetivo" className="landing-section full-screen">
          <div className="section-content">
            <div className="image-content">
              <img src={LogoImage} alt="Objetivo" className="section-image" />
            </div>
            <div className="text-content">
              <h1 className="landing-title">Objetivo</h1>
              <p className="landing-description">
                En Jumping Jack Cheese, nuestra misión es ofrecer una experiencia de juego dinámica y accesible para todo tipo de jugadores. 
                Nos enfocamos en brindar acción rápida y desafiante para quienes disponen de poco tiempo, 
                permitiéndoles disfrutar de partidas cortas y entretenidas. 
                Al mismo tiempo, ofrecemos la posibilidad de perfeccionar estrategias y optimizar tiempos, 
                creando una experiencia ideal para quienes buscan el reto del speedrunning. 
                Nuestro objetivo es equilibrar diversión, desafío y rejugabilidad en un entorno ágil y estimulante.
              </p>
            </div>
          </div>
        </section>

        <section id="Tematica" className="landing-section full-screen reverse">
          <div className="section-content">
            <div className="text-content">
              <h1 className="landing-title">Temática</h1>
              <p className="landing-description">
                Jumping Jack Cheese es un juego de plataformas en 2D donde los jugadores toman el control de un ágil
                ratón que debe recolectar tres quesos y llevarlos a su madriguera antes de que el tiempo se agote.
              </p>
            </div>
            <div className="image-content">
              <img src={MouseGif} alt="Descargar" className="section-image" />
            </div>
          </div>
        </section>

        <section id="Descargar" className="landing-section full-screen">
          <div className="section-content">
            <div className="image-content">
              <img src={MouseGif} alt="Descargar" className="section-image" />
            </div>
            <div className="text-content">
              <h1 className="landing-title">Descargar</h1>
              <p className="landing-description">¿Estás listo para sumergirte en un juego divertido, adictivo y sobre todo... ¡Entretenido!?</p>
              {userEmail ? (
                <a href="https://mega.nz/file/674GEYaS#VG9cO2jdcAtDhHmYp0wNddLaVNZ7SeaXZpLlQUjogLg" className="download-button">
                  Download Game (.rar)
                </a>
              ) : (
                <button className="download-button" onClick={() => Swal.fire("¡Debes registrarte!", "Crea una cuenta para descargar el juego.", "warning")}>
                  Download Game (.rar)
                </button>
              )}
            </div>
          </div> 
        </section>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2024 Jumping Jack Cheese. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
