import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className=''>
        <section className='bg-[#f4f4f4]'>
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default HomeLayout