import React from 'react';
import glassStyle from './glass.module.css';

function GlassItem({ glass, onSelectGlass }) {
    // nhận về 2 props (glass, onSelectGlass) từ component cha GlassApp
    return (
        // onSelectGlass sẽ nhận 3 tham số đầu vào đã khai báo ở component cha (chính là hàm handleGlass)
        <div className={glassStyle.glassItem} onClick={() => onSelectGlass(glass.url, glass.name, glass.desc)}>
            <img src={glass.url} className={glassStyle.glassImg} alt={`glass ${glass.id}`} />
        </div>
    )
}

export default GlassItem;