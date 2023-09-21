import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteItem } from '../../redax/comment/commentSlice';
import { selectActiveItem, selectItems } from '../../redax/comment/selectors';
import { changeActiveItem } from '../../redax/comment/commentSlice';
import './Item.css';

export const Item = ({ data: { id, name, comments } }) => {
  const dispatch = useDispatch();
  const activeItem = useSelector(selectActiveItem);
  const allItems = useSelector(selectItems);

  const handleButtonDeleteClick = event => {
    event.stopPropagation();
    dispatch(deleteItem(id));

    if (activeItem.id === id) {
      allItems.forEach((item, index, array) => {
        if (id === item.id) {
          if (index === array.length - 1) {
            dispatch(changeActiveItem(allItems[allItems.length - 2]));
          } else {
            dispatch(changeActiveItem(allItems[allItems.length - 1]));
          }
        } else {
          return;
        }
      });
    }
  };

  return (
    <div
      className={
        activeItem?.id === id ? 'item_wrapper active-item' : 'item_wrapper'
      }
    >
      <p className="item_text">{name}</p>
      <span className="item_count">{comments.length}</span>
      <button
        className="item_button"
        type="button"
        onClick={handleButtonDeleteClick}
      >
        Delete
      </button>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
};
