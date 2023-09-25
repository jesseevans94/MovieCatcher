import { useState } from "react"
import { FaHeart } from 'react-icons/fa'
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
        
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:max-w-7xl p-4 border-b border-gray-400">
        <Link to={{
                pathname: "/movieDetails",
                search: `?id=${encodeURIComponent(props.id)}`,
                }}
                >
    {/* Outer container for the component */}
	
    <div
        className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-xl hover:scale-105`}
        onMouseEnter={handleMouseEnter}  // Event handler for mouse enter
        onMouseLeave={handleMouseLeave}  // Event handler for mouse leave
    >
        {/* Container for the image and overlay */}
        <div className="h-auto rounded-lg overflow-hidden relative">
            <img
                className={`w-full transition-all duration-300 ${isHovered ? 'transform scale-105 blur-sm' : 'blur-none'}`}
                src={`https://image.tmdb.org/t/p/w400${props.image}`}  // Image source URL
                alt=""  
            />
            {isHovered && <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>}
            {/* Overlay when the mouse is hovered */}
        </div>

        {isHovered && (
            // Details displayed on mouse hover
            <div className="absolute inset-0 flex flex-col p-4 bg-black bg-opacity-10 backdrop-blur-lg">
                <div className="text-white">
                    <p className="font-bold text-xl text-center mb-2">{props.title}</p>
                    <p className="text-center text-gray-300 mb-2">Release Date: {props.releaseDate}</p>
                </div>
                <div className="text-gray-300 mt-auto">
                    <p className="text-sm">{truncateText(props.overview, 100)}</p>
                </div>
            </div>
        )}
    </div>

    {/* Additional movie details and actions */}
    <div className="p-4">
        <h1 className="text-lg text-gray-200 font-semibold mb-2">{props.title}</h1>
        <div className="flex justify-between">
            <p className="text-sm text-gray-600">{props.releaseDate}</p>
            <button className=" hover:text-red-700 transition">
                <FaHeart />
            </button>
        </div>
    </div>
    </Link>
</div>
        

    )
}
export default TrendMovieItem