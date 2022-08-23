import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import items from './data';
import { useParams } from "react-router-dom"

const Portfoliodetail = () => {
    let { idtest } = useParams()
    let product = {};
    if (idtest) {
        product = items.find(prod => prod.id == idtest)
    } else {
        return;
    }
    console.log('productId=>', idtest)

    return (
        <div className="sectoion container">
            <div className="section-center mt-5">
                <article key={product.id} className="menu-item">
                    <img src={product.img} className="photo" alt="img" />
                    <div className="item-info">
                        <header>
                            <h4 >{product.title} </h4>
                            <h4 className="price">{product.price}</h4>
                        </header>
                        <p className='item-text'>{product.desc}</p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Portfoliodetail;