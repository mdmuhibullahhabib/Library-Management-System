import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const categories = [
  { name: "Novel", path: "/category/novel" },
  { name: "Thriller", path: "/category/thriller" },
  { name: "History", path: "/category/history" },
  { name: "Drama", path: "/category/drama" },
];

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/category')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  console.log(categories)

  return (
    <div className="w-11/12 mx-auto text-center ">
        <h2 className="font-bold text-4xl text center my-4">Books Categories</h2>

      <div className="max-w-4xl mx-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link to={category.category_name} className="card bg-base-100 shadow-xl p-4 text-center hover:scale-105 transition">
            <FaBook className="text-3xl text-primary mx-auto" />
            <h3 className="text-lg font-bold mt-2">{category.category_name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;