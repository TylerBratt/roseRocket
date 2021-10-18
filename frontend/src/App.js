import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Drivers from './components/Drivers';
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Drivers />
    </div>
  );
}

export default App;