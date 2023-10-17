import { createSlice } from "@reduxjs/toolkit";

export const Action = createSlice({
  name: 'Todo',
  initialState: [
    { id: 1, description: 'newtodo', checked: false },
    { id: 2, description: 'sectodo', checked: false },
    { id: 3, description: 'therdtodo', checked: false },
  ],
  reducers: {
    handleDelet: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
    handleAdd: (state, action) => {
      const newItem = {
        id: state.length + 1,
        description: action.payload,
        checked: false,
      };
      state.push(newItem);
    },
  },
});

export const { handleDelet, handleAdd } = Action.actions;
export default Action.reducer;

export const handleAddAsync = (newItem) => (dispatch) => {
  dispatch(handleAdd(newItem));
};
