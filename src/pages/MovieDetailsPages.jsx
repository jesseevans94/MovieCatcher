const MovieDetailsPages = () =>{
    return(
        <div >
            <div className='container mx-auto flex mt-20 border-b border-gray-500 pb-2'>
            <img src="https://assets.mubicdn.net/images/notebook/post_images/31814/images-w1400.jpg?1606176049" className='w-64' />
            <div className='ml-24 '>
                <h1 className='text-4xl font-sembold'>Jaws</h1>
                <span className='text-gray-500 text-sm'> 69% | 1975-20-06 Adventure Mystery Thriller</span>
                <p className='mt-5'>When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.</p>
                <div className='mt-5'>
                    <span className='mt-5 font-semibold'>Featured Cast</span>
                    <div className='flex'>
                        <div className='flex flex-col mt-5 mr-5'>
                            <span>Steven Spielberg</span>
                            <span className='text-gray-500'>Director</span>
                        </div>
                        <div className='flex flex-col mt-5'>
                            <span>Carl Gottlieb</span>
                            <span className='text-gray-500'>Writer</span>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <a href="#" className='rounded bg-yellow-500 px-5 py-4 text-black font-semibold '>Play Trailer</a>
                    <a href="#" className='rounded bg-yellow-500 px-5 py-4 text-black font-semibold ml-5'><span className=''>Favorites</span></a>
                </div>
            </div>
            </div>
        </div>
    )
}
export default MovieDetailsPages