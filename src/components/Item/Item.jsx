import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { deleteItem } from '../../redax/comment/commentSlice';
import { selectActiveItem, selectItems } from '../../redax/comment/selectors';
import { changeActiveItem } from '../../redax/comment/commentSlice';
import './Item.css';
import { useState } from 'react';

export const Item = ({ data: { id, name, comments }, handleClick }) => {
  const [isChacked, setIsChacked] = useState(false);

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

  const handleChange = event => {
    event.stopPropagation();

    setIsChacked(!isChacked);

    handleClick(id, event.target.checked);
  };

  return (
    <div
      className={
        activeItem?.id === id ? 'item_wrapper active-item' : 'item_wrapper'
      }
    >
      <Checkbox onChange={handleChange} checked={isChacked} />
      <p className="item_text">{name}</p>
      <span className="item_count">{comments.length}</span>
      {/* <button
        className="item_button"
        type="button"
        onClick={handleButtonDeleteClick}
      >
        Delete
      </button> */}
      <Button type="primary" danger ghost onClick={handleButtonDeleteClick}>
        Delete
      </Button>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};
