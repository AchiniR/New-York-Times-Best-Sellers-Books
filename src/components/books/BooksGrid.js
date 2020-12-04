import React from 'react';
import BookItem from './BookItem';

const BooksGrid = ({ items, isLoading}) => {
    return isLoading ? (<h1>Loading....</h1>) : (
        <section className="cards">
            {items.lists.map((item) => (
                <BookItem  key={item.list_id} item={item}></BookItem>
            ))}
        </section>
    )
}

export default BooksGrid
