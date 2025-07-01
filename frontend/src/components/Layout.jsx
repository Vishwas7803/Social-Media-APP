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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Navbar */}
      <header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #ddd",
          padding: "10px 20px",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <Link
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              textDecoration: "none",
              color: "#222",
            }}
          >
            Snapo
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} style={{ display: "flex", gap: "6px" }}>
            <input
              type="text"
              placeholder="Search username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: "5px 8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "6px 10px",
                backgroundColor: "#0891b2",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </form>

          {/* Navigation Links (Static) */}
          <div style={{ display: "flex", gap: "15px", fontSize: "14px" }}>
           <Link to="/Register" style={{ textDecoration: "none", color: "#444" }}>
              Register
            </Link>
            <Link to="/Login" style={{ textDecoration: "none", color: "#444" }}>
              Login
            </Link>
            <Link to="/Home" style={{ textDecoration: "none", color: "#0891b2" }}>
              Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          paddingTop: "80px",
          padding: "20px",
          flex: 1,
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Outlet />
      </main>

      {/* Always-visible Create Button */}
      <Link
        to="/create"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0891b2",
          color: "white",
          padding: "12px",
          borderRadius: "50%",
          textAlign: "center",
          textDecoration: "none",
          fontSize: "18px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
        title="Create Post"
      >
        +
      </Link>
    </div>
  );
};

export default Layout;
