import { configureStore } from "@reduxjs/toolkit";
import cartslicer from "./cartslice";

const store = configureStore({
  reducer: {
    cart: cartslicer,
  },
});

export default store;
