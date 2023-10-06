import { useEffect } from "react"
import { AiOutlineMenu } from "react-icons/ai"

const MoviesAndTvItem = () =>{

    useEffect(() => {
        checkList()
    },[])
    const checkList =() =>{
        
    }
    const deleteList = () => {
        
        checkList()
    }
    return(
<div>

        <p>List1 <button onClick={deleteList} className="mt-2 sm:mt-0 text-sm rounded-full bg-red-500 hover:bg-red-700 text-white font-semibold px-5 py-2 transition duration-300 ease-in-out" ></button></p>
        <p>List2 <button onClick={deleteList} className="mt-2 sm:mt-0 text-sm rounded-full bg-red-500 hover:bg-red-700 text-white font-semibold px-5 py-2 transition duration-300 ease-in-out" ></button></p>
</div>
    )
}
export default MoviesAndTvItem