import React, { useState } from 'react';

const GenreList = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const genres = [
        'Action',
        'Adventure',
        'Animated',
        'Comedy',
        'Drama',
        'Fantasy',
        'Horror',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Thriller',
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative">
            <button
                className="bg-gray-700 font-bold text-white py-2 px-4 rounded hover:bg-blue-900/60 sm:hidden"
                onClick={toggleDropdown}
            >
                Genres
            </button>
            <div className="hidden sm:block">
                <div className="flex flex-wrap">
                    {genres.map((genre, index) => (
                        <div key={index} className='text-gray-300 hover:bg-gray-700 hover:text-white transition duration-1000 px-3 py-3 rounded-full text-lg font-medium cursor-pointer'>
                            {genre}
                        </div>
                    ))}
                </div>
            </div>
            {isDropdownOpen && (
                <div className="absolute z-10 mt-2 p-2 bg-blue-900/30 rounded shadow-lg">
                    {genres.map((genre, index) => (
                        <div
                            key={index}
                            className="py-1 px-2 cursor-pointer hover:bg-gray-500/60"
                        >
                            {genre}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GenreList;












