// index.js
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App"; // Adjust the path according to the location of App.js
import user from "./data/user";

ReactDOM.render(
  <React.StrictMode>
    <App name={user.name} bio={user.bio} links={user.links} />
  </React.StrictMode>,
  document.getElementById("root")
);
