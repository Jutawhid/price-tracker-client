import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import cartSidebarReducer from "@/context/cart/cartSidebarSlice";
import cartReducer from "@/context/cart/cartSlice";
import languageReducer from "@/context/language-switch/languageSlice";

import { persistReducer, persistStore } from "redux-persist";
import checkOutSlice from "./cart/checkOutSlice";

const rootReducer = combineReducers({
  language: languageReducer,
  cartSidebar: cartSidebarReducer,
  cart: cartReducer,
  checkout: checkOutSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "checkout"], // Specify the reducer to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});
export const persistor = persistStore(store);
