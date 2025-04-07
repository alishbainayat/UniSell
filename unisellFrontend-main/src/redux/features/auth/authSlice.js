import { createSlice } from "@reduxjs/toolkit";

// Utility function to get the initial state from localStorage
const loadUserFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("user");
    return serializedState
      ? { user: JSON.parse(serializedState) }
      : { user: null };
  } catch (err) {
    console.error("Failed to load user from localStorage:", err);
    return { user: null };
  }
};

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      // Check if token is returned from edit profile and needs update
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
