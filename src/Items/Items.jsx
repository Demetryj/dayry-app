import { useDispatch, useSelector } from "react-redux";
import { Item } from "../Item";
import { selectItems } from "../redax/comment/selectors";
import { addItem } from "../redax/comment/commentSlice";
import { generateRandomNumber } from "../utils/generateRandomNumber";
import "./Items.css";

export const Items = () => {
  const dispatch = useDispatch();
  const allItems = useSelector(selectItems);

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    dispatch(
      addItem({
        id: generateRandomNumber(),
        name: event.target.item.value,
        comments: [],
      })
    );

    event.target.reset();
  };

  return (
    <div>
      <div className="items">
        <h2 className="items_title">Items</h2>

        <form className="items-form" onSubmit={handleAddButtonClick}>
          <input
            className="items-form_input"
            type="text"
            name="item"
            placeholder="Type name here..."
            required
          />
          <button className="items-form_button" type="submit">
            Add New
          </button>
        </form>

        {allItems.length > 0 && (
          <ul className="items_list">
            {allItems.map((item) => (
              <li className="item" key={item.id}>
                <Item data={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
