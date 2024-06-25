import React from "react";
import "../assets/css/coupon.css";
import logo from "../assets/images/myntra-logo.png";
import headImg from "../assets/images/offer-top.jpg";
const Coupon = () => {
  return (
    <header className="coupon-container">
      <section className="section-1">
        <div className="left">
          <h2>
            flat <sup>&#8377;</sup>400 off
          </h2>
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="right">
          <h4>
            on your 1<sup>st</sup> purchase
          </h4>
          <div className="break">
            <h4>via</h4>
            <figure>
              <img src={logo} alt="" />
              <span>myntra</span>
            </figure>
            <h4>app</h4>
          </div>
          <div className="cuts">
            <div className="cut"></div>
            <div className="cut"></div>
            <div className="cut"></div>
            <div className="cut"></div>
            <div className="cut"></div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <figure>
          <img src={headImg} alt="#" />
        </figure>
      </section>
      <section className="section-3">
        <h1>coupons corner</h1>
        <div className="coupons">
          <div className="coupon">
            <div className="cuts right">
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
            </div>
            <div className="title">
              <h2>
                flat <sup>&#8377;</sup> 100% off*
              </h2>
              <h4>on all products</h4>
            </div>
            <div className="code">
              <h4>use code:</h4>
              <h4>myntra100</h4>
            </div>
            <div className="cuts left">
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
            </div>
          </div>
          <div className="coupon">
            <div className="cuts right">
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
            </div>
            <div className="title">
              <h2>
                flat <sup>&#8377;</sup> 200% off*
              </h2>
              <h4>on all products</h4>
            </div>
            <div className="code">
              <h4>use code:</h4>
              <h4>myntra200</h4>
            </div>
            <div className="cuts left">
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
              <div className="cut"></div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Coupon;
