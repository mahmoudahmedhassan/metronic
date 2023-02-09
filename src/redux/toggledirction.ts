 
import { createSlice } from "@reduxjs/toolkit";
const lang = JSON.parse(localStorage.getItem('i18nConfig') || '{}');
const switchDrictionSlice = createSlice({
  name: 'language',
  initialState:{
    dirction: localStorage.getItem("i18nConfig")
    ? JSON.parse(localStorage.getItem("i18nConfig") || "{}")
    : 'en',  },

  reducers: {
    toggleSwitch: (state, action) => {
      console.log(state);
      return state
    }
  }
});

export const {
  toggleSwitch,
} = switchDrictionSlice.actions;
export default switchDrictionSlice.reducer;