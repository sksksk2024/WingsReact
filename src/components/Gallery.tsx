import { useState } from 'react';
import './../index.css';

const Gallery = () => {
  const [angle, setAngle] = useState(0);

  const gallerySpin = (sign: boolean) => {
    setAngle((prevAngle) => (sign ? prevAngle - 120 : prevAngle + 120));
  };

  return (
    <section className="gallery-section">
      <div className="center">
        {/* Radio buttons for image selection */}
        <input type="radio" name="active" id="tab-1" defaultChecked />
        <input type="radio" name="active" id="tab-2" />
        <input type="radio" name="active" id="tab-3" />
        <input type="radio" name="active" id="tab-4" />

        {/* Sliders to choose images */}
        <div className="sliders">
          <label htmlFor="tab-1"><img src="./../../public/images/paralele11.png" alt="Paralele 1" /></label>
          <label htmlFor="tab-2"><img src="./../../public/images/alexf2.png" alt="Alex F 2" /></label>
          <label htmlFor="tab-3"><img src="./../../public/images/paralele33.png" alt="Paralele 3" /></label>
          <label htmlFor="tab-4"><img src="./../../public/images/alexf1.png" alt="Alex F 1" /></label>
        </div>

        {/* Gallery images with spin functionality */}
        <div
          id="spinner"
          className="img-card"
          style={{ transform: `rotateY(${angle}deg)` }}
        >
          <img src="./../../public/images/paralele11.png" alt="Paralele 1" />
          <img src="./../../public/images/alexf2.png" alt="Alex F 2" />
          <img src="./../../public/images/paralele33.png" alt="Paralele 3" />
          <img src="./../../public/images/alexf1.png" alt="Alex F 1" />
        </div>
      </div>

      {/* Buttons to control spinning */}
      <div className="spin-controls">
        <button onClick={() => gallerySpin(false)}>Spin Left</button>
        <button onClick={() => gallerySpin(true)}>Spin Right</button>
      </div>
    </section>
  );
};

export default Gallery;