import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to store cart items
    totalItems: 0, // Total number of items in the cart
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      state.totalItems++;
    },
    // We'll add more reducers later (removeItem, incrementQuantity, decrementQuantity)
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;