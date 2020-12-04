import React from 'react';
import {Link} from 'react-router-dom';
import BookList from './BookList';

const BookItem = ({ item }) => {
    return (
        <div>
            <h3 className="cardheader">{item.list_name}</h3>
            <div className='card'>
                <div>
                    <div className='card-front'>
                        <Link to={{pathname:`/booklist/${item.list_id}`}}><img src={item.list_image} alt='' /><br/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookItem
