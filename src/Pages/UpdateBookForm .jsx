import React, { useState } from "react";
import { FaBook, FaUser, FaTags, FaStar, FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBookForm = ({ books, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((book) => book.id === id);

  // State for form fields
  const [formData, setFormData] = useState({
    image: book.image,
    name: book.name,
    authorName: book.authorName,
    category: book.category,
    rating: book.rating,
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(id, formData); // Pass updated data to the parent component
    navigate("/all-books"); // Redirect back to the All Books page
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
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Book Cover Image</span>
            </label>
            <input
              type="file"
              name="image"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
              className="file-input file-input-bordered w-full"
              accept="image/*"
            />
          </div>

          {/* Book Name */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.authorName}
              onChange={handleChange}
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
              value={formData.category}
              onChange={handleChange}
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
              value={formData.rating}
              onChange={handleChange}
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