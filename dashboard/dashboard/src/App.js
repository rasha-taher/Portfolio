import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/dashboard.jsx";
import "./components/dashboard.css";
import Email from "./components/email.jsx";

function App() {
  return (
    <div className="App">
      <div className="dachboard">
        <Dashboard />
      </div>
      <div className="email">
        <Email />
      </div>
    </div>
  );
}

export default App;
