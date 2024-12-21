// Define the slice
import { TProduct } from "@/features/models";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckOutState {
  items: TProduct[];
}

const initialState: CheckOutState = {
  items: [],
};

const checkOutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addToCheckOut(state, action: PayloadAction<TProduct>) {
      // const { _id, quantity } = action.payload;
      // const existingItem = state.items.find((item) => item._id === _id);
      // if (!existingItem) {
      //   state.items.push({ ...action.payload, quantity: quantity });
      // }
    },
    increaseCheckOutQuantity(state, action: PayloadAction<TProduct>) {
      // const { _id } = action.payload;
      // const existingItem = state.items.find((item) => item._id === _id);
      // if (existingItem) {
      //   existingItem.quantity += 1;
      // }
    },

    decreaseCheckOutQuantity(state, action: PayloadAction<TProduct>) {
      // const { _id } = action.payload;
      // const existingItem = state.items.find((item) => item._id === _id);
      // if (existingItem && existingItem?.quantity > 1) {
      //   existingItem.quantity -= 1;
      // }
    },
    removeFromCheckOut(state, action: PayloadAction<TProduct>) {
      // state.items = state.items.filter(
      //   (item) => item._id !== action.payload?._id
      // );
    },
    removeAllCheckOut(state) {
      state.items = [];
    },
    updateCheckOutQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      // if (item) {
      //   item.quantity = quantity;
      // }
    },
  },
});

export const {
  addToCheckOut,
  removeFromCheckOut,
  removeAllCheckOut,
  increaseCheckOutQuantity,
  decreaseCheckOutQuantity,
  updateCheckOutQuantity,
} = checkOutSlice.actions;

export const selectCheckOutItems = (state: any) => state.checkout.items;

// export const selectTotalCheckoutItems = createSelector(
//   [selectCheckOutItems],
//   (items) =>
//     items.reduce((total: number, item: TProduct) => total + item.quantity, 0)
// );
// export const selectedTotalCheckoutItemsPrice = createSelector(
//   [selectCheckOutItems],
//   (items) =>
//     items.reduce(
//       (total: number, item: TProduct) =>
//         total + (item.unitPrice * item.quantity || 1),
//       0
//     )
// );

export default checkOutSlice.reducer;
