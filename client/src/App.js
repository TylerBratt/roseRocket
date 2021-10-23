import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Dispatch from "./components/Dispatch";
import Drivers from "./components/Drivers";
import Orders from "./components/Orders";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import "./App.css";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  // console.log('HERERE', data)

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/'>
            <Dispatch />
          </Route>
          <Route path='/'>
            <Drivers />
          </Route>
          <Route path='/'>
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;