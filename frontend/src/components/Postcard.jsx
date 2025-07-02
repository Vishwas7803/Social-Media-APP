import React from "react";
import "./Postcard.css";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.author}</h3>
      <p>{post.content}</p>
      <small>{post.date}</small>
    </div>
  );
};

export default PostCard;
