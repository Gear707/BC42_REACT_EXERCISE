import React from 'react';

function SeatSelection({ allSeats, selectedSeats, onAddSeat }) {
    return (
        <div className="mb-5">
            {allSeats.map((row, index) => {
                return (
                    // render ra tất cả hàng ghế
                    <div key={index} className="customizeRows fs-5 fw-bold">
                        {row.hang} {index === 0 ?
                            row.danhSachGhe.map((seat, index) => {
                                return (
                                    // ở hàng đầu tiên khi index = 0 thì chỉ render số thứ tự
                                    <button key={index} className="rowNumber">{seat.soGhe}</button>
                                )
                            })
                            :
                            row.danhSachGhe.map((seat, index) => {
                                // trường hợp ghế đã đặt từ trước thì gán class bookedSeat (màu cam)
                                let bookedSeatClass = seat.daDat ? "bookedSeat" : "";
                                let selectedSeatClass = "";
                                // kiểm tra tất cả ghế đã render với các ghế đang có trong danh sách chọn
                                let seatIndex = selectedSeats.findIndex((selectedSeat) => selectedSeat.soGhe === seat.soGhe);
                                // nếu tồn tại ghế đã chọn thì gán class selectedSeat (màu xanh)
                                if (seatIndex !== -1) selectedSeatClass = "selectedSeat";
                                return (
                                    // nếu ghế đã được đặt trước thì sẽ có màu cam & không thể chọn được
                                    // nếu ghế còn trống thì sẽ có màu trắng & chọn bình thường
                                    <button key={index}
                                        disabled={seat.daDat}
                                        className={`${bookedSeatClass} ${selectedSeatClass} emptySeats fw-bold`}
                                        onClick={() => onAddSeat(seat.soGhe, seat.gia)}>
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