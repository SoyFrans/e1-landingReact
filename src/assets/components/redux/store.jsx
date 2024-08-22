import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import categoriesReducer from "./Categories/categoriesSlice";
import productsReducer from "./Products/productsSlice";
import sellersReducer from "./Sellers/sellersSlice";
import offersReducer from "./Offer/offerSlice";

const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    sellers: sellersReducer,
    offers: offersReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whiteList: []
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const storeRedux = configureStore({
    reducer: persistedReducer,
})

export const persistor = persistStore(storeRedux);
