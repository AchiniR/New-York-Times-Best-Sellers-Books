import React from 'react';
import {useParams} from 'react-router-dom';
import ViewBooks from './ViewBooks';

const BookList = ({ items, isLoading}) => {
    const { id } = useParams();
    let item;

    return isLoading ? (<h1>Loading....</h1>) : (
        <section className='cards'>
            {items.lists.map((item) => (
                (item.list_id == id) ?
                item.books.map((book) => (
                        <ViewBooks  key={item.primary_isbn10} item={book}></ViewBooks> 
                    )): ""
            ))}
        </section>
    )
}

export default BookList
