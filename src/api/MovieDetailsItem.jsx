import { Link } from "react-router-dom"

const MovieDetailsItem = (props) => {
    return (
        
            <div className="max-w-[1640px] mx-auto sm:max-w-screen-xl mt-10 md:mt-20 border-b border-gray-500 pb-4 flex flex-col md:flex-row items-center p-3">

                {/* Movie Image */}
                <div className="flex-shrink-0 md:w-1/3">
                    <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/w400${props.image}`} alt="Movie Poster" />
                </div>

                {/* Movie Details */}
                <div className="flex flex-col md:ml-10 md: lg:ml-20 md:mt-0 md:w-2/3 text-center md:text-left">

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 md:mt-0">{props.title}</h1>
                    <div className="flex justify-center md:justify-start items-center text-gray-400 text-sm mt-2 md:mt-5">
                        <span className="mr-4">Rating: {props.voteAverage}</span>
                        <span>Released: {props.releaseDate}</span>
                    </div>
                    <p className="mt-5 text-gray-300 text-md md:text-lg">{props.overview}</p>
                    <div className="mt-5 font-semibold">Language: {props.lang}</div>

                    {/* Movie Links */}
                    <div className="mt-5 text-center md:text-left">
                        <a href={props.homepage} className="text-blue-500 hover:underline">Official Website</a>
                        <div className="mt-2 font-semibold">Featured Cast</div>
                        <div className="flex mt-2">
                            <div className="mr-5">
                                <span className="font-semibold">Steven Spielberg</span>
                                <span className="text-gray-500 block">Director</span>
                            </div>
                            <div className="">
                                <span className="font-semibold">Carl Gottlieb</span>
                                <span className="text-gray-500 block">Writer</span>
                            </div>
                        </div>
                    </div>

                    {/* Movie Actions */}
                    <div className="mt-5 flex flex-col md:flex-row justify-center md:justify-start">
                        <a href="#" className="rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2 font-semibold mb-3 md:mb-0 md:mr-3 transition duration-300 ease-in-out">Play Trailer</a>
                        <a href="#" className="rounded-md bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-900 text-white px-5 py-2 font-semibold transition duration-300 ease-in-out">Add to Favorites</a>
                    </div>

                    {/* Back to Home Button */}
                    <div className="mt-5 text-center md:text-left">
                        <Link to="/">
                            <button className="rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2 font-semibold transition duration-300 ease-in-out">Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        
    )
}

export default MovieDetailsItem