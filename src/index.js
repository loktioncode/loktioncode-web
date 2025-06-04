import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import './fonts/Baloo2-Bold.ttf';
import './fonts/Baloo2-ExtraBold.ttf';
import './fonts/Baloo2-Medium.ttf';
import './fonts/Baloo2-Regular.ttf';
import './fonts/Baloo2-SemiBold.ttf';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
