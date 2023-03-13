import React, { useState } from 'react';
import contentStyle from './content.module.css';
import modelStyle from './model.module.css';
import glassStyle from './glass.module.css';

function Content() {
  const [glassImageURL, setGlassImageURL] = useState("./img/v1.png");

  return (
    <div>
      <img src="./img/background.jpg" alt="background image" className={contentStyle.backgroundImg} />
      <div className={contentStyle.overlay}></div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img src="./img/model.jpg" alt="model 1" className={modelStyle.modelImg1} />
          </div>
          <div className='col-6'>
            <img src="./img/model.jpg" alt="model 2" className={modelStyle.modelImg2} />
            <span className={modelStyle.sampleSpan}>
              <img src={glassImageURL} alt="sample" className={modelStyle.sampleImg} />
            </span>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className={`row align-items-center justify-content-between ${glassStyle.glassList}`}>
          <div className={`col-1 ${glassStyle.glassItem}`}>
            <img src="./img/v1.png" className={glassStyle.glassImg} alt="glass 1" onClick={() => setGlassImageURL("./img/v1.png")} />
          </div>
          <div className={`col-1 ${glassStyle.glassItem}`}>
            <img src="./img/v2.png" className={glassStyle.glassImg} alt="glass 2" onClick={() => setGlassImageURL("./img/v2.png")} />
          </div>
          <div className={`col-1 ${glassStyle.glassItem}`}>
            <img src="./img/v3.png" className={glassStyle.glassImg} alt="glass 3" onClick={() => setGlassImageURL("./img/v3.png")} />
          </div>
          <div className={`col-1 ${glassStyle.glassItem}`}>
            <img src="./img/v4.png" className={glassStyle.glassImg} alt="glass 4" onClick={() => setGlassImageURL("./img/v4.png")} />
          </div>
          <div className={`col-1 ${glassStyle.glassItem}`}>
            <img src="./img/v5.png" className={glassStyle.glassImg} alt="glass 5" onClick={() => setGlassImageURL("./img/v5.png")} />
          </div>
          <div className={`col-1 ${glassStyle.glassItem}`}>
            <img src="./img/v6.png" className={glassStyle.glassImg} alt="glass 6" onClick={() => setGlassImageURL("./img/v6.png")} />
          </div>
          <div className={`col-1 ${glassStyle.glassItem}`}>
            <img src="./img/v7.png" className={glassStyle.glassImg} alt="glass 7" onClick={() => setGlassImageURL("./img/v7.png")} />
          </div>
          <div className={`col-1 ${glassStyle.glassItem}`}>
            <img src="./img/v8.png" className={glassStyle.glassImg} alt="glass 8" onClick={() => setGlassImageURL("./img/v8.png")} />
          </div>
          <div className={`col-1 ${glassStyle.glassItem}`}>
            <img src="./img/v9.png" className={glassStyle.glassImg} alt="glass 9" onClick={() => setGlassImageURL("./img/v9.png")} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;