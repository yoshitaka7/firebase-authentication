import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./provider/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>  {/* user情報を提供するProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);