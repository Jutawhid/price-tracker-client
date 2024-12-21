import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TAction = {
  name: string;
  code: string;
};
type TLanguageState = {
  selectedLanguage: { name: string; code: string };
};

const initialState: TLanguageState = {
  selectedLanguage: { name: "🇬🇧 EN", code: "en" },
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<TAction>) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state: { language: TLanguageState }) =>
  state.language.selectedLanguage;

export default languageSlice.reducer;
