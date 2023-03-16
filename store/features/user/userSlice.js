import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    unsetUser: (state) => {
      state.value = null;
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
