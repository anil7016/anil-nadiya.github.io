import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
//import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Contact from './Contact';
import Header from './components/Header';
import About from './About';
import Menu from './Menu';
import Blog from './Blog';
import items from './data';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import Home from './Home';
import Portfoliodetail from './Portfoliodetail';



// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from "./components/Register";


function App() {
  const [menuItems] = useState(items);
  
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container" style={{'minHeight':'500px'}}>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/portfolio/:idtest"  >
              <Portfoliodetail />
            </Route>
            <Route path="/portfolio" >
              <Menu items={menuItems} />
            </Route>

            <Route path="/blog" component={Blog} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={Profile} path="/profile" />
            <Route component={Contact} path="/contact" />
            <Route component={Home} path="/" exact />
          </Switch>
        </div>
        <Footer />
    </div>
  </BrowserRouter>  

  );
}

export default App;
