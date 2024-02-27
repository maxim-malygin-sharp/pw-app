import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isAuthenticated: false,
    isLoading: false,
    error: null,
};


const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    signin(state, action) {
        state.auth.push({
            ...state,
            isLoading: true,
        })
    },
  },
});

export const { signin } = authSlice.actions;
export default authSlice.reducer;