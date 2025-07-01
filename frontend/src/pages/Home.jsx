import { useState, useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const dummyPosts = [
      { id: 1, title: "Welcome to Kinnect", content: "This is a sample post." },
      { id: 2, title: "Another Post", content: "Here's another example." },
    ];

    setTimeout(() => {
      setPosts(dummyPosts);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200">
          Latest Posts
        </h1>

        {error && <p className="text-red-500">{error}</p>}

        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm"
            >
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
