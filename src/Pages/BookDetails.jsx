import React, { useContext, useState } from "react";
import { FaBook, FaUser, FaTags, FaStar, FaCalendar } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const BookDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [returnDate, setReturnDate] = useState("");
  const { user } = useContext(AuthContext)
  const book = useLoaderData();
  const navigate = useNavigate();
  console.log(user)
  const handleBorrowClick = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!returnDate) {
      Swal.fire({
        title: "Error",
        text: "Please select a return date",
        icon: "error",
      });
      return;
    }

    const borrowedBook = {
      bookId: book._id,
      name: book.bookName,
      authorName: book.authorName,
      category: book.category,
      image: book.image,
      borrowedDate: new Date().toISOString().split("T")[0],
      returnDate,
    };
    console.log(borrowedBook)

    fetch("http://localhost:5000/borrowed-book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(borrowedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book Borrowed Successfully",
            icon: "success",
          });
          setShowModal(false);
        }
      });
  };

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-lg shadow-lg">
        {/* Book Image & Details */}
        <div className="flex flex-col md:flex-row gap-8">
          <figure className="flex-shrink-0">
            <img
              src={book.image}
              alt={book.name}
              className="rounded-lg w-48 h-64 object-cover"
            />
          </figure>

          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-4">
              <FaBook className="inline mr-2" /> {book.name}
            </h1>
            <p className="flex items-center text-lg mb-2">
              <FaUser className="mr-2" /> <span className="font-semibold">Author:</span> {book.authorName}
            </p>
            <p className="flex items-center text-lg mb-2">
              <FaTags className="mr-2" /> <span className="font-semibold">Category:</span> {book.category}
            </p>
            <p className="flex items-center text-lg mb-2">
              <span className="font-semibold">Quantity Available:</span> {book.quantity}
            </p>
            <div className="flex items-center text-lg mb-4">
              <FaStar className="mr-2 text-yellow-400" /> <span className="font-semibold">Rating:</span> {book.rating}/5
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p className="text-base-content">{book.shortDescription}</p>
            </div>

            {/* Borrow Button */}
            <button
              onClick={handleBorrowClick}
              disabled={book.quantity === 0}
              className={`btn btn-primary w-full md:w-auto ${book.quantity === 0 ? "btn-disabled" : ""}`}
            >
              Borrow Book
            </button>
          </div>
        </div>
      </div>

      {/* Borrow Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-base-100 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Borrow Book</h2>

            <form onSubmit={handleSubmit}>
              {/* User Info */}
              <div className="mb-4">
                <p className="text-lg"><span className="font-semibold">Name:</span>{user.displayName}</p>
                <p className="text-lg"><span className="font-semibold">Email:</span> {user.email}</p>
              </div>

              {/* Book Cover Image */}
              <div className="flex justify-center mb-4 hidden">
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-32 h-48 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Book Title */}
              <div className="form-control mb-4">
                <label className="label"><span className="label-text">Title</span></label>
                <div className="flex items-center gap-2">
                  <FaBook className="text-gray-500" />
                  <input type="text" value={book.bookName} readOnly className="input input-bordered w-full" />
                </div>
              </div>

              {/* Category */}
              <div className="form-control mb-4">
                <label className="label"><span className="label-text">Category</span></label>
                <div className="flex items-center gap-2">
                  <FaTags className="text-gray-500" />
                  <input type="text" value={book.category} readOnly className="input input-bordered w-full" />
                </div>
              </div>

              {/* Borrowed Date */}
              <div className="form-control mb-4 hidden">
                <label className="label"><span className="label-text">Borrowed Date</span></label>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-gray-500" />
                  <input type="text" value={new Date().toISOString().split("T")[0]} readOnly className="input input-bordered w-full" />
                </div>
              </div>

              {/* Return Date Input  */}
              <div className="form-control mb-4">
                <label className="label"><span className="label-text">Return Date</span></label>
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-gray-500" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-ghost">Cancel</button>
                <button type="submit" className="btn btn-primary">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;

//   return (
//     <div className="p-8 bg-base-200 min-h-screen">
//       <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-lg shadow-lg">
//         {/* Book Image */}
//         <div className="flex flex-col md:flex-row gap-8">
//           <figure className="flex-shrink-0">
//             <img
//               src={book.image}
//               alt={book.name}
//               className="rounded-lg w-48 h-64 object-cover"
//             />
//           </figure>

//           {/* Book Details */}
//           <div className="flex-grow">
//             <h1 className="text-3xl font-bold mb-4">
//               <FaBook className="inline mr-2" />
//               {book.name}
//             </h1>

//             {/* Author */}
//             <p className="flex items-center text-lg mb-2">
//               <FaUser className="mr-2" />
//               <span className="font-semibold">Author:</span> {book.authorName}
//             </p>

//             {/* Category */}
//             <p className="flex items-center text-lg mb-2">
//               <FaTags className="mr-2" />
//               <span className="font-semibold">Category:</span> {book.category}
//             </p>

//             {/* Quantity */}
//             <p className="flex items-center text-lg mb-2">
//               <span className="font-semibold">Quantity Available:</span>{" "}
//               {book.quantity}
//             </p>

//             {/* Rating */}
//             <div className="flex items-center text-lg mb-4">
//               <FaStar className="mr-2 text-yellow-400" />
//               <span className="font-semibold">Rating:</span> {book.rating}/5
//             </div>

//             {/* Description */}
//             <div className="mb-6">
//               <h2 className="text-xl font-bold mb-2">Description</h2>
//               <p className="text-base-content">{book.description}</p>
//             </div>

//             {/* Borrow Button */}
//             <button
//               onClick={handleBorrowClick}
//               disabled={book.quantity === 0}
//               className={`btn btn-primary w-full md:w-auto ${book.quantity === 0 ? "btn-disabled" : ""
//                 }`}
//             >
//               Borrow Book
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Borrow Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-base-100 p-8 rounded-lg shadow-lg w-full max-w-md">
//             <h2 className="text-2xl font-bold mb-4">Borrow Book</h2>

//             <form onSubmit={handleSubmit}>
//               {/* User Info */}
//               <div className="mb-4">
//                 <p className="text-lg">
//                   <span className="font-semibold">Name:</span>
//                   {/* {user.displayName} */}
//                   displayName
//                 </p>
//                 <p className="text-lg">
//                   <span className="font-semibold">Email:</span>
//                   {/* {user.email} */}
//                   email
//                 </p>
//               </div>

//               {/* // cover image, title, category, borrowed date, and return date */}
//               {/* Hidden */}

//               {/* Cover Image */}
//               <div className="form-control mb-4 hidden">
//                 <label className="label">
//                   <span className="label-text">Cover Image</span>
//                 </label>
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={book.image}
//                     alt={book.name}
//                     className="w-24 h-32 object-cover rounded-lg"
//                   />
//                   <input
//                     type="text"
//                     value={book.image}
//                     readOnly
//                     className="input input-bordered w-full"
//                   />
//                 </div>
//               </div>

//               {/* Title */}
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Title</span>
//                 </label>
//                 <div className="flex items-center gap-2">
//                   <FaBook className="text-gray-500" />
//                   <input
//                     type="text"
//                     value={book.bookName}
//                     readOnly
//                     className="input input-bordered w-full"
//                   />
//                 </div>
//               </div>

//               {/* Category */}
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Category</span>
//                 </label>
//                 <div className="flex items-center gap-2">
//                   <FaTags className="text-gray-500" />
//                   <input
//                     type="text"
//                     value={book.category}
//                     readOnly
//                     className="input input-bordered w-full"
//                   />
//                 </div>
//               </div>

//               {/* Borrowed Date */}
//               <div className="form-control mb-4 ">
//                 <label className="label">
//                   <span className="label-text">Borrowed Date</span>
//                 </label>
//                 <div className="flex items-center gap-2">
//                   <FaCalendar className="text-gray-500" />
//                   <input
//                     type="text"
//                     name="appliedDate"
//                     value={new Date().toISOString().split("T")[0]}
//                     readOnly
//                     className="input input-bordered w-full"
//                   />
//                 </div>
//               </div>
//               {/* Hidden End */}

//               {/* return date */}


//               {/* Buttons */}
//               <div className="flex justify-end gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="btn btn-ghost mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Confirm
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookDetails;