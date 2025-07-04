import { useState } from "react";

const CreatePost = ({ onCreate }) => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const selected = Array.from(e.target.files).slice(0, 3);
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setImages(selected);
    setImagePreviews(selected.map((f) => URL.createObjectURL(f)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    onCreate?.({ text, tags, images });
    setText("");
    setTags("");
    setImages([]);
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setImagePreviews([]);
    setLoading(false);
  };

  return (
    <>
      <style>{`
        :root {
          --primary: #ff4d4d;
          --secondary: #ffcc00;
          --accent: #1ecbe1;
          --bg: #f9f9fb;
          --text-dark: #2d2d2d;
        }

        body {
          background: var(--bg);
        }

        .create-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 60px 16px;
          font-family: "Segoe UI", sans-serif;
          background: linear-gradient(135deg, #ffe5ec, #e0f7fa);
        }

        .create-form {
          width: 100%;
          max-width: 540px;
          background: white;
          border-radius: 16px;
          padding: 30px 26px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 2px solid #fff;
          animation: fadeIn 0.6s ease-in;
        }

        .create-form h2 {
          background: linear-gradient(to right, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 20px;
          text-align: center;
        }

        .create-form textarea,
        .create-form input[type="text"] {
          width: 100%;
          padding: 12px 14px;
          margin-bottom: 16px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 15px;
          transition: border 0.2s ease;
        }

        .create-form textarea:focus,
        .create-form input[type="text"]:focus {
          border-color: var(--accent);
          outline: none;
        }

        .create-form input[type="file"] {
          margin-bottom: 12px;
        }

        .preview-container {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }

        .preview-container img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 10px;
          border: 1px solid #ccc;
        }

        .create-form button {
          width: 100%;
          padding: 12px;
          font-size: 15px;
          font-weight: 700;
          border: none;
          border-radius: 30px;
          background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent));
          color: white;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s;
        }

        .create-form button:hover {
          transform: scale(1.03);
        }

        .create-form button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="create-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <h2>Create New Post</h2>

          <textarea
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />

          {imagePreviews.length > 0 && (
            <div className="preview-container">
              {imagePreviews.map((src, i) => (
                <img key={i} src={src} alt={`Preview ${i}`} />
              ))}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Posting..." : "Post"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
