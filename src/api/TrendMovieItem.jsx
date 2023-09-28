import { useState } from "react"
import { Link } from "react-router-dom";



const TrendMovieItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }


  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + '...';
    }
    return text;
  }


  return (

    <div className="w-full p-4 border-b border-gray-600 mb-10">
  <Link
    to={{
      pathname: "/movieDetails",
      search: `?id=${encodeURIComponent(props.id)}`,
    }}
  >
    {/* Movie Card Container */}
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-xl ${isHovered ? 'scale-110' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-auto rounded-lg overflow-hidden relative">
        {/* Movie Image */}
        <img
          className={`w-full transition-all duration-300 ${isHovered ? 'transform scale-105 blur-sm' : 'blur-none'}`}
          src={`https://image.tmdb.org/t/p/w400${props.image}`}
          alt=""
        />
        {isHovered && (
          // Dark overlay on hover
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300"></div>
        )}
      </div>

      {isHovered && (
        // Movie details on hover
        <div className="absolute inset-0 flex flex-col p-4 bg-black bg-opacity-10 backdrop-blur-sm">
          <div className="text-white">
            {/* Movie Title */}
            <p className="font-bold text-xl text-center mb-2" >
              {props.title}
            </p>
            {/* Release Date */}
            <p className="text-center text-gray-50 mb-2" >
              Release Date: {props.releaseDate}
            </p>
          </div>
          <div className="text-gray-300 mt-auto">
            {/* Movie Overview */}
            <p className="text-sm" >
              {truncateText(props.overview, 100)}
            </p>
          </div>
        </div>
      )}
    </div>

    <div className="p-4">
      {/* Movie Title */}
      <h1 className="text-xl text-gray-200 font-semibold mb-2">{props.title}</h1>
      <div className="flex justify-between">
        {/* Release Date */}
        <p className="text-sm text-gray-600">{props.releaseDate}</p>
        {/* Like Button */}
        <button className="hover:text-red-700 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18.261l-1.45-1.32C3.54 11.068 1 8.35 1 5.5 1 3.019 3.019 1 5.5 1c1.418 0 2.762.668 3.633 1.814C9.738 1.668 11.082 1 12.5 1 14.981 1 17 3.019 17 5.5c0 2.85-2.54 5.568-7.55 11.442L10 18.262z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </Link>
</div>


  )
}
export default TrendMovieItem