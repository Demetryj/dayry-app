import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    items: [],
    activeItem: null,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);

      state.items.splice(index, 1);
    },
    changeActiveItem(state, action) {
      state.activeItem = action.payload;
    },
    addComment(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      item.comments.push(action.payload);

      state.activeItem.comments.push(action.payload);
    },
  },
});

export const { addItem, deleteItem, changeActiveItem, addComment } =
  commentSlice.actions;
export const commentReducer = commentSlice.reducer;
