import React from "react";
import "./table.css";

import TableItem from "../TableItem/table-item";

const Table = props => {
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="col header-col">Имя</div>
        <div className="col header-col">Клиника/адрес</div>
        <div className="col header-col">Коммерческие страховки</div>
        <div className="col header-col">Языки</div>
        <div className="col header-col">Рейтинг</div>
      </div>
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
      <TableItem />
    </div>
  );
};

export default Table;
