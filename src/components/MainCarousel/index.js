import "./style.css";
import { useState, useEffect } from "react";
import circle from "../../assets/icons/circle.svg";
import CircleSvg from "../CircleSvg";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";

const MainCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handleCarousel = (id) => {
    if (id < 0) return setCurrent(2);
    setCurrent(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % 3);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-width">
        <div className="carousel-control">
          <button onClick={() => handleCarousel((current - 1) % 3)}>
            <img src={leftArrow} alt="left arrow for carousel" />
          </button>
        </div>

        <div className="carousel-content">
          <div
            className="carousel-wrapper"
            style={{ "--carouselCurrent": current }}
          >
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

            <div className="carouse-1-wrapper">
              <div className="carousel-1">
                <span>300</span>
                <p>
                  milhões de toneladas de lixo plástico em todo o planeta são
                  geradas a cada ano
                </p>
              </div>
              <div className="carousel-1">
                <span>80%</span>
                <p>de todo o lixo encontrado nos oceanos é plástico</p>
              </div>
            </div>

            <div className="carouse-1-wrapper">
              <div className="carousel-1">
                <span>100</span>
                <p>
                  mil animais marinhos são mortos a cada ano devido ao lixo
                  plástico
                </p>
              </div>
              <div className="carousel-1">
                <span>1Mi</span>
                <p>de garrafas de plástico são compradas a cada minuto.</p>
              </div>
            </div>
          </div>
          <div className="carousel-btns">
            <button
              className={current === 0 ? "active-btn" : ""}
              onClick={() => handleCarousel(0)}
            >
              <CircleSvg />
            </button>
            <button
              className={current === 1 ? "active-btn" : ""}
              onClick={() => handleCarousel(1)}
            >
              <CircleSvg />
            </button>
            <button
              className={current === 2 ? "active-btn" : ""}
              onClick={() => handleCarousel(2)}
            >
              <CircleSvg />
            </button>
          </div>
        </div>

        <div className="carousel-control">
          <button onClick={() => handleCarousel((current + 1) % 3)}>
            <img src={rightArrow} alt="right arrow for carousel" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
