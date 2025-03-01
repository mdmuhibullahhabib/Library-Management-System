import React from "react";
import { FaBook, FaTags, FaCalendar } from "react-icons/fa";
import Swal from "sweetalert2";

const BorrowedCard = ({ book, onReturn }) => {
  // Handle Return Button Click
  const handleReturnClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to return this book.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://library-management-server-theta.vercel.app/borrowed-book/${book._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount) {
              console.log(data)
            fetch(`https://library-management-server-theta.vercel.app/books/${book._id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ quantity: book.quantity + 1 }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data)
                Swal.fire("Returned!", "The book has been returned.", "success");
                onReturn(book._id);
              });
            }
          });
      }
    });
  };

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

        {/* Category */}
        <p className="flex items-center text-sm text-gray-600">
          <FaTags className="mr-2" />
          {book.category}
        </p>

        {/* Borrowed Date */}
        <p className="flex items-center text-sm text-gray-600">
          <FaCalendar className="mr-2" />
          <span className="font-semibold">Borrowed:</span>{" "}
          {new Date(book.borrowedDate).toLocaleDateString()}
        </p>

        {/* Return Date (Highlighted in Red) */}
        <p className="flex items-center text-sm text-red-600 font-semibold">
          <FaCalendar className="mr-2" />
          <span className="font-semibold">Return By:</span>{" "}
          {new Date(book.returnDate).toLocaleDateString()}
        </p>

        {/* Return Button */}
        <div className="card-actions justify-end mt-4">
          <button
            onClick={handleReturnClick}
            className="btn bg-red-600 hover:bg-red-700 text-white"
          >
            Return Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedCard;
