import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
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
  );
};

export default Header;
