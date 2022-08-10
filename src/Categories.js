import React from 'react';

const Categories = ({categories, filterItems, selCategory}) => {
    return(
        <div className="btn-container">
            { categories.map((category, index) => {
                var activeClr = (category == selCategory) ? 'black' : '';
                return  (
                    <button 
                        type="button"
                        key={index}
                        style={{background:activeClr}}                   
                        className="filter-btn"
                        onClick = { () => filterItems(category) }
                    >
                        {category}
                    </button>
                )
            })
            }
        </div>
    );
}

export default Categories;