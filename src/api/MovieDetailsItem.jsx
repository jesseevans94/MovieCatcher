import { Link } from "react-router-dom"

const MovieDetailsItem = (props) => {
    return (
        <div className="p-3">
    <div className="container mx-auto mt-10 md:mt-20 border-b border-gray-500 pb-4 flex flex-col md:flex-row items-center">

        {/* Movie Image */}
        <img className="h-auto md:w-1/3" src={`https://image.tmdb.org/t/p/w400${props.image}`} alt="Movie Poster" />

        {/* Movie Details */}
        <div className="md:w-2/3 md:ml-6 md:mt-0 text-center md:text-left">

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 md:mt-0">{props.title}</h1>
            <div className="flex justify-center md:justify-start items-center text-gray-400 text-sm mt-2">
                <span className="mr-4">Rating: {props.voteAverage}</span>
                <span>Released: {props.releaseDate}</span>
            </div>
            <p className="mt-5 text-gray-300">{props.overview}</p>
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
                <a href="#" className="rounded bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 font-semibold mb-3 md:mb-0 md:mr-3 transition duration-300 ease-in-out">Play Trailer</a>
                <a href="#" className="rounded bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 font-semibold transition duration-300 ease-in-out">Add to Favorites</a>
            </div>

            {/* Back to Home Button */}
            <div className="mt-5 text-center md:text-left">
                <Link to="/">
                    <button className="rounded bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 font-semibold transition duration-300 ease-in-out">Back to Home</button>
                </Link>
            </div>
        </div>
    </div>
</div>
    )
}

export default MovieDetailsItem