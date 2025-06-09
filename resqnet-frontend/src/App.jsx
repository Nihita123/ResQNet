import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import "./App.css";
import AidRequestForm from "./pages/AidRequestForm";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import OrganizationDashboard from "./pages/OrganisationDashboard";
import VictimDashboard from "./pages/VictimDashboard";
import LoginPage from "./pages/Login";
import AboutUs from "./pages/About";

function App() {
  const navigate = useNavigate();

  const handleVolunteerClick = () => navigate("/volunteer");
  const handleOrganizationClick = () => navigate("/organization");
  const handleVictimClick = () => navigate("/victim");
  const handleRequestAidClick = () => navigate("/request-aid");

  return (
    <div className="app-container">
      <header className="main-header">
        <div className="logo">ResQNet</div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <a href="#helpline" className="nav-link">
            Helpline
          </a>
          <Link to="/login" className="nav-link login-btn">
            Login / Signup
          </Link>
        </nav>
      </header>

      <section className="hero">
        <h1 className="hero-heading">
          Connecting you to <span className="gradient-text">help</span>
          <br />
          in times of <span className="gradient-text">crisis</span>
          <span className="dot">.</span>
        </h1>
        <p className="hero-subtext">
          A platform to connect disaster victims with volunteers and
          organizations for timely aid.
        </p>
        <div className="cta-group">
          <button
            className="cta-button volunteer"
            onClick={handleVolunteerClick}
          >
            Volunteer
          </button>
          <button className="cta-button victim" onClick={handleVictimClick}>
            Victim
          </button>
          <button
            className="cta-button organization"
            onClick={handleOrganizationClick}
          >
            Organization
          </button>
        </div>
        <div className="cta-group secondary">
          <button
            className="cta-button request"
            onClick={handleRequestAidClick}
          >
            Request Aid
          </button>
          <button className="cta-button locate">Locate Disaster</button>
        </div>
      </section>

      <Routes>
        <Route path="/volunteer" element={<VolunteerDashboard />} />
        <Route path="/organization" element={<OrganizationDashboard />} />
        <Route path="/victim" element={<VictimDashboard />} />
        <Route path="/request-aid" element={<AidRequestForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <footer className="footer">
        <p>&copy; 2025 ResQNet. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
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
