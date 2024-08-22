import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../ExternalComponents/Data";

const INITIAL_STATE = {
    categories: categories,
    selectCategory: null,
};

export const categoriesSlice = createSlice(
    {
        name: "categories",
        initialState: INITIAL_STATE,
        reducers: {
            selectCategory: (state, action) => {
                return {
                    ...state,
                    selectedConsole: action.payload !== state.selectCategory ? action.payload : null,
                }
            },
            getCategories: state => {
                return state;
            },
        },
    }
);

export const { getCategories, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;