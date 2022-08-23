import React, {useState} from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './Home';
import Portfoliodetail from './Portfoliodetail';

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
