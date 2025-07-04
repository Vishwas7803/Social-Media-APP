import React from "react";


const Profile = () => {
  const user = {
    username: "anuragtripathi",
    name: "Anurag Tripathi",
    bio: "Fullstack developer. Love building apps 💻✨",
    followers: 120,
    following: 80,
    posts: 3,
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image"></div>
        <div>
          <h2>@{user.username}</h2>
          <p>{user.name}</p>
          <p>{user.bio}</p>
          <div className="profile-stats">
            <span>Posts: {user.posts}</span>
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
