import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const { query } = useParams();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy data to simulate search results
  const dummyUsers = [
    { _id: "1", username: "Anurag" },
    { _id: "2", username: "tripathi" },
  ];

  const dummyPosts = [
    {
      _id: "p1",
      content: "This is a post about React.",
      user: { username: "john" },
    },
    {
      _id: "p2",
      content: "Learning frontend development is fun!",
      user: { username: "jane" },
    },
  ];

  useEffect(() => {
    setLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      const filteredUsers = dummyUsers.filter((u) =>
        u.username.toLowerCase().includes(query.toLowerCase())
      );
      const filteredPosts = dummyPosts.filter((p) =>
        p.content.toLowerCase().includes(query.toLowerCase())
      );

      setUsers(filteredUsers);
      setPosts(filteredPosts);
      setLoading(false);
    }, 1000);
  }, [query]);

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Search results for "<span style={{ color: "#0e7490" }}>{query}</span>"
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Users Section */}
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Users</h3>
            {users.length > 0 ? (
              <ul>
                {users.map((user) => (
                  <li key={user._id}>
                    <Link to={`/profile/${user._id}`} style={{ color: "#0e7490", textDecoration: "underline" }}>
                      {user.username}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No users found.</p>
            )}
          </div>

          {/* Posts Section */}
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Posts</h3>
            {posts.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {posts.map((post) => (
                  <div key={post._id} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
                    <div style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
                      @{post.user.username}
                    </div>
                    <div>{post.content}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No posts found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
