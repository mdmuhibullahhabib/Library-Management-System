import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
function AuthLayout() {
  return (
   <div className="">
    <header className='mb-none'>
      <Navbar></Navbar>
    </header>
     <div className=' mx-auto py-10 bg-[#F3F3F3]'>
        <Outlet></Outlet>
    </div>
   </div>
  )
}

export default AuthLayout;