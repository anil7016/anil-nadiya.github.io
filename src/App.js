import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Categories from './Categories';
import Contact from './Contact';
import Header from './components/Header';
import About from './About';
import Menu from './Menu';
import items from './data';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const allcategories = ['all', ... new Set( items.map((item) => item.category )) ]
//console.log('allcategories', allcategories)
let selectCategory = 'all';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allcategories);

  const filterItems = (category) => {
    selectCategory = category;
    if(category === 'all'){
      setMenuItems(items);
      return
    }  
    const newItem = items.filter((item) => item.category===category );  
      setMenuItems(newItem)
  }
  
  return (

    // <main>
    //   <section className="menu section container">
    //     <div className="title">
    //       <h2>TMS</h2>
    //       <div className="underline"></div>
    //     </div>
    //     <Categories categories={categories} filterItems={filterItems} selCategory={selectCategory} />
    //     <Menu items={menuItems} />
    //   </section>
    // </main>

    <Router>
      <div>
        <Header />
        
        <div className="container" style={{'minHeight':'500px'}}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Menu items={menuItems} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          
          <Route path="/">
            {/* <Categories categories={categories} filterItems={filterItems} selCategory={selectCategory} /> */}
          </Route>
        </Switch>
        </div>

        <Footer />
    </div>
  </Router>  

  );
}

export default App;
