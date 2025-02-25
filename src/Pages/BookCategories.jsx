import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import CategoryBooksCard from '../Components/CategoryBooksCard';

function BookCategories() {

    const books = useLoaderData();
    console.log(books)
    
    return (
         <div className='w-11/12 mx-auto gap-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {books.map((book) => (
            <CategoryBooksCard 
            key={book._id}
            book={book}
            ></CategoryBooksCard>
        ))}
      </div>
    )
}

export default BookCategories