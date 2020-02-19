import React from "react";
import { Link } from "react-router-dom";
import "./search.css";

const Search = () => {
  return (
    <div className="search-container">
      <div className="searchline">
        <div className="specialization__wrapper dropdown_wrapper">
          <select id="specialization" className="dropdown">
            <option value="therapeut">Терапевт</option>
            <option value="neur">Невролог</option>
            <option value="chir">Хирург</option>
            <option value="aller">Аллерголог</option>
          </select>
        </div>

        <div className="specialization__wrapper dropdown_wrapper">
          <select id="specialization" className="dropdown">
            <option value="all">Вся Прага</option>
            <option value="pr1">Прага 1</option>
            <option value="pr2">Прага 2</option>
            <option value="pr3">Прага 3</option>
            <option value="pr4">Прага 4</option>
            <option value="p5">Прага 5</option>
            <option value="pr6">Прага 6</option>
            <option value="pr7">Прага 7</option>
            <option value="pr8">Прага 8</option>
            <option value="pr9">Прага 9</option>
            <option value="pr10">Прага 10</option>
          </select>
        </div>

        <div className="specialization__wrapper dropdown_wrapper">
          <select id="specialization" className="dropdown">
            <option value="any">Язык не важен</option>
            <option value="czech">Чешский</option>
            <option value="eng">Английский</option>
            <option value="rus">Русский</option>
          </select>
        </div>

        <div className="search-button">
          <button type="submit" className="search_btn">
            <Link to="/results">Искать</Link>
          </button>
        </div>
      </div>
      <div className="search-options">
        <div className="search-option">
          <input type="checkbox" className="search-checkbox"></input>
          <label>Детский</label>
        </div>
        <div className="search-option">
          <input type="checkbox" className="search-checkbox"></input>
          <label>Работает с коммерческими страховками</label>
        </div>
        <div className="search-option">
          <input type="checkbox" className="search-checkbox"></input>
          <label>Берет новых пациентов</label>
        </div>
      </div>
    </div>
  );
};

export default Search;
