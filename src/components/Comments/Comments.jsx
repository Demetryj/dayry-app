import { useSelector, useDispatch } from 'react-redux';
import { selectActiveItem } from '../../redax/comment/selectors';
import { addComment } from '../../redax/comment/commentSlice';
import { Comment } from '../Comment';
import './Comments.css';

export const Comments = () => {
  const activeItem = useSelector(selectActiveItem);
  const dispatch = useDispatch();

  const handleSubmitForm = event => {
    event.preventDefault();

    const {
      elements: { comment, color },
    } = event.currentTarget;

    dispatch(
      addComment({ body: comment.value, color: color.value, id: activeItem.id })
    );

    event.currentTarget.reset();
  };

  return (
    <div>
      <div className="comments">
        <h2 className="comments_title">
          Comments #{activeItem ? activeItem?.id : ''}
        </h2>

        {activeItem?.comments.length > 0 && (
          <ul className="comments_list">
            {activeItem?.comments.map((comment, index) => (
              <li key={index}>
                <Comment comment={comment} />
              </li>
            ))}
          </ul>
        )}

        <form className="comments-form" onSubmit={handleSubmitForm}>
          <input className="comments-form_input" type="color" name="color" />
          <textarea
            className="comments-form_textarea"
            type="text"
            name="comment"
            placeholder="Type comment here..."
            required
            autoComplete="off"
          />
          <button className="comments-form_button" type="submit">
            Add New
          </button>
        </form>
      </div>
    </div>
  );
};
