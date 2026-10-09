
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ change here
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import myReduxStore from "./redux/store/Store";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ new API

root.render(
  <BrowserRouter>
    <Provider store={myReduxStore}>
      <App />
    </Provider>
  </BrowserRouter>
);


