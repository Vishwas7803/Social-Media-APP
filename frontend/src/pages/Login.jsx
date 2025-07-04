import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  }

  // Inline styles (organized & colorful)
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #8e44ad 0%, #3498db 100%)",
      padding: "0 1rem",
    },
    card: {
      background: "#fff",
      width: "100%",
      maxWidth: "360px",
      padding: "2rem 2.5rem",
      borderRadius: "16px",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "1.8rem",
      fontSize: "1.8rem",
      color: "#2c3e50",
      fontWeight: "bold",
    },
    label: {
      display: "block",
      marginBottom: "0.4rem",
      fontSize: "0.9rem",
      color: "#555",
      fontWeight: 500,
    },
    input: {
      width: "100%",
      padding: "0.65rem 0.8rem",
      marginBottom: "1.2rem",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      outline: "none",
      transition: "all 0.3s ease",
    },
    button: {
      width: "100%",
      padding: "0.7rem",
      fontSize: "1rem",
      border: "none",
      borderRadius: "8px",
      background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = "#7f5af0";
    e.target.style.boxShadow = "0 0 0 3px rgba(127, 90, 240, 0.2)";
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = "#ccc";
    e.target.style.boxShadow = "none";
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.card}>
        <h2 style={styles.heading}>Login</h2>

        <label style={styles.label}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles.input}
          placeholder="Enter username"
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles.input}
          placeholder="Enter password"
          required
        />

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 10px 22px rgba(255, 75, 43, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
