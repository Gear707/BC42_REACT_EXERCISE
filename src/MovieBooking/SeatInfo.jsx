import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function SeatInfo() {
    const { selectedSeats } = useSelector(state => state);

    const dispatch = useDispatch();

    // xóa ghế đang chọn khỏi danh sách
    const handleDeleteSeat = (number) => {
        dispatch({ type: "delete_seat", number });
    };

    // hoàn tất đặt vé cho những ghế đang chọn
    const handleCheckout = () => {
        dispatch({ type: "checkout_seat" });
    };

    return (
        <div>
            <div className="d-flex">
                <button className="bookedSeat ms-0"></button>
                <span className="mx-3 align-self-center">Ghế đã đặt</span>
            </div>
            <div className="d-flex my-3">
                <button className="selectedSeat"></button>
                <span className="mx-3 align-self-center">Ghế đang chọn</span>
            </div>
            <div className="d-flex">
                <button className="emptySeats ms-0"></button>
                <span className="mx-3 align-self-center">Ghế chưa đặt</span>
            </div>
            <div className="d-flex mt-3">
                <button className="checkoutSeat ms-0"></button>
                <span className="mx-3 align-self-center">Ghế vừa mới đặt</span>
            </div>
            <div className="mt-4">
                <table className="table table-bordered text-light text-center">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedSeats.map((seat, index) => {
                            return (
                                <tr key={index}>
                                    <td>{seat.soGhe}</td>
                                    <td>{seat.gia}</td>
                                    <td>
                                        <button className="btn btn-danger"
                                            onClick={() => handleDeleteSeat(seat.soGhe)}>X</button>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td>Tổng tiền</td>
                            <td>{selectedSeats.reduce((total, seat) => total += seat.gia, 0)}</td>
                            <td>
                                <button className="btn btn-success"
                                    onClick={handleCheckout}>Đặt vé</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default SeatInfo;