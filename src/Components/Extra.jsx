import React from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Extra = () => {
  // Featured Books Data
  const featuredBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://via.placeholder.com/150x200?text=Book+Cover",
      rating: 4.5,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://via.placeholder.com/150x200?text=Book+Cover",
      rating: 4.8,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      image: "https://via.placeholder.com/150x200?text=Book+Cover",
      rating: 4.7,
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      comment:
        "This library has an amazing collection of books. I always find something new and interesting to read!",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment:
        "The staff is very helpful, and the online system makes it easy to manage my borrowed books.",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Alice Johnson",
      comment:
        "I love the variety of genres available. The library is my go-to place for both fiction and non-fiction.",
      rating: 4.7,
    },
  ];

  return (
    <div className="p-8 bg-base-200">
      {/* Banner Slider */}
      {/* <BannerSlider /> */}

      {/* Featured Books Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <figure className="px-4 pt-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="rounded-lg h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{book.title}</h3>
                <p className="text-sm text-gray-500">by {book.author}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-${
                        i < Math.floor(book.rating) ? "yellow-400" : "gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm">{book.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="text-gray-400 mr-2" />
                  <p className="italic text-gray-700">{testimonial.comment}</p>
                  <FaQuoteRight className="text-gray-400 ml-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{testimonial.name}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-${
                          i < Math.floor(testimonial.rating)
                            ? "yellow-400"
                            : "gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Extra