import MovieDetailsPages from "../pages/MovieDetailsPages"

const MovieDetailsList = (props) =>{
    return(
        <div>
            {
                props.detailed.map((movie) => (
                    <MovieDetailsPages
                    key={movie.title}
                    title={movie.title}
                    
                    />
                ))
            }
            {console.log("From List: ",props.detials)}
        </div>

    )
}
export default MovieDetailsList