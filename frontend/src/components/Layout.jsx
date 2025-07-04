import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <style>{`
        :root {
          --primary:   #ff0080;
          --secondary: #7b2ff7;
          --accent:    #00d4ff;
          --dark:      #111827;
          --light:     #f9fafb;
        }

        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: "Poppins", Arial, sans-serif;
          background: linear-gradient(135deg, #ffffff 0%, #e7f0ff 100%);
          color: var(--dark);
        }

        .layout-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .navbar {
          position: fixed;
          inset: 0 0 auto 0;
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.75);
          border-bottom: 1px solid #e5e7eb;
          z-index: 1000;
          animation: fadeDown 0.6s ease-out;
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          font-size: 32px;
          font-weight: 800;
          text-decoration: none;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
          transition: transform 0.3s;
        }

        .brand:hover {
          transform: scale(1.08) rotate(-1deg);
        }

        .search-form {
          display: flex;
          gap: 10px;
        }

        .search-input {
          width: 190px;
          padding: 8px 12px;
          font-size: 15px;
          border: 1px solid #d1d5db;
          border-radius: 30px;
          background: #ffffff;
          color: var(--dark);
          transition: width 0.4s ease, box-shadow 0.3s;
        }

        .search-input:focus {
          outline: none;
          width: 230px;
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.3);
        }

        .search-button {
          padding: 8px 18px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 30px;
          color: #fff;
          background: var(--primary);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .search-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, var(--primary), var(--accent), var(--secondary));
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .search-button:hover::before {
          transform: translateX(0);
        }

        .search-button span {
          position: relative;
          z-index: 1;
        }

        .nav-links {
          display: flex;
          gap: 22px;
          font-size: 15px;
          font-weight: 600;
        }

        .nav-link {
          text-decoration: none;
          color: var(--dark);
          position: relative;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .main-content {
          flex: 1;
          padding: 100px 24px 120px;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          animation: fadeUp 0.7s ease-out;
        }

        .floating-button {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, var(--primary), var(--secondary));
          color: #fff;
          font-size: 32px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transition: transform 0.3s;
        }

        .floating-button::before {
          content: "";
          position: absolute;
          width: 160%;
          height: 160%;
          background: conic-gradient(from 180deg, var(--primary), var(--accent), var(--secondary), var(--primary));
          animation: rotate 5s linear infinite;
          z-index: -1;
        }

        .floating-button:hover {
          transform: translateY(-5px) rotate(5deg);
        }

        @media (max-width: 768px) {
          .search-form {
            display: none;
          }

          .navbar-content {
            padding: 12px 18px;
          }
        }

        @keyframes rotate {
          to {
            transform: rotate(1turn);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="layout-container">
        <header className="navbar">
          <nav className="navbar-content">
            <Link to="/" className="brand">Snapo</Link>

            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                placeholder="Search username…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                <span>Go</span>
              </button>
            </form>

            <div className="nav-links">
              <Link to="/" className="nav-link">Explore</Link>
              <Link to="/create" className="nav-link">Create</Link>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link> {/* <- ADDED */}
            </div>
          </nav>
        </header>

        <main className="main-content">
          <Outlet />
        </main>

        <Link to="/create" className="floating-button" title="Create Post">+</Link>
      </div>
    </>
  );
};

export default Layout;
