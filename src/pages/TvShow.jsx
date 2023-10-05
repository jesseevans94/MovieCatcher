import { useEffect, useState } from "react";
import TrendMovieList from "../api/TrendMovieList";

const TvShow = () => {
    const [tvShow, setTvShow] = useState([]);
    useEffect(() => {
        tvShowHandler();
    }, []);

    const tvShowHandler = () => {
        const url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0",
            },
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setTvShow(json)
            });
    };
    return <div>
        {tvShow.results && <TrendMovieList trendMovies={tvShow.results} />}
    </div>;
};
export default TvShow;
