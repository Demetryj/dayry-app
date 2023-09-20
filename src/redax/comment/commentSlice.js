import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    items: [],
    activeItem: null,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);

      state.items.splice(index, 1);
    },
    changeActiveItem(state, action) {
      state.activeItem = action.payload;
    },
  },
});

export const { addItem, deleteItem, method } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
