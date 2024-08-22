import { configureStore } from "@reduxjs/toolkit";
import listShop from "./shoplistSlice"

export const store = configureStore({
    reducer: {
        list: listShop
    }
})