import React from "react";
import "../assets/css/navbar.css";
import myntraLogo from "../assets/images/myntra-logo.png";
const Navbar = ({ input, setInput }) => {
  return (
      <nav className="nav-container">
        <ul className="nav-left">
          <li className="item">
            <figure>
              <img src={myntraLogo} alt="" />
            </figure>
          </li>
          <li className="item">
            <a href="#">men</a>
          </li>
          <li className="item">
            <a href="#">women</a>
          </li>
          <li className="item">
            <a href="#">kids</a>
          </li>
          <li className="item">
            <a href="#">home & living</a>
          </li>
          <li className="item">
            <a href="#">beauty</a>
          </li>
          <li className="item">
            <a href="#">studio</a> <span>new</span>
          </li>
        </ul>

        <ul className={input ? "nav-input active" : "nav-input"}>
          <button>
            <i className="bi bi-search"></i>
          </button>
          <input
            type="text"
            onClick={(e) => {
              e.stopPropagation();
              setInput(true);
            }}
            placeholder="Search product,brand and more"
          />
        </ul>

        <ul className="nav-right">
          <li className="item">
            <a href="#">profile</a>
            <i className="bi bi-person"></i>
          </li>
          <li className="item">
            <a href="#">wishlist</a>
            <i className="bi bi-heart"></i>
          </li>
          <li className="item">
            <a href="#">bag</a>
            <i className="bi bi-bag"></i>
          </li>
        </ul>
      </nav>
  );
};
