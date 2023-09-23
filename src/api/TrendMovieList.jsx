import TrendMovieItem from "./TrendMovieItem"

const TrendMovieList =(props) => {
    return(
        <div className="container mx-auto ">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-500 font-semibold mt-20">Trending Movies</h1>
            <div className="border-b border-gray-600 mt-4"></div>
            <ul className='flex flex-wrap mx-4 pt'>
            {
                props.trendMovies.map((movie) => (
                    <TrendMovieItem
                    key={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    image={movie.poster_path}
                    releaseDate={movie.release_date}
                    mediaType={movie.media_type}
                    lang={movie.original_language}
                    />
                ))
            }
        </ul>
        
        </div>
    )
}
export default TrendMovieList