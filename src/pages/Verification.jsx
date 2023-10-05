import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Verification = () => {

    const [sessionId, setSessionID] = useState('')
    const [username, setUsername] = useState('')
    let newToken=''
    useEffect(() => {
        setSessionID(localStorage.getItem('SessionID'))
    console.log("Session ID",sessionId)
        userNameHandler();
        // openAuthPage()
    }, [sessionId])


    const userNameHandler = () => {
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
                setUsername(json.username)
                localStorage.setItem('username',json.username)
                console.log("username handler: ",json.username)
            })
            .catch(err => console.error('error: ' + err));
    }


    const deleteSessionID = () => {
        const url = 'https://api.themoviedb.org/3/authentication/session';
        const options = {
            method: 'DELETE',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({ session_id: sessionId })
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
    }

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

    const login = () => {
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
        };
        console.log("the options: ", options)
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log("Your session ID:", json)
                localStorage.setItem('SessionID', json.session_id)
                if (json.success === true) {
                    
                    document.location.href='/'
                }
                if (json.success === false) {
                    alert(json.success)
                }
            })
            .catch(err => console.error('error:' + err));
    }


    return (<div>
        {sessionId ? (
            <div>
                <p> you logging in as {username}
                {username==="mohanad.bme.ust@gmail.com" ? (
                    <button><Link to='/login'>click to login</Link></button>
                ):(
                    <div><Link to='/'>Click here to go back</Link></div>
                )}</p>
                <button onClick={deleteSessionID}>Click here to logout</button>
            </div>
        ) : (
            <div>
            <p><button onClick={generateTokenID}>Click here to Authenticate</button></p>
            <div><button onClick={login}>Let me in</button></div>
            {/* <button onClick={generateGuestID}><Link to='/'>Login as guest</Link></button> */}
            </div>
        )}
    </div>)
}
export default Verification