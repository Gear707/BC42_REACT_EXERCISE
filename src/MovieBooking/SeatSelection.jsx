import React from 'react';

function SeatSelection({ seats }) {
    return (
        <div>
            {seats.map((rows, index) => {
                return (
                    // lần map đầu tiên sẽ render ra số hàng
                    <div key={index} className="customizeRows fs-5 fw-bold">
                        {rows.hang} {index === 0 ?
                            rows.danhSachGhe.map((seat) => {
                                return (
                                    // ở hàng đầu tiên khi index = 0 thì chỉ render ra số
                                    <button className="rowNumber">{seat.soGhe}</button>
                                )
                            })
                            :
                            rows.danhSachGhe.map((seat, index) => {
                                return (
                                    // lần map thứ 2 sẽ render ra tất cả số ghế cho từng hàng
                                    // nếu ghế đã được đặt trước thì sẽ có màu cam & không thể chọn được
                                    // nếu ghế còn trống thì sẽ có màu trắng & chọn bình thường
                                    <button key={index}
                                        className={`${seat.daDat ? "bookedSeat" : "emptySeats"} fw-bold`}>
                                        {seat.soGhe}
                                    </button>
                                )
                            })}
                    </div>
                );
            })}
        </div>
    )
}

export default SeatSelection;