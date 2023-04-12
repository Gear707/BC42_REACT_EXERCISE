import seatsData from "../MovieBooking/data.json";

const defaultState = {
    allSeats: seatsData,
    selectedSeats: [],
};

function movieBookingReducer(state = defaultState, action) {
    switch (action.type) {
        case "add_seat": {
            // cập nhật danh sách ghế đang chọn
            const currentSeats = [...state.selectedSeats];
            // so sánh mã số ghế trong state và mã số ghế trong danh sách đang chọn
            let index = currentSeats.findIndex((seat) => seat.soGhe === action.payload.soGhe);
            if (index !== -1) {
                // nếu tìm thấy ghế trong danh sách đang chọn thì xóa đi
                currentSeats.splice(index, 1);
                return { ...state, selectedSeats: currentSeats };
            }
            else {
                // nếu chưa có thì thêm mới mã số ghế vào danh sách chọn
                const seats = [...currentSeats, action.payload];
                return { ...state, selectedSeats: seats };
            }
        }
        case "delete_seat": {
            const seats = state.selectedSeats.filter((seat) => seat.soGhe !== action.number);
            return { ...state, selectedSeats: seats };
        }
        default:
            return state;
    }
}

export default movieBookingReducer;