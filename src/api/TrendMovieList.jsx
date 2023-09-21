import TrendMovieItem from "./TrendMovieItem"

const TrendMovieList =(props) => {
    return(
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
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
    )
}
export default TrendMovieList