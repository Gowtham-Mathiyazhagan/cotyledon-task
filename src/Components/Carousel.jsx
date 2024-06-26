import React, { useEffect, useState } from "react";
import "../assets/css/carousel.css";
import { carousel } from "../assets/data.js";
const Carousel = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 4) {
      setCount(0);
    }

    const clear = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 5000);

    return () => clearInterval(clear);
  }, [count]);

  const handleClick = (e) => {
    let className = e.target.getAttribute("class")[0];
    if (e.target.tagName == "SPAN") {
      setCount(Number(className));
    }
  };

  return (
    <section className="carousel-container">
      <h1>
        <span>crazy</span> deals
      </h1>
      <h4>
        big save all day <i className="bi bi-chevron-right"></i>
      </h4>
      <article className="carousels">
        {carousel.map((data, i) => {
          return (
            <div
              key={i.toString()}
              className="wrapper"
              style={{ transform: `translateX(calc(-97.5vw * ${count}))` }}
            >
              <div className="carousel">
                <header className="head">
                  <figure>
                    <img src={data.brand} alt="" />
                  </figure>
                </header>
                <figure className="carousel-img">
                  <img src={data.image} alt="" />
                </figure>
                <footer className="carousel-footer">
                  <h5 className="title">{data.title}</h5>
                  <h1 className="discount">{data.discount}</h1>
                </footer>
              </div>
            </div>
          );
        })}
      </article>
      <div className="four-dots" onClick={handleClick}>
        <span className={count === 0 ? "0 active" : "0"}></span>
        <span className={count === 1 ? "1 active" : "1"}></span>
        <span className={count === 2 ? "2 active" : "2"}></span>
        <span className={count === 3 ? "3 active" : "3"}></span>
      </div>
    </section>
  );
};

export default Carousel;
