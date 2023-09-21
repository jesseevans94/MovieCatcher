import { useState } from "react"

const TrendMovieItem = (props) => {
    const [visibleDetails, setVisibleDetails] = useState(false)

    const fetchDetails = () => {
        setVisibleDetails(!visibleDetails)
    }
    const handleMouseEnter = () => {
        setVisibleDetails(true);
    }
    const handleMouseLeave = () => {
        setVisibleDetails(false);
    };
    return (

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            className='relative group bg-gray-200 mx-auto rounded-lg overflow-hidden shadow-lg p-4'>
            <h1 className='w-full h-auto font-bold text-center'>{props.title} </h1>
            {/* {props.overview} */}
            <img className='mx-auto' src={`https://image.tmdb.org/t/p/w400${props.image}`}
                alt={`${props.title} Poster`} />
            <p className='font-bold text-center '>{props.releaseDate}</p>
            
            <div
                className={`${visibleDetails ? "block" : "hidden"
                    } absolute inset-0 bg-black opacity-30 transition-opacity duration-300`}
            ></div>

            {visibleDetails && (
                <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
                <div className='flex items-center'><a className='mr-2'>Media Type: </a><p>{props.mediaType}</p></div>
                <div className='flex items-center'><a className='mr-2'>Release Year: </a><p>{props.releaseDate}</p></div>
                <div className='flex items-center'><a className='mr-2'>Langauge: </a><p>{props.lang}</p></div>
                <div className='flex items-center'><a>{props.overview}</a></div>
                </div>
                )}
        </div>

    )
}
export default TrendMovieItem