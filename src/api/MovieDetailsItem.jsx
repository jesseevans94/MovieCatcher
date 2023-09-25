import { Link } from "react-router-dom"

const MovieDetailsItem = (props) => {
    return(
        <div>
            <div className='container mx-auto flex mt-20 border-b border-gray-500 pb-2'>
                <img className="h-auto w-85" src={`https://image.tmdb.org/t/p/w400${props.image}`} alt="" />
                <div className='ml-24 '>
                    <h1 className='text-4xl font-sembold'>{props.title}</h1>
                    <span className='text-gray-500 text-sm'> Rate: {props.voteAverage} | {props.releaseDate} Adventure Mystery Thriller</span>
                    <p className='mt-5'>{props.overview}</p>
                    <span className='mt-5 font-semibold'>Language: {props.lang}</span>
                    
                    <div className='mt-5'>
                    <div><a href={props.homepage}>Home Page</a></div>
                        <span className='mt-5 font-semibold'> Featured Cast</span>
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

                    <div>
                    <Link to='/'>
                        <button className='rounded bg-yellow-500 px-5 py-4 text-black font-semibold ml-5'>Home</button>
                    </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MovieDetailsItem