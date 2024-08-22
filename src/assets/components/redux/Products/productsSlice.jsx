import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../ExternalComponents/Data";

const INITIAL_STATE = {
    products: products
    //Falta la función de la suma de todos los productos!!!
};

export const productsSlice = createSlice(
    {
        name: "products",
        initialState: INITIAL_STATE,
        reducers: {
            getProducts: state=>{
                return state;
            },
        },
    }
);

export const {getProducts} = productsSlice.actions;

export default productsSlice.reducer;