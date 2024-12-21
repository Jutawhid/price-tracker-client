// Define the slice
import { TProduct } from "@/features/models";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: TProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<TProduct>) {
      // const { id } = action.payload;
      // const existingItem = state.items.find((item) => item.id === id);
      // if (existingItem) {
      //   existingItem. += 1;
      // } else {
      //   state.items.push({ ...action.payload, quantity: 1 });
      // }
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      // const { id, quantity } = action.payload;
      // const item = state.items.find((item) => item.id === id);
      // if (item) {
      //   item.quantity = quantity;
      // }
    },

    removeFromCart(state, action: PayloadAction<TProduct>) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload?.id,
      );
    },

    removeAllCart(state) {
      state.items = [];
    },

    increaseQuantity(state, action: PayloadAction<TProduct>) {
      // const { id } = action.payload;
      // const existingItem = state.items.find((item) => item.id === id);
      // if (existingItem) {
      //   existingItem.quantity += 1;
      // }
    },

    decreaseQuantity(state, action: PayloadAction<TProduct>) {
      // const { id } = action.payload;
      // const existingItem = state.items.find((item) => item.id === id);
      // if (existingItem && existingItem?.quantity > 1) {
      //   existingItem.quantity -= 1;
      // }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllCart,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
} = cartSlice.actions;

export const selectCartItems = (state: any) => state.cart.items;

// export const selectTotalCartItems = createSelector([selectCartItems], (items) =>
//   items.reduce((total: number, item: TProduct) => total + item.quantity, 0)
// );

export default cartSlice.reducer;
