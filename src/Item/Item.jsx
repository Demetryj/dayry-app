import { useDispatch } from "react-redux";
import { deleteItem } from "../redax/comment/commentSlice";
import "./Item.css";

export const Item = ({ data: { id, name, comments } }) => {
  const dispatch = useDispatch();

  const handleButtonDeleteClick = () => dispatch(deleteItem(id));

  return (
    <div className="item_wrapper">
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
