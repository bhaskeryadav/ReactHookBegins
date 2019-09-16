import React from "react";
import ReactDOM from "react-dom";
import BaseTemplate from "./components/template/baseTemplate";
import AppRouter from "./components/template/routes";

function App() {
  return <AppRouter />;
}

ReactDOM.render(<App />, document.querySelector("#app"));
