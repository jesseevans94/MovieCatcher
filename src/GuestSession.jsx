// //no need for this file
// import { useState, useEffect  } from "react";

// const GuestSession = (props) => {

//     // const [guestId, setGuestId] = useState('')
//     const url = 'https://api.themoviedb.org/3/authentication/guest_session/new';
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
//         }
//     }
//     // useEffect(() => {
//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => {
//             console.log(json.guest_session_id)
//             // setGuestId(json.guest_session_id)
//         })

//         .catch(err => console.error('error:' + err));
//     // }, [])
    
//     // console.log("from render:",guestId)
//     return (
//         <div>
//         <p>GuestSession{}
//         {/* Guest Session ID: {guestId} */}
//         </p>
//             {/* {console.log("from return: ", {guestId})} */}

//         </div>
//     )

// }
// export default GuestSession