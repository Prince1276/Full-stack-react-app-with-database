import React from "react";
import "./App.css";
import MyComponent from "./component/myComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./component/navBarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import epPriceListComponent from "./component/epPriceListComponent";
import bpPriceListComponent from "./component/bpPriceListComponent";
const bpContext = React.createContext();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComponent />
        <div className="container">
          <Route path="/" exact component={MyComponent} />
          <Route path="/bppriceList" component={bpPriceListComponent} />
          <Route path="/eppriceList" component={epPriceListComponent} />
          {/* <MyComponent /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
