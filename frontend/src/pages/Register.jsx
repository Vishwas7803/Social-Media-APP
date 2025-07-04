import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Username: ${form.username}\nEmail: ${form.email}\nPassword: ${form.password}`);
  };

  // === Colorful & Modern Styling ===
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #f7971e, #ffd200)",
      padding: "20px",
    },
    form: {
      backgroundColor: "#ffffff",
      padding: "32px",
      borderRadius: "16px",
      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
      width: "100%",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
    },
    heading: {
      textAlign: "center",
      fontSize: "1.8rem",
      marginBottom: "20px",
      background: "linear-gradient(to right, #f7971e, #ff416c)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold",
    },
    label: {
      fontWeight: "500",
      marginBottom: "4px",
      color: "#444",
    },
    input: {
      padding: "10px",
      fontSize: "15px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      marginBottom: "16px",
      transition: "all 0.25s",
    },
    inputFocus: {
      borderColor: "#f7971e",
      boxShadow: "0 0 0 3px rgba(247, 151, 30, 0.2)",
    },
    button: {
      padding: "12px",
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      color: "#fff",
      fontWeight: "600",
      fontSize: "1rem",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
  };

  // Dynamic focus style logic
  const [focusField, setFocusField] = useState(null);
  const applyFocus = (field) =>
    focusField === field ? { ...styles.input, ...styles.inputFocus } : styles.input;

  return (
    <div style={styles.container}>
      <form onSubmit={handleRegister} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>

        <label style={styles.label}>Username</label>
        <input
          name="username"
          type="text"
          value={form.username}
          onChange={handleChange}
          onFocus={() => setFocusField("username")}
          onBlur={() => setFocusField(null)}
          style={applyFocus("username")}
          required
        />

        <label style={styles.label}>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          onFocus={() => setFocusField("email")}
          onBlur={() => setFocusField(null)}
          style={applyFocus("email")}
          required
        />

        <label style={styles.label}>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          onFocus={() => setFocusField("password")}
          onBlur={() => setFocusField(null)}
          style={applyFocus("password")}
          required
        />

        <label style={styles.label}>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          onFocus={() => setFocusField("confirmPassword")}
          onBlur={() => setFocusField(null)}
          style={applyFocus("confirmPassword")}
          required
        />

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 22px rgba(255, 65, 108, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
