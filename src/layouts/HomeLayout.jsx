import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Extra from '../Components/Extra';

const HomeLayout = () => {

  return (
    <div>
      <header>
        <nav>
        <Navbar></Navbar>
        </nav>
        <Banner></Banner>
      </header>

      <main className='w-11/12 mx-auto '>

        <section className=''>
          <Category></Category>
        </section>

<section>
  <Extra></Extra>
</section>

      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default HomeLayout