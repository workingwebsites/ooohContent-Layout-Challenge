import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ContentLayoutChallenge from "./pages/ContentLayoutChallenge";
import "./App.scss";
import reportWebVitals from "./reportWebVitals";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="content-layout" element={<ContentLayoutChallenge />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
