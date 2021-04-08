import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "./calculator.css";
import Calculator from "./calculator";
import calculatorApi from "./calculatorApi";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Calculator calcApi={new calculatorApi("http://127.0.0.1:5000")} />
      </header>
    </div>
  );
}

export default App;
