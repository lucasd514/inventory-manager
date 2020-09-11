import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import Product from "./components/Product";
import InventoryManager from "./components/inventoryManager";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dashboard">
        <DashBoard />
      </Route>
      <Route exact path="/product/:number">
        <Product />
      </Route>
      <Route exact path="/inventory">
        <InventoryManager />
      </Route>
    </Router>
  );
}

export default App;
