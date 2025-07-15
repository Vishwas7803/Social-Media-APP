import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const dummyUsers = [
  { _id: "1", username: "john" },
  { _id: "2", username: "jane" },
];

const dummyPosts = [
  {
    _id: "p1",
    userId: "1",
    text: "Hello world! This is my first post.",
    images: [],
    comments: [],
  },
  {
    _id: "p2",
    userId: "1",
    text: "Another day, another post about React 😎",
    images: [],
    comments: [],
  },
  {
    _id: "p3",
    userId: "2",
    text: "Vue or React? 🤔 Let the battle begin!",
    images: [],
    comments: [],
  },
];
/* -------------------------------------------------------- */

const ViewProfile = () => {
  const { id } = useParams();             // profile id from URL

  const [user, setUser]                 = useState(null);
  const [posts, setPosts]               = useState([]);
  const [likesStatus, setLikesStatus]   = useState({});   // { postId: bool }
  const [likesCount,  setLikesCount]    = useState({});   // { postId: number }

  const [isFollowing, setIsFollowing]   = useState(false);
  const [followersCount, setFollowers]  = useState(0);
  const [followingCount, setFollowing]  = useState(0);

  const [loading, setLoading]           = useState(true);

  /* -------- Load user & posts whenever `id` changes -------- */
  useEffect(() => {
    setLoading(true);

    // Fake network delay
    setTimeout(() => {
      const foundUser  = dummyUsers.find((u) => u._id === id) || null;
      const userPosts  = dummyPosts.filter((p) => p.userId === id);

      // Random starting like counts
      const likeCounts = {};
      userPosts.forEach((p) => {
        likeCounts[p._id] = Math.floor(Math.random() * 20);
      });

      setUser(foundUser);
      setPosts(userPosts);
      setLikesCount(likeCounts);
      setLoading(false);
    }, 600);
  }, [id]);

  /* ------------------- UI handlers ------------------- */
  const handleLikeToggle = (postId) => {
    setLikesStatus((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
    setLikesCount((prev) => ({
      ...prev,
      [postId]: prev[postId] + (likesStatus[postId] ? -1 : 1),
    }));
  };

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
    setFollowers((prev) => prev + (isFollowing ? -1 : 1));
  };

  /* ----------------------- JSX ----------------------- */
  if (loading) return <p style={{ textAlign: "center" }}>Loading profile…</p>;
  if (!user)   return <p style={{ textAlign: "center" }}>User not found.</p>;

  return (
    <div style={{ maxWidth: 650, margin: "0 auto", padding: 24 }}>
      {/* Header */}
      <h1 style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        @{user.username}
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 40,
          margin: "20px 0",
        }}
      >
        <div>
          <p style={{ fontWeight: 600, textAlign: "center" }}>
            {followersCount}
          </p>
          <p style={{ fontSize: 14, color: "#666", textAlign: "center" }}>
            Followers
          </p>
        </div>
        <div>
          <p style={{ fontWeight: 600, textAlign: "center" }}>
            {followingCount}
          </p>
          <p style={{ fontSize: 14, color: "#666", textAlign: "center" }}>
            Following
          </p>
        </div>
      </div>

      <button
        onClick={handleFollowToggle}
        style={{
          display: "block",
          margin: "0 auto 30px",
          padding: "8px 20px",
          border: "none",
          borderRadius: 20,
          color: "#fff",
          background: isFollowing ? "#f87171" : "#06b6d4",
          cursor: "pointer",
        }}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>

      {/* Posts */}
      {posts.length ? (
        posts.map((post) => (
          <div
            key={post._id}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 10,
              padding: 16,
              marginBottom: 20,
            }}
          >
            {post.images?.length ? (
              <img
                src={post.images[0]}
                alt="post"
                style={{
                  width: "100%",
                  borderRadius: 8,
                  marginBottom: 10,
                  objectFit: "cover",
                }}
              />
            ) : null}

            <p style={{ marginBottom: 10 }}>{post.text}</p>

            <button
              onClick={() => handleLikeToggle(post._id)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              {likesStatus[post._id] ? "❤️" : "🤍"}{" "}
              {likesCount[post._id] || 0}
            </button>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>
          This user hasn’t posted anything yet.
        </p>
      )}
    </div>
  );
};

export default ViewProfile;
