import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="header">
        <div className="logo">
          <div>
            <a href="3">GoodDoctor</a>
          </div>
          <div className="logo-slogan">Найди своего доктора в Праге</div>
        </div>
        <div className="addNew">
          <div className="AddNew-icon">
            <Link to="/results">
              <i className="fa fa-plus-circle"></i>
            </Link>
          </div>
          <div className="addNew-text">
            <a href="#">Добавить нового доктора</a>
          </div>
        </div>
      </div>
      <div className="search">
        <div className="search-wrapper">
          <div className="ageToggle-wrapper">
            <div className="adult">
              <div className="toggle">Взрослый</div>
              {/* <button className="toggle_btn">Взрослый</button> */}
            </div>
            <div className="kids">
              <div className="toggle disabled">Детский</div>
              {/* <button className="toggle_btn disabled">Детский</button> */}
            </div>
          </div>
        </div>
        <div className="search-dropdown__wrapper">
          <select id="specialization" className="search-dropdown">
            <option value="volvo">Терапевт</option>
            <option value="saab">Невролог</option>
            <option value="opel">Хирург</option>
            <option value="audi">Аллерголог</option>
          </select>
        </div>
      </div>
      <div className="search-button">
        <button type="submit" className="search_btn">
          <Link to="/results">Искать</Link>
        </button>
      </div>
    </div>
  );
};

export default Main;
