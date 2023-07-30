import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.isLoggedIn = true;
        },
    },
});

export const { loginSuccess, logout, registerSuccess } = AuthSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export default AuthSlice.reducer;
