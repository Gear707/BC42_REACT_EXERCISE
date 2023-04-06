import { configureStore } from "@reduxjs/toolkit";

function allSeatsReducer(state = { allSeats: [] }, action) {
    switch (action.type) {
        case "allSeats/render_seats":
            const allSeats = action.payload;
            return { ...state, allSeats };
        default:
            return state;
    }
}
function selectedSeatsReducer(state = { selectedSeats: [] }, action) {
    switch (action.type) {
        case "selectedSeats/add_seat": {
            // cập nhật danh sách ghế đang chọn
            const currentSeats = [...state.selectedSeats];
            console.log("Current selected seats:", currentSeats);
            // so sánh mã số ghế trong state và mã số ghế trong danh sách đang chọn
            let index = currentSeats.findIndex((seat) => seat.soGhe === action.payload.soGhe);
            if (index !== -1) {
                // nếu tìm thấy ghế trong danh sách đang chọn thì xóa đi
                currentSeats.splice(index, 1);
                return { ...state, selectedSeats: currentSeats };
            } else {
                // nếu chưa có thêm mới mã số ghế vào danh sách chọn
                const seats = [...currentSeats, action.payload];
                return { ...state, selectedSeats: seats };
            }
        }
        case "selectedSeats/delete_seat": {
            const seats = state.selectedSeats.filter((seat) => seat.soGhe !== action.payload);
            return { ...state, selectedSeats: seats };
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