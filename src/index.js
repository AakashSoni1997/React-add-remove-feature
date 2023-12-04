import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Index from "./routing/Index";
import { BrowserRouter } from "react-router-dom";
import { StoreConextProvider } from "./routing/store/StoreConext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreConextProvider>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </StoreConextProvider>
);
