(process.env.NODE_ENV === "development") &&
    module.hot.accept();

import React from "react";
import ReactDOM from "react-dom";

import Router from "router";

import "assets/styles/fonts.scss";
import "assets/styles/normalize.scss";

const ReactProject = () => <Router/>;

ReactDOM.render(<ReactProject/>, document.getElementById("reactProject"));