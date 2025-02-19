
import { FaGlobe, FaStar, FaBookOpen } from "react-icons/fa";

const Banner = () => {

    return (
            <div className="carousel w-full mb-8">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className={`carousel-item relative w-full h-[300px] flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500`}
                    >
                        <div className="text-center text-white px-4">
                            <div className="mb-4"><FaBookOpen className="text-5xl text-primary" /></div>
                            <h2 className="text-4xl font-bold mb-2">Explore a Vast Collection</h2>
                            <p className="text-lg">Discover books from various genres, including thrillers, history, sci-fi, and more.</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className={`carousel-item relative w-full h-[300px] flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500`}
                    >
                        <div className="text-center text-white px-4">
                            <div className="mb-4"><FaStar className="text-5xl text-secondary" /></div>
                            <h2 className="text-4xl font-bold mb-2">Rate and Review</h2>
                            <p className="text-lg">Share your thoughts and ratings on books to help others make informed choices.</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className={`carousel-item relative w-full h-[300px] flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500`}
                    >
                        <div className="text-center text-white px-4">
                            <div className="mb-4"><FaGlobe className="text-5xl text-accent" /></div>
                            <h2 className="text-4xl font-bold mb-2">Accessible Anytime, Anywhere</h2>
                            <p className="text-lg">Enjoy a seamless reading experience with our user-friendly digital library platform.</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
    );
};

export default Banner;