const LogoutHandler =() => {
    console.log("inlogiout")
    const url = 'https://api.themoviedb.org/3/authentication/session';
        const options = {
            method: 'DELETE',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({ session_id: (localStorage.getItem('SessionID')) })
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                localStorage.removeItem('SessionID')
                localStorage.removeItem('userName')
                
                document.location.href='/'
            })
            .catch(err => console.error('error:' + err));

    return(<></>)
}
export default LogoutHandler