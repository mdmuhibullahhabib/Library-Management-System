import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../Components/Login"
import Register from "../Components/Register"
import HomeLayout from "../layouts/HomeLayout"


const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>
    },

    {
        path:"/library",
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
        path:"*",
        element: <h2>error</h2>

    }
])

export default router