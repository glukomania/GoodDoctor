import React from "react";
import Header from "../Header/header";
import Search from "../Search/search";
import Table from "../Table/table";

const Results = props => {
  return (
    <div className="main-container">
      <Header />
      <Search />
      <Table />
    </div>
  );
};

export default Results;
