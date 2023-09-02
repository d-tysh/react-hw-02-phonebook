const { createSlice } = require("@reduxjs/toolkit");
const { register, login, logout, fetchCurrentUser } = require("./operations");

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrUser: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(fetchCurrentUser.pending, (state) => {
                state.isFetchingCurrUser = true;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isFetchingCurrUser = false;
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                state.isFetchingCurrUser = false;
            })
    }
})

export const authReducer = authSlice.reducer;