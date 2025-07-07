import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (stored) setUsername(stored);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    navigate("/login", { replace: true });
  };

  return (
    <>
      {/* ================= UNIQUE CSS ================= */}
      <style>{`
        /* ===== Theme ===== */
        :root {
          --bg-dark: #0d0d12;
          --bg-light: #17171f;
          --surface: #ffffff;
          --text-muted: #9ca3af;
          --primary: #ff7a18;
          --secondary: #af00ff;
          --accent: #00c6ff;
          --radius: 18px;
        }
        body {
          margin: 0;
          font-family: "Poppins", Arial, sans-serif;
          background: var(--bg-dark);
          color: var(--surface);
        }
        html {
          scroll-behavior: smooth;
        }

        /* ===== Layout ===== */
        .layout-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        /* ===== Navbar ===== */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(23, 23, 31, 0.75);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          z-index: 1000;
          animation: navDrop 0.45s ease-out;
        }
        @keyframes navDrop {
          from {transform: translateY(-100%); opacity:0;}
          to {transform: translateY(0); opacity:1;}
        }
        .navbar-content {
          max-width: 1200px;
          margin-inline: auto;
          padding: 14px 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .brand {
          font-size: 30px;
          font-weight: 900;
          text-decoration: none;
          background: linear-gradient(120deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: transform 0.25s;
        }
        .brand:hover {transform: scale(1.08) rotate(-1deg);}

        /* ===== Search ===== */
        .search-form {display: flex; gap: 0.5rem; align-items: center;}
        .search-input {
          width: 180px;
          padding: 8px 14px;
          font-size: 15px;
          border: none;
          border-radius: 50px;
          background: var(--bg-light);
          color: var(--surface);
          transition: width 0.4s, box-shadow 0.3s;
        }
        .search-input:focus {
          outline: none;
          width: 240px;
          box-shadow: 0 0 0 3px var(--accent);
        }
        .search-button {
          position: relative;
          overflow: hidden;
          padding: 8px 18px;
          border: none;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          color: var(--surface);
          background: var(--primary);
          cursor: pointer;
          transition: filter 0.3s;
        }
        .search-button:hover {filter: brightness(1.15);}

        /* ===== Links ===== */
        .nav-links {display: flex; gap: 24px; font-size: 15px; font-weight: 600;}
        .nav-link {
          text-decoration: none;
          color: var(--surface);
          position: relative;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; bottom: -6px;
          width: 0%; height: 2px;
          background: var(--primary);
          transition: width 0.3s;
        }
        .nav-link:hover::after {width: 100%;}
        .nav-link:hover {color: var(--primary);}  
        .nav-link[data-logout] {color:#f87171;}

        /* ===== Main ===== */
        .main-content {
          flex: 1;
          max-width: 1200px;
          margin-inline: auto;
          padding: 110px 24px 120px;
          animation: fadeUp 0.4s ease;
        }
        @keyframes fadeUp {
          from {opacity:0; transform: translateY(20px);} 
          to {opacity:1; transform: translateY(0);} 
        }

        /* ===== Floating Action Button ===== */
        .floating-button {
          position: fixed;
          bottom: 28px; right: 28px;
          width: 62px; height: 62px;
          border-radius: 50%;
          display: flex; align-items:center; justify-content:center;
          font-size:36px;
          text-decoration:none;
          color: var(--surface);
          background: radial-gradient(circle at 30% 30%, var(--secondary), var(--primary));
          box-shadow: 0 10px 24px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }
        .floating-button:hover {transform: translateY(-6px) rotate(8deg);}      
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
              <button type="submit" className="search-button"><span>Go</span></button>
            </form>

            <div className="nav-links">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/create" className="nav-link">Create</Link>

              {!username ? (
                <>
                  <Link to="/login" className="nav-link">Login</Link>
                  <Link to="/register" className="nav-link">Register</Link>
                </>
              ) : (
                <>
                  <span className="nav-link" style={{ cursor: "default" }}>@{username}</span>
                  <span className="nav-link" data-logout onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</span>
                </>
              )}
            </div>
          </nav>
        </header>

        <main className="main-content">
          <Outlet />
        </main>

        <Link to="/create" className="floating-button" title="Create Post">
          +
        </Link>
      </div>
    </>
  );
};

export default Layout;
