import { useEffect, useState } from "react";
import TrendMovieList from "./api/TrendMovieList";


function App() {

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
  const generateGuestId = () => {
    const url = 'https://api.themoviedb.org/3/authentication/guest_session/new';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
      }
    }
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json.guest_session_id)
        setGuestId(json.guest_session_id);
      })
      .catch(err => console.error('error:' + err));
  };
  useEffect(() => {
    generateGuestId()
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

    // if(inputValue){
    //   console.log("no input", inputValue)
    //   setactiveSearchBoolean(false)
    // }
    if (!activeSearchBoolean) {
      loadTrendMovies(page)
    }

  }
  return (
    <>
      <div className="w-[300px] lg:pr-2">
        <div className="relative flex w-full flex-wrap items-stretch">
          <input
            type="Search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            id="Search"
            value={inputValue}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
            aria-describedby="button-addon3" />
          <button
            className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 motion-reduce:transition-none"
            type="button"
            id="button-addon3"
            data-te-ripple-init
            onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </div>
      <p>
        GuestId: {guestId}
      </p>
      {trendMovies.results && <TrendMovieList trendMovies={trendMovies.results} />}
      <button onClick={nextPageHandler}>next page</button>
      <p>Current Page: {page}</p>
      <button onClick={previousPageHandler}>previous page</button>
      <p>Total Pages {totalPages}</p>
    </>
  )
}

export default App
