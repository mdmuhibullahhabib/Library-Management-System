import { createBrowserRouter } from "react-router-dom"


const router = createBrowserRouter([
    {
        path:"/",
        element: <h2>home</h2>
    },

    {
        path:"/library",
        element: <h2>library</h2>

    },
    {
        path:"/auth",
        element: <h2>login</h2>

    },
    {
        path:"*",
        element: <h2>error</h2>

    }
])

export default router