import logo from "./pigeon.png";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={"App-logo"} alt="logo" />
        <p>
          <code>Welcome to Nirvana</code>
        </p>
      </header>
    </div>
  );
}

export default App;
