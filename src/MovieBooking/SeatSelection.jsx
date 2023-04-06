import React from 'react';

function SeatSelection({ allSeats, selectedSeats, onAddSeat }) {
    return (
        <div>
            {allSeats.map((rows, index) => {
                return (
                    // lần map đầu tiên sẽ render ra số hàng
                    <div key={index} className="customizeRows fs-5 fw-bold">
                        {rows.hang} {index === 0 ?
                            rows.danhSachGhe.map((seat) => {
                                return (
                                    // ở hàng đầu tiên khi index = 0 thì chỉ render ra số
                                    <button key={seat.soGhe} className="rowNumber">{seat.soGhe}</button>
                                )
                            })
                            :
                            rows.danhSachGhe.map((seat) => {
                                // trường hợp ghế đã đặt từ trước thì ta gán class bookedSeat
                                let bookedSeatClass = seat.daDat ? "bookedSeat" : "";
                                let selectedSeatClass = "";
                                // kiểm tra tất cả ghế đã render với ghế đang có trong danh sách chọn
                                let index = selectedSeats.findIndex((selectedSeat) => selectedSeat.soGhe === seat.soGhe);
                                // nếu tồn tại ghế đã chọn thì gán class selectedSeat
                                if (index !== -1) selectedSeatClass = "selectedSeat";
                                return (
                                    // lần map thứ 2 sẽ render ra tất cả số ghế cho từng hàng
                                    // nếu ghế đã được đặt trước thì sẽ có màu cam & không thể chọn được
                                    // nếu ghế còn trống thì sẽ có màu trắng & chọn bình thường
                                    <button key={seat.soGhe}
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