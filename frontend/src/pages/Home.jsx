// src/pages/Home.jsx   (adjust path if you keep pages/ elsewhere)
import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);
  const dummyPosts = [
    {
      id: 1,
      username: "anurag_tripathi",
      content: "Exploring the beauty of nature 🌿",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      username: "dev_coder",
      content: "Just finished my new project! 🚀",
      image:
        "https://images.unsplash.com/photo-1581091012184-7f3c574f29cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      username: "artistic_soul",
      content: "My latest artwork 🎨",
      image:
        "https://images.unsplash.com/photo-1608134963959-659d39c1c73b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setPosts(dummyPosts), 800);
    return () => clearTimeout(timer);
  }, []);

  /* ------------ UI ------------ */
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Latest Posts</h1>

        {posts.length === 0 ? (
          <p style={styles.loading}>Loading posts…</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} style={styles.card}>
              <img src={post.image} alt="Post" style={styles.image} />
              <p style={styles.username}>@{post.username}</p>
              <p style={styles.content}>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ---------- Tiny inline styles ---------- */
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  wrapper: {
    maxWidth: 600,
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#333",
    textAlign: "center",
  },
  loading: {
    textAlign: "center",
    color: "#777",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 12,
    maxHeight: 320,
    objectFit: "cover",
  },
  username: { fontWeight: "bold", color: "#1e90ff", marginBottom: 6 },
  content: { color: "#333" },
};

export default Home;
