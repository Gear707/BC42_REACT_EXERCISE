import { configureStore } from "@reduxjs/toolkit";
import movieBookingReducer from "./reducers/movieBookingReducer";

const store = configureStore({
    reducer: movieBookingReducer,
});

export default store;