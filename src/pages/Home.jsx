import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* Floating Shapes */}
      <div className="shape shape--pink"></div>
      <div className="shape shape--yellow"></div>
      <div className="shape shape--green"></div>

      {/* Blue Object */}
      <div className="blue-object"></div>

      {/* Nav */}
      <nav className="home__nav">
        <h1 className="home__logo">AdminZone</h1>
       
      </nav>

      {/* Hero Section */}
      <main className="home__main">
        <div className="home__text">
          <h2>
            Powerful Admin <span>Dashboard</span>
          </h2>
          <p>
            Manage users, track analytics, and optimize performance from a single
            interface.
          </p>
          <Link to="/admin/dashboard" className="home__btn">
            Go to Dashboard
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="home__footer">
        © {new Date().getFullYear()} AdminZone. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;