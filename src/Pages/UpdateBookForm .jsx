import React, { useState } from "react";
import {  FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBookForm = () => {
  const book = useLoaderData()
  const navigate = useNavigate();

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.value;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const category = form.category.value;
    const rating = form.rating.value;

    const updateBook = { image, bookName, authorName, category, rating}
    console.log(updateBook)

    // send data to the server and database
    fetch(`https://library-management-server-theta.vercel.app/book/${book._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateBook)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Success!',
            text: 'Book updated successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          e.target.reset();
          navigate("/books"); 
        }
      })
  };

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <div className="max-w-2xl mx-auto bg-base-100 p-8 rounded-lg shadow-lg">
        {/* Back Button */}
        <button
          onClick={() => navigate("/all-books")}
          className="btn btn-ghost mb-4"
        >
          <FaArrowLeft className="mr-2" />
          Back to All Books
        </button>

        <h1 className="text-3xl font-bold mb-6">Update Book</h1>
        <form onSubmit={handleUpdate}>
          {/* Image Upload */}
          <div className="form-control mb-4">
            <label className="label font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={book.image}
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Book Name */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input
              type="text"
              name="bookName"
              defaultValue={book.bookName}
              placeholder="Enter book title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Author Name */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              name="authorName"
              defaultValue={book.authorName}
              placeholder="Enter author name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              defaultValue={book.category}
              className="select select-bordered w-full"
              required
            >
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="History">History</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>

          {/* Rating */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Rating (1-5)</span>
            </label>
            <input
              type="number"
              name="rating"
              defaultValue={book.rating}
              placeholder="Enter rating"
              className="input input-bordered w-full"
              min="1"
              max="5"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookForm;