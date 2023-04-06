import React from 'react';

function SeatInfo() {
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
            <div className="mt-4">
                <table className="table table-bordered text-light text-center">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default SeatInfo;