import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ comment: { body, color } }) => {
  return (
    <div className="comment_wrapper">
      <div className="comment_color" style={{ backgroundColor: color }}></div>
      <span className="comment_text">{body}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    isModalOpen: PropTypes.string.isRequired,
  }).isRequired,
};
