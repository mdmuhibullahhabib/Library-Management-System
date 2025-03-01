import React, { useContext, useEffect, useState } from "react";
import { FaBook, FaTags, FaCalendar, FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import BorrowedCard from "../Components/BorrowedCard";
import { AuthContext } from "../Provider/AuthProvider";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const {user} = useContext(AuthContext)
  const books = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (books && user?.email) {
      const userBorrowed = books.filter(
        (book) => book.email?.toLowerCase() === user.email.toLowerCase()
      );
      setBorrowedBooks(userBorrowed);
    }
  }, [user, books]);

  const handleReturn = (bookId) => {
    setBorrowedBooks(borrowedBooks.filter((book) => book._id !== bookId));
  };

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="btn btn-ghost mb-4"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </button>

        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-8">Borrowed Books</h1>

          {borrowedBooks.length === 0 ? (
            <p className="text-center font-semibold text-lg text-gray-600">No Data found for your account.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {borrowedBooks.map((book) => (
                <BorrowedCard
                  key={book._id}
                  book={book}
                  onReturn={handleReturn}
                ></BorrowedCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default BorrowedBooks