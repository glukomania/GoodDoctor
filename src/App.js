import React from "react";
import "./App.css";
import Main from "./Main/main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Results from "./Results/Results";
import Doctor from "./Doctor/doctor";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/results" exact component={Results} />
      {/* <Route path="/form" exact component={Form} /> */}
      {/* <Route path="doctors/:id" exact component={Doctor} /> */}
      <Route path="/doctor" exact component={Doctor} />
    </BrowserRouter>
  );
}

export default App;
