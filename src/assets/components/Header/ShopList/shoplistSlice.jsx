import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "shopList",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            return state.filter(item => item !== action.payload);
        }
    }
})

export const {addItem, removeItem}= listSlice.actions;

export default listSlice.reducer;