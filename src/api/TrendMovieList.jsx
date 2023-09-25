import TrendMovieItem from "./TrendMovieItem"
import GenreList from "../components/GenreList"

const TrendMovieList = (props) => {
    return (
        <div className="container mx-auto sm:max-w-screen-xl">
    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-20 px-6 py-4 rounded-lg shadow-lg">
        Trending Movies
    </h1>
    <GenreList />
    <div className="border-b border-gray-600 mt-4"></div>
    <ul className="flex flex-wrap mx-2 md:mx-4 pt-2">
        {props.trendMovies.map((movie) => (
            <TrendMovieItem
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                image={movie.poster_path}
                releaseDate={movie.release_date}
                mediaType={movie.media_type}
                lang={movie.original_language}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-2"  // Adjusted width for larger screens
                // Adjusted width for screens smaller than 640px  
            />
        ))}
    </ul>
</div>
    )
}
export default TrendMovieList