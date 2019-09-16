import React from "react";
import ReactDOM from "react-dom";
import BaseTemplate from "./components/template/baseTemplate";
import { Provider } from "react-redux";
import configureStore from "./commons/configureStore";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#000000",
      dark: "#002884",
      contrastText: "#FFF"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

function App() {
  return <BaseTemplate />;
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.querySelector("#app")
);
