import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Extra from '../Components/Extra';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {

  return (
    <div>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>

      </header>

      <main className='w-11/12 mx-auto '>

        <section className=''>
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