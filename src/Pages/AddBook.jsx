import React, { useState } from "react";
import { FaUpload, FaPlus } from "react-icons/fa";

const AddBookPage = () => {
 
    const handleSubmitBook = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const authorName = form.authorName.value;
    const shortDescription = form.shortDescription.value;
    const bookName = form.bookName.value;
    const quantity = form.quantity.value;
    const category = form.category.value; 
    const rating = form.rating.value; 

    const newBook = { image, authorName, quantity, shortDescription, bookName, category, rating };
    console.log(newBook)
    }
    return (
        <div className="p-8 bg-base-200 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Add a New Book</h1>
            <form onSubmit={handleSubmitBook} className="max-w-2xl mx-auto">

                {/* Image Upload */}
                {/* <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Upload Book Cover Image</span>
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="file-input file-input-bordered w-full"
                            accept="image/*"
                        />
                        <FaUpload className="text-xl" />
                    </div>
                </div> */}

                <div className="form-control mb-4">
                    <label className="label font-semibold">Image URL</label>
                    <input
                        type="text"
                        name="image"
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
                        placeholder="Enter book title"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Quantity */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Enter quantity"
                        className="input input-bordered w-full"
                        min="0"
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
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="" disabled>
                            Select a category
                        </option>
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>
                        <option value="History">History</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea
                        name="shortDescription"
                        placeholder="Enter a brief description"
                        className="textarea textarea-bordered w-full h-24"
                        required
                    />
                </div>

                {/* Rating */}
                <div className="form-control mb-6">
                    <label className="label">
                        <span className="label-text">Rating (1-5)</span>
                    </label>
                    <input
                        type="number"
                        name="rating"
                        placeholder="Enter rating"
                        className="input input-bordered w-full"
                        min="1"
                        max="5"
                        required
                    />
                </div>

                {/* Add Button */}
                <button type="submit" className="btn btn-primary w-full">
                    <FaPlus className="mr-2" /> Add Book
                </button>
            </form>

            {/* Book Content Section */}
            <div className="mt-12 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">About the Book</h2>
                <p className="text-base-content">
                    "A library is a gateway to knowledge, and every book holds a world of wisdom, adventure, and inspiration. This section provides essential details about the book, including its title, author, genre, and a brief description.
                    Readers can explore various categories, from thrilling mysteries to insightful historical accounts, and discover books that captivate their imagination. With ratings to guide selections, users can make informed choices, ensuring an enriching reading experience.
                    Books are the cornerstone of learning, and adding them to the library helps preserve knowledge for future generations."
                </p>
            </div>
        </div>
    );
};

export default AddBookPage;