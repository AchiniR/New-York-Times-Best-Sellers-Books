import React from 'react';
import {useParams} from 'react-router-dom';
import ViewBook from './ViewBook';

const Book = ({ items, isLoading}) => {
    const { isbn } = useParams();

    return isLoading ? (<h1>Loading....</h1>) : (
        <section>
            {items.lists.map((item) => (
                item.books.map((book) => (
                    (book.primary_isbn10 == isbn) ? <ViewBook  key={item.primary_isbn10} item={book}></ViewBook> : "" 
                ))
            ))}
        </section>
    )
}

export default Book
