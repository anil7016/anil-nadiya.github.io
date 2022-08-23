import React from 'react';
import axios from 'axios';

const baseURL = "http://api.tvmaze.com/search/shows?q=golden%20girls";

const Blog = ( ) => {
    
    const [post,setPost] = React.useState(null);
    // console.log('setPost', setPost)
    // console.log('post', post)
    
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          console.log('response', response)
          setPost(response.data);
        });
      }, []);

    return (
        <div className="sectoion container">
            
            <div className="section-center">
                {/* { menuItems.map( (menuItem) => {
                    const { id, title, img,desc, price } = menuItem;
                    return (
                        <article key={id} className="menu-item">
                            <img src={img}  className="photo"/>
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">${price}</h4>
                                </header>
                                <p className='item-text'>{desc}</p>
                            </div>
                        </article>
                    ); 
                })

                } */}
            </div>
        </div>
    );
};

export default Blog;