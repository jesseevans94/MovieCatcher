import MovieDetailsItem from "./MovieDetailsItem"

const MovieDetailsList = (props) =>{
    return(
        <ul>
            {
                
                    <MovieDetailsItem
                    key={props.detailed.id}
                    title={props.detailed.title}
                    overview={props.detailed.overview}
                    voteAverage={props.detailed.vote_average}
                    releaseDate={props.detailed.release_date}
                    lang={props.detailed.original_language}
                    imdb_id={props.detailed.imdb_id}
                    id={props.detailed.id}
                    homepage={props.detailed.homepage}
                    image={props.detailed.poster_path}
                    back_img={props.detailed.backdrop_path}
                    />
                
                
            }
            
        </ul>
    )
}
export default MovieDetailsList