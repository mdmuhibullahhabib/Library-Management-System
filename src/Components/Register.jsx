import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { AuthContext } from '../Provider/AuthProvider';

function Register() {
//   const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")

    setError('');

    if (password.length < 5) {
      setError("Must be more the 5 character long");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.")
      return;
    }


    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            // sent data to server
            fetch('https://visa-processing-server-kappa.vercel.app/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(user),
            })
            navigate("/");
            Swal.fire({
              title: "Registration Successfully!",
              icon: "success",
              draggable: true
            });
          })
          .catch(error => {
            console.log('ERROR', error.message);
            setError(error.message)
          })
      })

  }
  return (
    <div className='flex justify-center items-center'>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-none">

        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control mt-6">
            <h2 className="font-semibold text-2xl text-center">Register your account</h2>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name='photo' type="text" placeholder="Photo-url" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        {
          error && <p className='text-red-600'>{error}</p>
        }
      </div>
    </div>

  )
}

export default Register