import { createSlice } from '@reduxjs/toolkit';

// Initial state for the authentication slice
const initialState = {
  isAuthenticated: false, // Indicates whether the user is logged in
  user: null, // Stores user information when authenticated
};

// Slice for authentication-related state and actions
const authSlice = createSlice({
  name: 'auth', // The name of this slice in the Redux store
  initialState, // The initial state for the slice
  reducers: {
    // Reducer to handle login actions
    login: (state, action) => {
      state.isAuthenticated = true; // Set the authentication flag to true
      state.user = action.payload; // Update the user object with the payload (user details)
    },

    // Reducer to handle logout actions
    logout: (state) => {
      state.isAuthenticated = false; // Reset the authentication flag to false
      state.user = null; // Clear the user data from the state
    },
  },
});

// Export the actions (login and logout) to be used in components
export const { login, logout } = authSlice.actions;

// Export the reducer to be included in the Redux store
export default authSlice.reducer;
