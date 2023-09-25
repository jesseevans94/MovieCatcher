import { Link, useSearchParams } from "react-router-dom";
import TrendMovieList from "../api/TrendMovieList"


const MovieDetailsPages = () =>{
    // const location = useLocation();
    // const { title } = location.state || {};

    const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const overview = searchParams.get("overview");
  const image = searchParams.get("image");
  const releaseDate = searchParams.get("releaseDate");
  const mediaType = searchParams.get("mediaType");
  const lang = searchParams.get("lang");
    
    
    return(
        <div >
            <div className='container mx-auto flex mt-20 border-b border-gray-500 pb-2'>
            <img className="h-auto w-85" src={`https://image.tmdb.org/t/p/w400${image}`} alt="" />
            <div className='ml-24 '>
                <h1 className='text-4xl font-sembold'>{title}</h1>
                <span className='text-gray-500 text-sm'> 69% | {releaseDate} Adventure Mystery Thriller</span>
                <p className='mt-5'>{overview}</p>
                <div className='mt-5'>
                    <span className='mt-5 font-semibold'>Featured Cast</span>
                    <div className='flex'>
                        <div className='flex flex-col mt-5 mr-5'>
                            <span>Steven Spielberg</span>
                            <span className='text-gray-500'>Director</span>
                        </div>
                        <div className='flex flex-col mt-5'>
                            <span>Carl Gottlieb</span>
                            <span className='text-gray-500'>Writer</span>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <a href="#" className='rounded bg-yellow-500 px-5 py-4 text-black font-semibold '>Play Trailer</a>
                    <a href="#" className='rounded bg-yellow-500 px-5 py-4 text-black font-semibold ml-5'><span className=''>Favorites</span></a>
                </div>
                
                <Link to='/'>
                <button className='rounded bg-yellow-500 px-5 py-4 text-black font-semibold ml-5'>Go Back</button>
                </Link>
            </div>
            </div>
        </div>
    )
}
export default MovieDetailsPages