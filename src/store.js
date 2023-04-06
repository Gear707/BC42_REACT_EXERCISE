import { configureStore } from "@reduxjs/toolkit";

function reducer(state = { count: 0 }, action) {
    console.log("reducer:", state, action);

    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: {
        reducer
    },
});


export default store;