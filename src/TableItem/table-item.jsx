import React from "react";
import "./tableitem.css";
import { Link } from "react-router-dom";

const TableItem = props => {
  const handleItemClick = e => {};

  const setAddress = () => {
    return `/doctors/${props.id}`;
  };

  return (
    <div>
      <Link to={setAddress()}>
        <div className="table-item" onClick={handleItemClick}>
          <div className="col">Ivana Simonová</div>
          <div className="col">Poliklinika Budejovicka</div>
          <div className="col">Maxima, ergo</div>
          <div className="col">чешский, английский</div>
          <div className="col">5.4</div>
        </div>
      </Link>
    </div>
  );
};

export default TableItem;
