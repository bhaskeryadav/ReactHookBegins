import React from "react";
import ReactDOM from "react-dom";
import BaseTemplate from "./components/template/baseTemplate";
import { Provider } from "react-redux";
import configureStore from "./commons/configureStore";
import axios from "axios";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import { COUNTRY, INDIA_KEY, GLOBAL_KEY } from "./commons/constants";
import { style } from "@material-ui/system";
import Ubuntu from "./../public/fonts/Ubuntu-Title-webfont.woff";

const store = configureStore();

const ubuntu = {
  fontFamily: "Ubuntu",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    local('Ubuntu'),
    url(${Ubuntu}) format('woff')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#000000",
      dark: "#002884",
      contrastText: "#FFF"
      //fontFamily: "Times New Roman"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    },
    typography: {
      fontFamily: "calibri"
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [ubuntu]
        }
      }
    }
  }
});

function App() {
  return <BaseTemplate />;
}

const bootApp = async () => {
  // Before page load
  const { data } = await axios.get("https://ipapi.co/json");
  sessionStorage.setItem(
    COUNTRY,
    data.country === INDIA_KEY ? INDIA_KEY : GLOBAL_KEY
  );

  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>,
    document.querySelector("#app")
  );
};

bootApp();
