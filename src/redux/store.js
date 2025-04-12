import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // We'll create this next

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;