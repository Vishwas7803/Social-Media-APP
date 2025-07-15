import { useEffect, useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([
        {
          id: 1,
          type: "success",
          message: "Your post was published!",
          timestamp: "2 mins ago",
        },
        {
          id: 2,
          type: "info",
          message: "New comment on your post.",
          timestamp: "10 mins ago",
        },
        {
          id: 3,
          type: "warning",
          message: "You have unread messages.",
          timestamp: "1 hour ago",
        },
        {
          id: 4,
          type: "failed",
          message: "Failed to login",
          timestamp: "5 min",
        },
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Notifications</h2>
      {notifications.length === 0 ? (
        <p style={{ color: "#999", textAlign: "center" }}>
          Loading notifications...
        </p>
      ) : (
        <ul style={styles.list}>
          {notifications.map((n) => (
            <li
              key={n.id}
              style={{ ...styles.item, ...styles[n.type] || styles.default }}
            >
              <p style={styles.message}>{n.message}</p>
              <small style={styles.time}>{n.timestamp}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "1rem",
    width: "90%",
    maxWidth: "600px",
    margin: "auto",
    boxSizing: "border-box",
  },
  heading: {
    fontSize: "clamp(1.5rem, 2vw, 2rem)",
    marginBottom: "1rem",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    padding: "1rem",
    marginBottom: "0.8rem",
    borderRadius: "10px",
    color: "#fff",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  success: { background: "#16a34a" },
  info: { background: "#2563eb" },
  warning: { background: "#d97706" },
  failed: { background: "#dc2626" },
  default: { background: "#6b7280" }, // fallback for unknown types
  message: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    margin: 0,
    wordWrap: "break-word",
  },
  time: {
    fontSize: "0.8rem",
    marginTop: "0.5rem",
    color: "#e5e5e5",
    alignSelf: "flex-end",
  },
};

export default Notifications;
