const Authentication= (props)=>{

    console.log("before sending: ",props.tokenn)
        const url = 'https://api.themoviedb.org/3/authentication/session/new';
        const options = {
            method: 'POST',
            headers: {
                accept: '*/*',
                'content-type': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br',
                Connection: 'keep-alive',
                'User-Agent': 'PostmanRuntime/7.33.0',
                
                
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({ request_token: props.tokenn })
        };
console.log("the options: ",options)
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('SessionID', json.session_id)
                localStorage.removeItem("guestID")
                console.log("Your session ID:", json.session_id)
                if (json.success === true) {
                    alert(json.success)
                    // document.location.href='/'
                }
                if (json.success === false) {

                    alert(json.success)
                }
            })
            .catch(err => console.error('error:' + err));

    return(
        <div>

        </div>
    )
}
export default Authentication