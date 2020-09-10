import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dashboard">
        <DashBoard />
      </Route>
    </Router>
  );
}

export default App;
