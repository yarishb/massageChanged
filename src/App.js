import React from 'react';
import './App.css';
import Home from './pages/homePage/Home'
import Pricing from './pages/Pricing/Pricing'
//import Navbar from './components/navBar/Navbar';
import Reviews from './pages/reviews/Reviews'
//import ModalWindow from './components/modalWindow/modalWindow';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/prices"} component={Pricing} />
          <Route path={"/reviews"} component={Reviews} />
          <Route path={"*"} component={Home} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
