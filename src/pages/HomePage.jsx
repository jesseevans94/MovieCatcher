import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import TrendMovieList from "../api/TrendMovieList";
import Verification from "./Verification";
import Footer from "../components/Footer";
import MovieDetailsList from "../api/MovieDetailsList";
import GenreList from "../components/GenreList";




const HomePage = () => {

    const [guestId, setGuestId] = useState('');
    const [totalPages, settotalPages] = useState('');
    const [trendMovies, setTrendMovies] = useState([]);
    const [page, setPage] = useState(1)
    const [activeSearchBoolean, setactiveSearchBoolean] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const nextPageHandler = () => {
        if (page < totalPages) {
            console.log("input:", inputValue)
            if (!inputValue) {
                setPage(page + 1)
                loadTrendMovies(page + 1)
            } if (inputValue) {
                setPage(page + 1)
                console.log("next", inputValue, "page", page + 1)
                loadSearchMovies(page + 1)
            }
        }
    }

    const previousPageHandler = () => {
        if (page <= totalPages && page > 1) {
            setPage(page - 1)
            if (!inputValue) {
                loadTrendMovies(page - 1)
            } if (inputValue) {
                setPage(page - 1)
                loadSearchMovies(page - 1)
            }
        }
    }

    useEffect(() => {
        // generateGuestId()
        if (!localStorage.getItem('guestID')) {
            Verification()
        }
        console.log("ID from main", localStorage.getItem('guestID'))
        setGuestId(localStorage.getItem('guestID'))
        if (!inputValue && !activeSearchBoolean) { loadTrendMovies(page) }
    }, [])

    const loadTrendMovies = (pageNumber) => {
        const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNumber}`;
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

                settotalPages(json.total_pages)
                console.log("Total Pages: ", json)
                setTrendMovies(json)
            })
            .catch(err => console.error('error:' + err));
    }

    const loadSearchMovies = (pageNumber) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false/movie/day?language=en-US&page=${pageNumber}`;
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

                settotalPages(json.total_pages)
                console.log("Total Searched Pages: ", json)
                setTrendMovies(json)
            })
            .catch(err => console.error('error:' + err));
    }

    // Nav search:
    const [inputValue, setInputValue] = useState('');

    const [nav, setNav] = useState(false)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        setactiveSearchBoolean(true)
        handleSearchClick()
        if (!inputValue) {
            loadTrendMovies(page)
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setactiveSearchBoolean(true)
            handleSearchClick();
        }
    }

    const handleSearchClick = () => {
        if (inputValue) {
            loadSearchMovies(page)
        } else {
            loadTrendMovies(page)
        }

        if (!activeSearchBoolean) {
            loadTrendMovies(page)
        }
    }

    //Create MovieList
    const [listName, setListName] = useState('')
    const [listDescription, setlistDescription] = useState('')

    const listNameHandler = (e) => {
        setListName(e.target.value)
    }

    const listDescriptionHandler = (e) => {
        setlistDescription(e.target.value)
    }

    const createMovieListHandler = () => {
        const url = `https://api.themoviedb.org/3/list?session_id=16eee5247a3a379d2ca1a1ddce0f0739a07df111`;
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({
                name: listName,
                description: listDescription,
                language: 'en'
            })
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    }



    //reset GuestID
    const resetGuestIdHandler = () => {
        localStorage.removeItem('guestID')
        Verification()
        setGuestId(localStorage.getItem('guestID'))
    }


    return (
        <div>
            <nav className='bg-gray-800/80 border-b border-gray-600 fixed w-full z-10'>
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
            <div className='flex md:mr-14'>
                <div className='flex-shrink-0 flex items-center'>
                    <span className='text-xl font-serif sm:text-3xl  md:text-3xl lg:text-4xl font-bold'><span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-red-600">M</span>ovies <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-red-600">C</span>atcher</span>
                </div>
                <div className='hidden xl:ml-10 lg:flex md:ml-2'>
                    <a href="" className='text-gray-300 hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-sm font-medium'>Movies</a>
                    <a href="" className='text-gray-300 hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-sm font-medium'>Tv Show</a>
                    <Link to="/About" className="flex"> {/* Added 'flex items-center' */}
                        <a href="" className='text-gray-300 hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-sm font-medium'>About us</a>
                    </Link>
                </div>
            </div>
            <div className='hidden md:flex items-center'>
                <div className="bg-gray-900 rounded-full flex items-center px-2 ">
                    <AiOutlineSearch size={25} onClick={handleSearchClick} className="cursor-pointer" />
                    <input className="bg-transparent p-2 focus:outline-none focus:border-blue-500 w-full" type="text" placeholder="Search" onChange={handleInputChange}
                        onKeyUp={handleKeyPress} />
                </div>
                <Link to='/login'>
                    <button className="ml-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-700 hover:to-gray-900 text-white px-5 py-2 font-semibold transition duration-300 ease-in-out">Login</button>
                </Link>
            </div>
            <div className='lg:hidden flex items-center'>
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
            </div>
            {nav ? <div className="bg-black/95 fixed w-full h-[50%] z-10 top-0 left-0"></div> : ''}
            {/* Side drawer menu */}
            {/* OverLay */}
            <div className={nav ? "fixed top-0 left-0 w-full h-[50%] bg-gray-800/40 z-10 duration-300 " : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose onClick={() => setNav(!nav)} className="absolute right-4 top-4 cursor-pointer" size={30} />
                <h2 className="text-2xl p-4 font-serif"><span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-br from-white to-red-600">M</span>ovie <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-red-600">C</span>atcher</h2>
                <nav>
                    <div className=' flex flex-col text-center space-y-5 py-12'>
                        <a href="" className='text-gray-300  hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-4xl font-medium'>Movies</a>
                        <a href="" className='text-gray-300  hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-4xl font-medium'>Tv Show</a>
                        <Link to="/About">
                            <a href="" className='text-gray-300  hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-4xl font-medium'>About us</a>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</nav>

            <button className="mt-16" onClick={resetGuestIdHandler}>Reset Guest ID</button>
            <div className="container mx-auto sm:max-w-screen-xl">
                {/* Heading for Trending Movies */}
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-20 px-6 py-4 rounded-lg shadow-lg">
                    Trending Movies
                </h1>

                {/* Display a list of genres */}
                <GenreList />

                {/* separator */}
                <div className="border-b border-gray-600 mt-4 mb-5"></div>
                {trendMovies.results && <TrendMovieList trendMovies={trendMovies.results} />}
            </div>
            <div className="flex items-center justify-center mt-3">
                <button onClick={previousPageHandler} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full mr-3 transition duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>
                </button>
                <p className="text-lg">Current Page: {page}</p>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-3 transition duration-300 ease-in-out" onClick={nextPageHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-between px-5 my-10">
                <p className="text-lg">Total Pages: {totalPages}</p>
                <p className="text-lg">Guest ID: {guestId}</p>
            </div>
            <Footer />


        </div>
    )
}
export default HomePage