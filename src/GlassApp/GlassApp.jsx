import React, { useState } from 'react';
import headerStyle from './header.module.css';
import contentStyle from './content.module.css';
import modelStyle from './model.module.css';
import GlassItem from "./GlassItem";
import data from './data.json';

console.log(data);

function GlassApp() {
  // tạo mảng mới glassList từ data đã import
  const glassList = [...data];

  // tạo state mặc định cho 3 thuộc tính của glassList: url, name, desc
  const [glassImageURL, setGlassImageURL] = useState(glassList[0].url);
  const [glassName, setGlassName] = useState(glassList[0].name);
  const [glassDesc, setGlassDesc] = useState(glassList[0].desc);

  // viết hàm handleGlass thay đổi state cho 3 thuộc tính trên
  const handleGlass = (url, name, desc) => {
    setGlassImageURL(url);
    setGlassName(name);
    setGlassDesc(desc);
  };

  // chỉnh css cho background
  const bgStyle = {
    backgroundImage: 'url(./img/background.jpg)',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div style={bgStyle}>
      <div className={contentStyle.overlay}>
        <h3 className={`d-flex justify-content-center align-items-center ${headerStyle.header}`}>
          TRY GLASSES APP ONLINE
        </h3>
        <div className='container'>
          <div className='d-flex justify-content-center align-items-center my-5 position-relative'>
            <img src="./img/model.jpg" alt="model 2" className={modelStyle.modelImg} />
            <img src={glassImageURL} alt="sample" className={modelStyle.sampleGlass} />
            <div className={modelStyle.details}>
              <h5 className={modelStyle.brandName} >{glassName}</h5>
              <p className={modelStyle.description} >{glassDesc}</p>
            </div>
          </div>
        </div>
        <div className="container text-center bg-light">
          <div className="d-flex justify-content-center align-items-center">
            {glassList.map((item) => {
              return (
                <div key={item.id} className="m-auto p-auto">
                  {/* truyền hàm handleGlass đã khai báo ở trên vào props của component con GlassItem */}
                  <GlassItem glass={item} onSelectGlass={handleGlass} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlassApp;