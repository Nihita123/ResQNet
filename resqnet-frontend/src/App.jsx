import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/about-temp.jsx";

// Your existing Home component
const Home = () => (
  <div className="home-wrapper">
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">ResQNet</h1>
        <p className="hero-tagline">
          Linking Those In Need With Those Who Lead
        </p>
        <div className="cta-buttons">
          <button className="cta-button volunteer">Volunteer</button>
          <button className="cta-button victim">Victim</button>
          <button className="cta-button organization">Organization</button>
        </div>
        <div className="extra-buttons">
          <button className="cta-button report-disaster">
            Report Disaster
          </button>
          <button className="cta-button locate-disaster">
            Locate Disaster
          </button>
        </div>
      </div>
    </section>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="header-left">
            <h1>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                ResQNet
              </Link>
            </h1>
          </div>
          <div className="header-right">
            <ul className="header-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/helpline">Helpline</Link>
              </li>
              <li>
                <Link to="/login">Login/Signup</Link>
              </li>
            </ul>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/helpline"
              element={<div>Helpline Page Coming Soon</div>}
            />
            <Route path="/login" element={<div>Login Page Coming Soon</div>} />
          </Routes>
        </main>
      </div>
    </Router>


  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
