import { Comment } from "../Comment";
import "./Comments.css";

export const Comments = () => {
  return (
    <div>
      <div className="comments">
        <h2 className="comments_title">Comments #78965412</h2>

        <ul className="comments_list">
          <li>
            <Comment />
          </li>
        </ul>

        <form className="comments-form">
          <input className="comments-form_input" type="color" name="color" />
          <textarea
            className="comments-form_textarea"
            type="text"
            name="comments"
            placeholder="Type comment here..."
            required
          />
          <button className="comments-form_button">Add New</button>
        </form>

        <ul className="comments_list">
          <li></li>
        </ul>
      </div>
    </div>
  );
};
