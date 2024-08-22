import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../ExternalComponents/Data";

const INITIAL_STATE = {
    offers: Array(4)
    .fill(0)
    .reduce((acc)=> {
        const IDs = acc.map((value)=> value.id);
        let newOffers;
        do {
            newOffers = {
                ...products[Math.floor(Math.random() * products.length)],
            };
        } while (IDs.includes(newOffers.id));

        return [...acc, newOffers];
    }, [])
};

export const sellerSlice = createSlice(
    {
        name: "sellers",
        initialState: INITIAL_STATE,
        reducers: {
            getSellers: state => {
                return state;
            },
        },
    },
);

export const {getSellers} = sellerSlice.actions;

export default sellerSlice.reducer;