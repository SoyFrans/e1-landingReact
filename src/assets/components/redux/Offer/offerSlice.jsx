import { createSlice } from "@reduxjs/toolkit";
import { offers } from "../../ExternalComponents/Data";

const INITIAL_STATE = {
    offers: offers
};

export const offersSlice = createSlice(
    {
        name: "offers",
        initialState: INITIAL_STATE,
        reducers: {
            getOffers: state => {
                return state;
            },
        },
    },
);

export const {getOffers} = offersSlice.actions;

export default offersSlice.reducer;