import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Categories from './Categories';
import items from './data';

const allcategories = ['all',...new Set( items.map((item) => item.category )) ]
console.log('allcategories', allcategories)
let selectCategory = 'all';

const Menu = ( {items} ) => {
    console.log('items', items)
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems)
    //console.log('setMenuItems', setMenuItems)
    const [categories] = useState(allcategories);
  
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
        <div className="sectoion container">
            
            <Categories categories={categories} filterItems={filterItems} selCategory={selectCategory} />

            <div className="section-center">
                { menuItems.map( (menuItem) => {
                    const { id, title, img,desc, price } = menuItem;
                    return (
                        <article key={id} className="menu-item">
                            <img src={img}  className="photo" alt="img" />
                            <div className="item-info">
                                <header>
                                <Link to={`/portfolio/${id}`} ><h4 > {title} </h4></Link>
                                    <h4 className="price">${price}</h4>
                                </header>
                                <p className='item-text'>{desc}</p>
                            </div>
                        </article>
                    ); 
                })

                }
            </div>
        </div>
    );
};

export default Menu;