import React, { useEffect, useState } from "react";
import { FaBook, FaTags, FaCalendar, FaArrowLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import BorrowedCard from "../Components/BorrowedCard";

const BorrowedBooks = ({ user }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
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

  console.log(books)

  // Fetch borrowed books for the logged-in user
  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await fetch(`/api/users/${user.id}/borrowed-books`);
        const data = await response.json();
        setBorrowedBooks(data);
      } catch (error) {
        console.error("Error fetching borrowed books:", error);
      }
    };

    if (user) {
      fetchBorrowedBooks();
    }
  }, [user]);

  // Handle Return Button Click
  const handleReturnClick = async (bookId) => {
    try {
      const response = await fetch(`/api/books/${bookId}/return`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id }),
      });

      if (response.ok) {
        alert("Book returned successfully!");
        // Remove the returned book from the list
        setBorrowedBooks((prev) => prev.filter((book) => book.id !== bookId));
      } else {
        alert("Failed to return the book.");
      }
    } catch (error) {
      console.error("Error returning book:", error);
      alert("An error occurred while returning the book.");
    }
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

          {books.length === 0 ? (
            <p className="text-center font-semibold text-lg text-gray-600">No Data found for your account.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <BorrowedCard
                  key={book._id}
                  book={book}
                ></BorrowedCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>



    // {/* Return Button */}
    /* // <div className="card-actions justify-end mt-4">
    //   <button */
    /* //     onClick={() => handleReturnClick(book._id)}
    //     className="btn btn-primary"
    //   >
    //     Return Book
    //   </button>
    // </div> */

  );
};

export default BorrowedBooks