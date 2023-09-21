import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../Item';
import { selectItems, selectActiveItem } from '../redax/comment/selectors';
import { addItem, changeActiveItem } from '../redax/comment/commentSlice';
import { generateRandomNumber } from '../utils/generateRandomNumber';
import './Items.css';
import { useEffect } from 'react';

export const Items = () => {
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

    event.target.reset();
  };

  const handleItemClick = item => dispatch(changeActiveItem(item));

  return (
    <div>
      <div className="items">
        <h2 className="items_title">Items</h2>

        <form className="items-form" onSubmit={handleSubmitForm}>
          <input
            className="items-form_input"
            type="text"
            name="item"
            placeholder="Type name here..."
            required
            autoComplete="off"
          />
          <button className="items-form_button" type="submit">
            Add New
          </button>
        </form>

        {allItems.length > 0 && (
          <ul className="items_list">
            {allItems.map(item => (
              <li
                className="item"
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <Item data={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
