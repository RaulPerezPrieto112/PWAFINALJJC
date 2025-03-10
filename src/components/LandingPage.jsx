
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
  const [menuOpen, setMenuOpen] = useState(false); // Controla el sidebar en mobile

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
      setMenuOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
    window.location.reload();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="landing-container">
      {/* Video de fondo */}
      <video className="video-background" src={gameplayVideo} autoPlay loop muted />

      {/* HEADER */}
      <header className="landing-header fixed-header">
        <div className="landing-logo-container">
          <span className="landing-logo">Cheese Lab</span>
          {userEmail && <span className="welcome-text">Bienvenido: {userEmail}</span>}
        </div>

        {/* Botón Hamburguesa SOLO EN CELULAR */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navbar DESKTOP */}
        <nav className="landing-nav desktop-nav">
          <button onClick={() => scrollToSection("Conocenos")} className={activeSection === "Conocenos" ? "nav-link active" : "nav-link"}>
            Conócenos
          </button>
          <button onClick={() => scrollToSection("Objetivo")} className={activeSection === "Objetivo" ? "nav-link active" : "nav-link"}>
            Objetivo
          </button>
          <button onClick={() => scrollToSection("Tematica")} className={activeSection === "Tematica" ? "nav-link active" : "nav-link"}>
            Temática
          </button>
          <button onClick={() => scrollToSection("Descargar")} className="landing-contact-button">
            Descargar
          </button>
          {userEmail ? (
            <button onClick={handleLogout} className="logout-button">
              Cerrar Sesión
            </button>
          ) : (
            <button onClick={() => navigate("/login")} className="logout-button">
              Ingresar
            </button>
          )}
        </nav>

        {/* SIDEBAR MOBILE */}
        <div className={`mobile-sidebar ${menuOpen ? "show" : ""}`}>
          <button onClick={() => scrollToSection("Conocenos")} className="sidebar-link">Conócenos</button>
          <button onClick={() => scrollToSection("Objetivo")} className="sidebar-link">Objetivo</button>
          <button onClick={() => scrollToSection("Tematica")} className="sidebar-link">Temática</button>
          <button onClick={() => scrollToSection("Descargar")} className="sidebar-link">Descargar</button>
          {userEmail ? (
            <button onClick={handleLogout} className="sidebar-link">Cerrar Sesión</button>
          ) : (
            <button onClick={() => navigate("/login")} className="sidebar-link">Ingresar</button>
          )}
        </div>
      </header>

      {/* MAIN */}
      <main className="landing-content">
        {/* Conocenos */}
        <section id="Conocenos" className="landing-section full-screen reverse">
          <div className="section-content">
            <div className="image-content">
              <img src={RataImage} alt="Conocenos" className="section-image" />
            </div>
            <div className="text-content">
              <h1 className="landing-title">Conócenos</h1>
              <p className="landing-description">
                Cheesy Lab es un estudio independiente apasionado por los videojuegos en pixel art.
              </p>
            </div>
          </div>
        </section>

        {/* Objetivo */}
        <section id="Objetivo" className="landing-section full-screen">
          <div className="section-content">
            <div className="image-content">
              <img src={LogoImage} alt="Objetivo" className="section-image" />
            </div>
            <div className="text-content">
              <h1 className="landing-title">Objetivo</h1>
              <p className="landing-description">
                En Jumping Jack Cheese, nuestra misión es ofrecer una experiencia dinámica y accesible...
              </p>
            </div>
          </div>
        </section>

        {/* Tematica */}
        <section id="Tematica" className="landing-section full-screen reverse">
          <div className="section-content">
            <div className="text-content">
              <h1 className="landing-title">Temática</h1>
              <p className="landing-description">
                Jumping Jack Cheese es un juego de plataformas en 2D donde controlas a un ratón...
              </p>
            </div>
            <div className="image-content">
              <img src={MouseGif} alt="Temática" className="section-image" />
            </div>
          </div>
        </section>

        {/* Descargar */}
        <section id="Descargar" className="landing-section full-screen">
          <div className="section-content">
            <div className="image-content">
              <img src={MouseGif} alt="Descargar" className="section-image" />
            </div>
            <div className="text-content">
              <h1 className="landing-title">Descargar</h1>
              <p className="landing-description">
                ¿Listo para jugar? Descarga Jumping Jack Cheese y empieza la aventura.
              </p>
              {userEmail ? (
                <a href="https://mega.nz/file/fjpi0bwR#7GY9kd7sCnFQbVlt8Q7wv8eONzUHlDAP4y2pq8ieoic" className="download-button">
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
