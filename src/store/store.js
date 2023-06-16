import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import cartUiSlice from "./slice/cartUISlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
