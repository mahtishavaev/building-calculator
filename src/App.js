import React from "react";
import { Steps } from "./steps/Steps";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2 className="title">Калькулятор цены конструкций</h2>
      <Steps />
    </div>
  );
}

export default App;
