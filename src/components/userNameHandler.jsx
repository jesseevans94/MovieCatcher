const userNameHandler=() =>{

    const url = `https://api.themoviedb.org/3/account/20465724?session_id=${localStorage.getItem('SessionID')}`;
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
                localStorage.setItem('userName',json.username)
                console.log("username handler: ",json.username)
            })
            .catch(err => console.error('error: ' + err));
        
return(
<div></div>
)
}
export default userNameHandler
