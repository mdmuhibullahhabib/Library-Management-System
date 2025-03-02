// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaBookReader } from "react-icons/fa";
// import Rating from "react-rating-stars-component";
// // import { useForm } from "react-hook-form";

// const BookDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
// //   const { user } = useAuth(); // Get logged-in user details
//   const [book, setBook] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const { register, handleSubmit } = useForm();

//   // Fetch book details from the server
//   useEffect(() => {
//     fetch(`https://library-management-server-theta.vercel.app/book/${id}`)
//       .then((res) => res.json())
//       .then((data) => setBook(data))
//       .catch((error) => console.error("Error fetching book:", error));
//   }, [id]);

//   // Handle book borrowing
//   const onBorrowSubmit = async (data) => {
//     if (book.quantity > 0) {
//       const borrowInfo = {
//         userEmail: user.email,
//         bookId: id,
//         returnDate: data.returnDate,
//       };

//       // Update database: Decrease book quantity
//       const response = await fetch(`https://library-management-server-theta.vercel.app/borrow/${id}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(borrowInfo),
//       });

//       if (response.ok) {
//         alert("Book borrowed successfully!");
//         setBook((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
//         setIsModalOpen(false);
//       }
//     }
//   };

//   if (!book) return <p className="text-center">Loading book details...</p>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Back Button */}
//       <button onClick={() => navigate(-1)} className="btn btn-outline mb-4 flex items-center gap-2">
//         <FaArrowLeft /> Back
//       </button>

//       {/* Book Details Card */}
//       <div className="card lg:card-side bg-base-100 shadow-xl p-4">
//         <figure className="w-full lg:w-1/3">
//           <img src={book.image} alt={book.bookName} className="w-full h-72 object-cover rounded-lg" />
//         </figure>

//         <div className="card-body w-full lg:w-2/3">
//           <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
//           <p className="text-gray-600">Author: {book.authorName}</p>
//           <span className="badge badge-primary">{book.category}</span>
//           <p className="text-sm">{book.shortDescription}</p>
//           <p className="text-sm">Available Copies: <strong>{book.quantity}</strong></p>

//           {/* Rating */}
//           <div className="flex items-center">
//             <span className="mr-2 text-sm font-semibold">Rating:</span>
//             <Rating count={5} value={book.rating} size={24} edit={false} activeColor="#ffd700" />
//           </div>

//           {/* Borrow Button */}
//           <div className="card-actions justify-end">
//             <button
//               className="btn btn-primary flex items-center gap-2"
//               onClick={() => setIsModalOpen(true)}
//               disabled={book.quantity === 0}
//             >
//               <FaBookReader />
//               {book.quantity > 0 ? "Borrow" : "Out of Stock"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Borrow Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="modal-box w-96 bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-bold mb-4">Borrow Book</h3>
//             <form onSubmit={handleSubmit(onBorrowSubmit)}>
//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   className="input input-bordered w-full"
//                   value={user?.displayName}
//                   disabled
//                 />
//               </div>

//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   className="input input-bordered w-full"
//                   value={user?.email}
//                   disabled
//                 />
//               </div>

//               <div className="form-control mb-4">
//                 <label className="label">
//                   <span className="label-text">Return Date</span>
//                 </label>
//                 <input
//                   type="date"
//                   className="input input-bordered w-full"
//                   {...register("returnDate", { required: true })}
//                 />
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   className="btn btn-outline mr-2"
//                   onClick={() => setIsModalOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">Confirm Borrow</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookDetails;
