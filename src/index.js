import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "antd-mobile/dist/antd-mobile.css";
import "@/asset/style/main.less";

import { App } from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  , document.getElementById("root"));
registerServiceWorker();
