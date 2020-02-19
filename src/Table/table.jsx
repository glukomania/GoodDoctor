import React from "react";
import "./table.css";

import TableItem from "../TableItem/table-item";

const Table = props => {
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="col">Имя</div>
        <div className="col">Клиника/адрес</div>
        <div className="col">Коммерческие страховки</div>
        <div className="col">Языки</div>
        <div className="col">Рейтинг</div>
      </div>
      <TableItem />
    </div>
  );
};

export default Table;
