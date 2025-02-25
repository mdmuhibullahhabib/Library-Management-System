import React from 'react'
import { FaBook, FaUser, FaTags, FaStar, FaInfoCircle } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function CategoryBooksCard({book}) {
  console.log(book)

  const{_id, image, authorName, shortDescription, bookName, category, rating} = book;
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
    <figure className="px-4 pt-4">
      <img
        src={book.image}
        alt={book.name}
        className="rounded-lg h-48 w-full object-cover"
      />
    </figure>
    <div className="card-body">
      {/* Book Name */}
      <h2 className="card-title">
        <FaBook className="mr-2" />
        {book.name}
      </h2>

      {/* Author Name */}
      <p className="flex items-center text-sm text-gray-600">
        <FaUser className="mr-2" />
        {book.authorName}
      </p>

      {/* Category */}
      <p className="flex items-center text-sm text-gray-600">
        <FaTags className="mr-2" />
        {book.category}
      </p>

      {/* Quantity */}
      <p className="flex items-center text-sm text-gray-600">
        <span className="font-semibold">Quantity:</span> {book.quantity}
      </p>

      {/* Rating */}
      <div className="flex items-center">
        <ReactStars
          count={5}
          value={book.rating}
          size={24}
          activeColor="#ffd700"
          edit={false}
        />
        <span className="ml-2 text-sm text-gray-600">({book.rating})</span>
      </div>

      {/* Details Button */}
      <div className="card-actions justify-end mt-4">
        <Link to={`/details/${_id}`} className="btn btn-primary">
          <FaInfoCircle className="mr-2" />
          Details
        </Link>
      </div>
    </div>
  </div>
  )
}

export default CategoryBooksCard