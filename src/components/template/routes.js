import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Signup from "../screen/signup";
import RedboxMessages from "../screen/redbox.messages";

export const AppRouter = props => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Signup</Link>
        </li>
        <li>
          <Link to="/messages">RedboxMessages</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Signup} />
      <Route path="/messages" component={RedboxMessages} />
    </BrowserRouter>
  );
};

export default AppRouter;
