import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../screen/home";
import About from "../screen/about";

export const AppRouter = props => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
};

export default AppRouter;
