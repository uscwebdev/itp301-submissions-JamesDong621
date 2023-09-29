import React from 'react';

const UserComment = ({ profilePic, username, date, content }) => {
  return (
    <div className="comment">
      <img src={profilePic} alt={username} />
      <div className="comment-info">
        <strong>{username}</strong>
        <span>{date}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default UserComment;
