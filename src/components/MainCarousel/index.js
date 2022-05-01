import "./style.css";
import { useState, useEffect } from "react";
import circle from "../../assets/icons/circle.svg";

const MainCarousel = () => {
  const [current, setCurrent] = useState(1);

  const handleCarousel = (id) => {
    setCurrent(id);
  };

  useEffect(() => {
    setInterval(() => {
      setCurrent(current + 1);
    }, 5000);
  }, []);

  useEffect(() => {
    if (current === 4) setCurrent(1);
  }, [current]);

  return (
    <div className="carousel-wrapper">
      {current === 1 && (
        <div className="carouse-1-wrapper">
          <div className="carousel-1">
            <span>400</span>
            <p>O plástico pode levar mais de 400 anos para se decompor.</p>
          </div>
          <div className="carousel-1">
            <span>2050</span>
            <p>Até 2050, haverá mais plástico nos oceanos do que peixes.</p>
          </div>
        </div>
      )}

      {current === 2 && (
        <div className="carouse-1-wrapper">
          <h3>1</h3>
        </div>
      )}

      {current === 3 && (
        <div className="carouse-1-wrapper">
          <h3>2</h3>
        </div>
      )}
      <div className="carousel-btns">
        <button
          className={current === 1 ? "active-btn" : ""}
          onClick={() => handleCarousel(1)}
        >
          <img src={circle} alt="circle button" />
        </button>
        <button
          className={current === 2 ? "active-btn" : ""}
          onClick={() => handleCarousel(2)}
        >
          <img src={circle} alt="circle button" />
        </button>
        <button
          className={current === 3 ? "active-btn" : ""}
          onClick={() => handleCarousel(3)}
        >
          <img src={circle} alt="circle button" />
        </button>
      </div>
    </div>
  );
};

export default MainCarousel;
