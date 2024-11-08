import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TPanelState = {
  visible: boolean;
};

const initialState: TPanelState = {
  visible: false,
};

const cartSidebarSlice = createSlice({
  name: "cart-sidebar",
  initialState,
  reducers: {
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
});

export const { setVisible } = cartSidebarSlice.actions;

export default cartSidebarSlice.reducer;
