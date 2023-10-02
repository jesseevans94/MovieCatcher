import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const MovieDetailsItem = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [favorites, setFavorites] = useState(false);
    useEffect(() => {
        checkFavorite();
    }, []);

    const checkFavorite = () => {
        
        const url = `https://api.themoviedb.org/3/account/20465724/favorite/movies?language=en-US&page=1&session_id=${localStorage.getItem('SessionID')}&sort_by=created_at.asc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log("Movie ID", json.results)
                const isMovieLiked = json.results.some(movie => movie.id === props.id)
                setIsLiked(isMovieLiked)
                if (isMovieLiked) {
                    setFavorites(true)
                } else {
                    setFavorites(false)
                }
            }
            )
            .catch(err => console.error('error:' + err));
    }
    const Favorites = () => {
        const url = `https://api.themoviedb.org/3/account/20465724/favorite?session_id=${localStorage.getItem('SessionID')}`;
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({ media_type: 'movie', media_id: props.id, favorite: true })
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    }

    const RemoveFavorites = () => {
        const url = `https://api.themoviedb.org/3/account/20465724/favorite?session_id=${localStorage.getItem('SessionID')}`;
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({ media_type: 'movie', media_id: props.id, favorite: false })
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    }


    const handleLike = () => {
        setIsLiked(!isLiked);
        if (!isLiked && !favorites) {
            Favorites()
            console.log("LikePressed", props.id)
        } else {
            RemoveFavorites()
            console.log("RemovePressed", props.id);
        }
    }

    const getButtonText = () => {
        if (isLiked) {
            return "Remove from Favorites"
        } else {
            return "Add to Favorites"
        }
    }
    return (

        <div className="max-w-[1640px] mx-auto sm:max-w-screen-xl mt-10 md:mt-20 border-b border-gray-500 pb-4 flex flex-col md:flex-row items-center p-3">

            {/* Movie Image */}
            <div className="flex-shrink-0 md:w-1/3">
                <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/w400${props.image}`} alt="Movie Poster" />
            </div>

            {/* Movie Details */}
            <div className="flex flex-col md:ml-10 md:lg:ml-20 md:mt-0 md:w-2/3 text-center md:text-left">

                {/* Movie Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 md:mt-0">{props.title}</h1>

                {/* Movie Rating and Release Date */}
                <div className="flex justify-center md:justify-start items-center text-gray-400 text-sm mt-2 md:mt-5">
                    <span className="mr-4">Rating: {props.voteAverage}</span>
                    <span>Released: {props.releaseDate}</span>
                </div>

                {/* Movie Overview */}
                <p className="mt-5 text-gray-300 text-md md:text-lg">{props.overview}</p>

                {/* Movie Language */}
                <div className="mt-5 font-semibold">Language: {props.lang}</div>

                {/* Movie Links */}
                <div className="mt-5 text-center md:text-left">

                    {/* Official Website Link */}
                    <a href={props.homepage} className="text-blue-500 hover:underline">Official Website</a>

                    {/* Featured Cast */}
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

                    {/* Play Trailer Button */}
                    <a href="#" className="rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-5 py-2 font-semibold mb-3 md:mb-0 md:mr-3 transition duration-300 ease-in-out">Play Trailer</a>

                    {/* Add to Favorites Button */}
                    <button onClick={handleLike} className="rounded-md bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-900 text-white px-5 py-2 font-semibold transition duration-300 ease-in-out">{getButtonText()}</button>
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