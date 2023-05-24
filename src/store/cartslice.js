import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    del(state, action) {
      // return state.filter((item) => {
      //   item.id !== action.payload;
      // });             ///delets all


      return state.filter((item) => item.id !== action.payload);

    },
  },
});

export default cartslice.reducer;
export const { add, del } = cartslice.actions;
