import React from "react";
import { FaBook, FaUser, FaTags, FaStar, FaEdit } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllBooks = () => {

    const books =useLoaderData();

  const navigate = useNavigate();

  // Handle Update Button Click
  const handleUpdateClick = (bookId) => {
    navigate(`/update-book/${bookId}`); // Redirect to the update form page
  };

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-8">All Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
          >
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
                {book.bookName}
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

              {/* Rating */}
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-2" />
                <span className="text-sm text-gray-600">{book.rating}/5</span>
              </div>

              {/* Update Button */}
              <div className="card-actions justify-end mt-4">
                <button
                  onClick={() => handleUpdateClick(book._id)}
                  className="btn btn-primary"
                >
                  <FaEdit className="mr-2" />
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AllBooks