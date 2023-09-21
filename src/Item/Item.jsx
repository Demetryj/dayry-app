import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../redax/comment/commentSlice';
import { selectActiveItem, selectItems } from '../redax/comment/selectors';
import { changeActiveItem } from '../redax/comment/commentSlice';
import './Item.css';

export const Item = ({ data: { id, name, comments } }) => {
  const dispatch = useDispatch();
  const activeItem = useSelector(selectActiveItem);
  const allItems = useSelector(selectItems);

  const handleButtonDeleteClick = () => {
    dispatch(deleteItem(id));

    if (activeItem.id === id) {
      dispatch(changeActiveItem(allItems[1]));
    }
  };

  return (
    <div
      className={
        activeItem.id === id ? 'item_wrapper active-item' : 'item_wrapper'
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
