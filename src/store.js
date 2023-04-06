import { configureStore } from "@reduxjs/toolkit";
import data from "./MovieBooking/data.json";

function allSeatsReducer(state = { allSeats: [...data] }, action) {
    return state;
}

function selectedSeatsReducer(state = { selectedSeats: [] }, action) {
    switch (action.type) {
        case "selectedSeats/add_seat": {
            // cập nhật danh sách ghế đang chọn
            const currentSeats = [...state.selectedSeats];
            // so sánh mã số ghế trong state và mã số ghế trong danh sách đang chọn
            let index = currentSeats.findIndex((seat) => seat.soGhe === action.payload.soGhe);
            if (index !== -1) {
                // nếu tìm thấy ghế trong danh sách đang chọn thì xóa đi
                currentSeats.splice(index, 1);
                return { ...state, selectedSeats: currentSeats };
            } else {
                // nếu chưa có thì thêm mới mã số ghế vào danh sách chọn
                const newSeats = [...currentSeats, action.payload];
                return { ...state, selectedSeats: newSeats };
            }
        }
        case "selectedSeats/delete_seat": {
            const newSeats = state.selectedSeats.filter((seat) => seat.soGhe !== action.payload);
            return { ...state, selectedSeats: newSeats };
        }
        default:
            return state;
    }
}

const store = configureStore({
    reducer: {
        allSeatsReducer,
        selectedSeatsReducer
    }
});

export default store;