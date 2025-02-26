import { useContext } from "react";
import { FcLibrary } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// import { AuthContext } from "../Provider/AuthProvider";

function Navbar() {
      const { user, logOut } = useContext(AuthContext);

    return (
        <div className="shadow-md w-11/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/books">All Books</Link>
                            </li>
                            <li>
                                <Link to="/add-book">Add Book</Link>
                            </li>
                            <li>
                                <Link to="/borrowed-books">Borrowed Books</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <FcLibrary to={'/'} className=" text-5xl" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" text-lg menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/books">All Books</Link>
                        </li>
                        <li>
                            <Link to="/add-book">Add Book</Link>
                        </li>
                        <li>
                            <Link to="/borrowed-books">Borrowed Books</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=" mx-10">
                        <div className=" flex justify-end items-center text-2xl space-x-8">
                            <div className="flex gap-2">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src="https://i.ibb.co.com/3hmBF8g/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 lg:w-52 p-2 shadow">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                            {
            user && user?.email ? (<button onClick={logOut} className="btn btn-neutral rounded-none">Log Out</button>) :
              (<Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>)
          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;