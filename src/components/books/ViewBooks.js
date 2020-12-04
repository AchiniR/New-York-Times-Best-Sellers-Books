import React from 'react';
import {Link} from 'react-router-dom';

const ViewBooks = ({item}) => {
    return (
        <div className='card' style={{marginTop: "10px"}}>
            <div className='card-inner'>
                <div className='card-front'>
                <img src={item.book_image} alt='' />
                </div>
                <div className='card-back'>
                    <label style={{color: "#9a9d8d"}}>Rank: {item.rank}</label><h3>{item.title}</h3>
                        
                        <strong style={{color: "#9a9d8d"}}>Author Name:</strong> {item.author}
                        
                        <br/><br/><strong style={{color: "#9a9d8d"}}>Publisher:</strong> {item.publisher}
                        
                        <br/><br/><strong style={{color: "#9a9d8d"}}>ISBN:</strong> {item.primary_isbn10}&nbsp;|&nbsp;{item.primary_isbn13}
                        
                        <br/><br/><button><a href={item.amazon_product_url} style={{color: "black"}}>Buy</a></button>

                        <br/><br/><Link to={{pathname:`/book/${item.primary_isbn10}`}} style={{color: "#9a9d8d"}}>Click for more details..</Link>
                </div>
            </div>
        </div>
    )
}

export default ViewBooks
