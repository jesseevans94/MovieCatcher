import { useState } from "react"

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
            <div className={`relative ${
                isHovered ? 'overflow-visible' : 'overflow-hidden'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/w400${props.image}`} alt="" />
            {isHovered && (
                <div className="absolute inset-0 overflow-hidden">
                    <div className="bg-transparent bg-opacity-80 absolute bottom-0 left-0 right-0 transform transition-transform duration-500">
                    <p className="text-gray-white text-center px-4 py-2 font-bold text-sm">{props.overview}</p>
                    </div>
                </div>
            )}
            </div>
            <div className="mt-2">
                <h2 className="text-lg font-semibold">
                    {props.title}
                </h2>
                <p className="text-gray-500">{props.releaseDate}</p>
            </div>
        </div>
        

    )
}
export default TrendMovieItem