import { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../Item';
import { selectItems, selectActiveItem } from '../../redax/comment/selectors';
import {
  addItem,
  changeActiveItem,
  deleteItems,
} from '../../redax/comment/commentSlice';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import './Items.css';

export const Items = () => {
  const [inputValue, setInputValue] = useState('');
  const [itemsToDelete, setItemsToDelete] = useState([]);
  const dispatch = useDispatch();
  const allItems = useSelector(selectItems);
  const activeItem = useSelector(selectActiveItem);

  useEffect(() => {
    if (allItems.length === 1 && !activeItem) {
      dispatch(changeActiveItem(allItems[0]));
    }

    if (allItems.length === 0) {
      dispatch(changeActiveItem(null));
    }
  }, [activeItem, allItems, dispatch]);

  const handleSubmitForm = event => {
    event.preventDefault();
    const newAtem = {
      id: generateRandomNumber(),
      name: event.target.item.value,
      comments: [],
    };
    dispatch(addItem(newAtem));

    if (allItems.length === 0) {
      dispatch(changeActiveItem(newAtem));
    }

    setInputValue('');
  };

  const handleClickCheck = (id, isChacked) => {
    if (isChacked) {
      setItemsToDelete(prev => [...prev, id]);
    } else {
      setItemsToDelete(prev => prev.filter(elem => elem !== id));
    }
  };

  const handleItemClick = item => dispatch(changeActiveItem(item));

  const handleButtonDeleteClick = () => {
    dispatch(deleteItems(itemsToDelete));

    if (itemsToDelete.includes(activeItem.id)) {
      allItems.forEach((item, index, array) => {
        if (activeItem.id === item.id) {
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
    <div>
      <div className="items">
        <h2 className="items_title">Items</h2>

        <form className="items-form" onSubmit={handleSubmitForm}>
          {/* <input
            className="items-form_input"
            type="text"
            name="item"
            placeholder="Type name here..."
            required
            autoComplete="off"
          /> */}
          <Input
            placeholder="Type name here..."
            name="item"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            required
          />
          {/* <button className="items-form_button" type="submit">
            Add New
          </button> */}
          <Button type="primary" htmlType="submit">
            Add New
          </Button>
        </form>

        {allItems.length > 0 && (
          <ul className="items_list">
            {allItems.map(item => (
              <li
                className="item"
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <Item data={item} handleClick={handleClickCheck} />
              </li>
            ))}
          </ul>
        )}

        <Button
          type="primary"
          danger
          ghost
          onClick={handleButtonDeleteClick}
          // disabled={itemsToDelete.length === 0 ? 1 : 0}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
