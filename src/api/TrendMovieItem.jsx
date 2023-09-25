import { useState } from "react"
import { FaHeart } from 'react-icons/fa'



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

    const gradientOverlayStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))`,
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: '50%',
        pointerEvents: 'none',
    };

    return (

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:max-w-7xl p-4 border-b border-gray-600">
            <div className="relative overflow-hidden rounded-lg hover:shadow-lg hover:scale-105 transform transition-transform duration-300" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="h-auto rounded-lg overflow-hidden relative">
                    <img className={`w-full transition-all duration-300 ${isHovered ? 'transform scale-105 blur-sm' : 'blur-none'}`} src={`https://image.tmdb.org/t/p/w400${props.image}`} alt="" />
                    {isHovered && <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>}
                </div>
                {isHovered && (
                    <div className="absolute inset-0 flex flex-col p-4">
                        <div className="text-white">
                            <p className="font-bold text-xl text-center mb-2">
                                {props.title}
                            </p>
                            <p className="text-center text-gray-300 mb-2">
                                Release Date: {props.releaseDate}
                            </p>
                        </div>
                        <div className="text-gray-300 mt-auto">
                            <p>{truncateText(props.overview, 100)}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="p-4">
                <h1 className="text-lg text-gray-100 font-semibold">{props.title}</h1>
                <div className="flex justify-between mt-2">
                    <p className="text-sm text-gray-400">{props.releaseDate}</p>
                    <button className="text-gray-400 hover:text-gray-100 transition">
                        <FaHeart />
                    </button>
                </div>
            </div>
        </div>

    )
}
export default TrendMovieItem