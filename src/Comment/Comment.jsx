import "./Comment.css";

export const Comment = ({ comment: { body, color } }) => {
  return (
    <div className="comment_wrapper">
      <div className="comment_color" style={{ backgroundColor: color }}></div>
      <span className="comment_text">{body}</span>
    </div>
  );
};
