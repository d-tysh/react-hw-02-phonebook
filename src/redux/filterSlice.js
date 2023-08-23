const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            state = action.payload;
            return state;
        }
    }
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;