import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../Components/Login"
import Register from "../Components/Register"
import HomeLayout from "../layouts/HomeLayout"
import AddBook from "../Pages/AddBook"
import BookCategories from "../Pages/BookCategories"
import AllBooks from "../Pages/AllBooks"
import UpdateBookForm from "../Pages/UpdateBookForm "
import BookDetails from "../Pages/BookDetails"
import BorrowedBooks from "../Pages/BorrowedBooks"
import Category from "../Components/Category"
import PrivateRoute from "./PrivateRouter"


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Category></Category>
            },
            {
                path: "/add-book",
                element: (
                    <PrivateRoute>
                        <AddBook></AddBook>
                    </PrivateRoute>
                ),
            },
            {
                path: "/books",
                element: (
                    <PrivateRoute>
                        <AllBooks></AllBooks>
                    </PrivateRoute>
                ),
                loader: () => fetch('http://localhost:5000/books'),
            },
            {
                path: "/borrowed-books",
                element: (
                    <PrivateRoute>
                        <BorrowedBooks></BorrowedBooks>
                    </PrivateRoute>
                ),
                loader: () => fetch('http://localhost:5000/borrowed-book'),
            },
        ]

    },

    {
        path: "/update-book/:_id",
        element: (
            <PrivateRoute>
                <UpdateBookForm></UpdateBookForm>
            </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params._id}`),
    },
    {
        path: "/category/:category",
        element: <BookCategories></BookCategories>,
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.category}`),
    },

    {
        path: "/details/:_id",
        element: (
            <PrivateRoute>
                <BookDetails></BookDetails>
            </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params._id}`),
    },

    {
        path: "/library",
        element: <h2>library</h2>

    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            }
        ]
    },
    {
        path: "*",
        element: <h2>error</h2>

    }
])

export default router