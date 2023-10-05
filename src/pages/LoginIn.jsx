

const LoginIn = () => {
    let newToken=''

    const generateTokenID = () => {
        const url = 'https://api.themoviedb.org/3/authentication/token/new';
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
                console.log("new token:", json)
                newToken = json.request_token
                window.open(`https://www.themoviedb.org/authenticate/${newToken}`)
            })
            .catch(err => console.error('error:' + err));
    }

    const loginTest = () => {
        localStorage.removeItem("SessionID")
        console.log("before sending: ", newToken)
        const url = 'https://api.themoviedb.org/3/authentication/session/new';
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Host: 'api.themoviedb.org',
                'Content-Length': '72',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({ request_token: newToken })
            // body: { 'request_token': newToken }
        };
        console.log("the options: ", options)
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log("Your session ID:", json)
                localStorage.setItem('SessionID', json.session_id)
                localStorage.removeItem("guestID")
                if (json.success === true) {
                    alert(json.success)
                    // document.location.href='/'
                }
                if (json.success === false) {
                    alert(json.success)
                }
            })
            .catch(err => console.error('error:' + err));
    }


    return (
        <div>
        
            <button onClick={generateTokenID}>Generate Token</button>
            <div>
                <button onClick={loginTest}>Create Session</button>
            </div>
        </div>
    )
}
export default LoginIn