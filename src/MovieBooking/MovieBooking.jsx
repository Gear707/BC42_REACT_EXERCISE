import React from 'react';
import SeatSelection from "./SeatSelection";
import SeatInfo from "./SeatInfo";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";

function MovieBooking() {
    // nhận lấy các state từ store
    const { allSeats, selectedSeats } = useSelector((state) => {
        const allSeats = state.allSeatsReducer.allSeats;
        const selectedSeats = state.selectedSeatsReducer.selectedSeats;

        return { allSeats, selectedSeats };
    });

    // gửi các action lên store
    const dispatch = useDispatch();

    // thêm ghế vào danh sách chọn
    const handleAddSeat = (seatNumber, price) => {
        const selectedSeats = {
            soGhe: seatNumber,
            gia: price
        };
        dispatch({ type: "selectedSeats/add_seat", payload: selectedSeats });
    };

    // xóa ghế đang chọn khỏi danh sách
    const handleDeleteSeat = (seatNumber) => {
        dispatch({ type: "selectedSeats/delete_seat", payload: seatNumber });
    };

    // chỉnh style cho phần background
    const bgStyle = {
        backgroundImage: "url(./img/bgmovie.jpg)",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        fontFamily: "JetBrains Mono"
    };

    return (
        <div style={bgStyle}>
            <div className="overlay container-fluid">
                <div className="row">
                    <div className="col-8 text-light">
                        <div className="fs-2 text-center text-uppercase my-2 fw-bold text-warning">
                            Đặt vé xem phim CyberLearn.vn
                        </div>
                        <div className="mt-2 fs-4 fw-bold text-center">Màn hình</div>
                        <div className="d-flex flex-row justify-content-center mt-2">
                            <div className="screen"></div>
                        </div>
                        <SeatSelection allSeats={allSeats}
                            selectedSeats={selectedSeats}
                            onAddSeat={handleAddSeat} />
                    </div>
                    <div className="col-4 text-light">
                        <div className="text-center fs-3 text-uppercase fw-bold my-3 text-info">
                            Danh sách ghế đang chọn
                        </div>
                        <SeatInfo selectedSeats={selectedSeats} onDeleteSeat={handleDeleteSeat} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieBooking;