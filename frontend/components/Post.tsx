import React from "react";
interface PostProps {
  author: string;

  content: string;
}
const Post: React.FC<PostProps> = ({ author, content }) => {
  return (
    <div className="card card-side bg-gradient-to-r from-emerald-300 via-green-300 via-20% shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{author}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
