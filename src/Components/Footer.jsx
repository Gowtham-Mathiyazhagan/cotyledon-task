import React from "react";
import "../assets/css/footer.css";
import google from "../assets/images/google_play_logo.png";
import apple from "../assets/images/apple-logo.png";
import phone from "../assets/images/myntra-mobile.jpg";
import logo from "../assets/images/myntra-logo.png";

const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <article className="box">
          <figure className="phone-img">
            <img src={phone} alt="" />
          </figure>
          <div className="box-detail">
            <h1 className="title">more knockout offer waiting!</h1>
            <div className="break">
              <h5>only on the </h5>
              <figure>
                <img src={logo} alt="" />
                <span>myntra</span>
              </figure>
              <h5>app</h5>
            </div>
            <div className="foot">
              <h5>download now</h5>
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </article>
		<aside>
          <h1 className="side-bar">
            flat &#8377;200 off <i className="bi bi-caret-up-fill"></i>
          </h1>
		  <div className="pulse">
          <i className="bi bi-bell-fill"></i>
		  </div>
		  </aside>
      </section>
      <footer className="final">
        Designed by{" "}
        <a href="https://www.linkedin.com/in/gowtham-mathiyazhagan-4b222423b/">
          Gowtham-Mathiyazhagan
        </a>
      </footer>
    </>
  );
};

export default Footer;
