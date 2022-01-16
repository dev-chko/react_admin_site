import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Members from "./pages/Drawing";
import Cashes from "./pages/Event";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/members" component={Members} />
          <Route path="/cashes" component={Cashes} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
