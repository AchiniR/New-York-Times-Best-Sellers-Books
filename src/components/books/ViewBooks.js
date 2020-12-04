import React from 'react';
import {Col, Row, Label, Button} from 'reactstrap';

const ViewBooks = ({item}) => {
    return (
        <div className='card' style={{marginTop: "10px"}}>
            <div className='card-inner'>
                <div className='card-front'>
                <img src={item.book_image} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.title}</h1>
                    
                        <strong>Author Name:</strong> {item.author}
                        
                        <br/><br/><strong>Publisher:</strong> {item.publisher}
                        
                        <br/><br/><strong>ISBN:</strong> {item.primary_isbn10}<br/>{item.primary_isbn13}
                        
                        <br/><br/><button><a href={item.amazon_product_url} style={{color: "black"}}>Buy</a></button>

                        <br/><br/>
                </div>
            </div>
        </div>
    )
}

export default ViewBooks
