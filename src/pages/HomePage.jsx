import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiFillTag } from "react-icons/ai";
import TrendMovieList from "../api/TrendMovieList";
import Verification from "./Verification";
import Footer from "../Footer";



const HomePage = () => {

    const [guestId, setGuestId] = useState('');
    const [totalPages, settotalPages] = useState('');
    const [trendMovies, setTrendMovies] = useState([]);
    const [page, setPage] = useState(1)
    const [activeSearchBoolean, setactiveSearchBoolean] = useState(false)

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

    //reset GuestID
    const resetGuestIdHandler = () => {
        localStorage.removeItem('guestID')
        Verification()
        setGuestId(localStorage.getItem('guestID'))
    }

    return (
        <div>
            <nav className='bg-gray-800 border-b border-gray-600 '>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between h-16'>
                        <div className='flex'>
                            <div className='flex-shrink-0 flex items-center'>
                                <span className='text-xl font-serif sm:text-2xl md:text-3xl lg:text-4xl font-bold'><span className='text-red-600'>M</span>ovies <span className='text-red-600'>C</span>atcher</span>
                            </div>
                            <div className='hidden md:flex md:ml-6 '>
                                <a href="" className='text-gray-300 hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-sm font-medium'>Movies</a>
                                <a href="" className='text-gray-300 hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-sm font-medium'>Tv Show</a>
                                <a href="" className='text-gray-300 hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-sm font-medium'>Anime</a>

                            </div>
                        </div>
                        <div className='hidden md:flex items-center'>
                            <div className="bg-gray-900 rounded-full flex items-center px-2 ">
                                <AiOutlineSearch size={25} onClick={resetGuestIdHandler} />
                                <input className="bg-transparent p-2 focus:outline-none focus:border-blue-500 w-full" type="text" placeholder="Search" onChange={handleInputChange}
                                    onKeyUp={handleKeyPress} />
                            </div>

                            <Link to='/login'>
                                <button className='ml-4 rounded-full py-2 px-4 bg-red-600'>Login</button>
                            </Link>
                        </div>
                        <div className='md:hidden flex items-center'>
                            <div onClick={() => setNav(!nav)} className="cursor-pointer">
                                <AiOutlineMenu size={30} />
                            </div>
                        </div>
                        {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}


                        {/* Side drawer menu */}
                        <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-gray-800/40 z-10 duration-300 " : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                            <AiOutlineClose onClick={() => setNav(!nav)} className="absolute right-4 top-4 cursor-pointer" size={30} />
                            <h2 className="text-2xl p-4 font-serif"><span className="font-bold text-red-600">M</span>ovie <span className="font-bold text-red-600">C</span>atcher</h2>
                            <nav>
                                <ul className="flex flex-col p-4 text-gray-300 items-center text-2xl border-b border-gray-600 font-bold ">
                                    <h1 className=''>Movies</h1>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </nav>
            
            <button onClick={resetGuestIdHandler}>Reset Guest ID</button>
            
            
            
            {trendMovies.results && <TrendMovieList trendMovies={trendMovies.results} />}
            <div className="flex items-center justify-center mt-3">
                <button onClick={previousPageHandler} className="bg-white text-black hover:bg-yellow-900 font-bold py-2 px-4 rounded-full mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                </button>
                <p>Current Page: {page}</p>
                <button className="bg-red-600 hover:bg-yellow-900 font-bold py-2 px-4 rounded-full ml-3" onClick={nextPageHandler}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                </button>
            </div>
            <div className="flex justify-between px-5 my-10">
            <p>Total Pages {totalPages}</p>
            <p>
                GuestId: {guestId}
            </p>
            </div>
            <Footer />


        </div>
    )
}
export default HomePage