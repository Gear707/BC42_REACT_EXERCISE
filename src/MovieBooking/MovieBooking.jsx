import React from 'react';
import SeatSelection from "./SeatSelection";
import SeatInfo from "./SeatInfo";
import "./style.scss";

function MovieBooking() {
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
                        <SeatSelection />
                    </div>
                    <div className="col-4 text-light">
                        <div className="text-center fs-3 text-uppercase fw-bold my-3 text-info">
                            Danh sách ghế đang chọn
                        </div>
                        <SeatInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieBooking;