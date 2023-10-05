import { useEffect, useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import Verification from '../pages/Verification';
import Authentication from './Authentication';

// const fields = loginFields;
// let fieldsState = {};
// fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    // const [loginState, setLoginState] = useState(fieldsState);
    const [newToken, setNewtoken] = useState()
    const [isClick, setisClick] = useState(false)

    // const handleChange = (e) => {
    //     setLoginState({ ...loginState, [e.target.id]: e.target.value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // createSessionHandler();

    // }
    
    useEffect(() => {
        generateTokenID();
    }, [newToken]);
    

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
                
                setNewtoken(json.request_token)
                openAuthPage()
                console.log("new token:", newToken)
            })
            .catch(err => console.error('error:' + err));
    }

    const openAuthPage = () => {
        if (newToken) {
            console.log("TokenID :", newToken)
            window.open(`https://www.themoviedb.org/authenticate/${newToken}`)
        }
    }

    // const createSessionHandler = () => {
    //     console.log("creating session")
    //     const url = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             accept: 'application/json',
    //             'content-type': 'application/json',
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
    //         },
    //         body: JSON.stringify({
    //             username: loginState.username,
    //             password: loginState.password,
    //             request_token: newToken,
    //         }),
    //     };

    //     console.log("options with credentials:", options)
    //     fetch(url, options)
    //         .then(res => res.json())
    //         .then(json => {
    //             generateSessionID(json.request_token)
    //             console.log("authenticate token with credentials", json)


    //         })
    //         .catch(err => console.error('error:' + err));

    // }
    // const generateSessionID = (request_token1) => {
    //     const baseUrl = 'https://api.themoviedb.org/3/authentication/session/new'
    //     const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
    //     const requestToken = request_token1;

    //     console.log("request token:", requestToken)
    //     const url = `${baseUrl}?api_key=${apiKey}&request_token=${requestToken}`
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             accept: 'application/json',
    //             'content-type': 'application/json',
    //             Authorization: `Bearer ${apiKey}`
    //         },
    //         body: JSON.stringify({
    //             request_token: request_token1
    //         })
    //     };
    //     console.log("Generate session ID options:", options)
    //     fetch(url, options)
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log("Session ID ", json)
    //             localStorage.setItem('SessionID', json.session_id)
    //             localStorage.removeItem("guestID")
    //             console.log("Your session ID:", json.session_id)
    //             if (json.success === true) {
    //                 alert(json.success)
    //                 // Verification().userNameHandler()
    //             }
    //             if (json.success === false) {

    //                 alert(json.success)
    //             }

    //         })
    //         .catch(err => console.error('error:' + err));
    // }

    const loginTest = () => {
        setisClick(!isClick)
        localStorage.removeItem("SessionID")
        console.log("before sending: ",newToken)
        const url = 'https://api.themoviedb.org/3/authentication/session/new';
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Host : 'api.themoviedb.org',
                'Content-Length' : '72',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({ request_token: newToken })
            // body: { 'request_token': newToken }
        };
console.log("the options: ",options)
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


//     const loginTest = () => {
//         setisClick(!isClick)
//         localStorage.removeItem("SessionID")
//         console.log("before sending: ",newToken)
//         const url = `https://api.themoviedb.org/3/authentication/session/new?api_key=5c78382923c7f16a74b79bcf42dbcb8c&request_token=${newToken}`
//         const options = {
//             method: 'GET',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             dataType: 'json'
//             // body: { 'request_token': newToken }
//         };
// console.log("the options: ",options)
//         fetch(url, options)
//             .then(res => res.json())
//             .then(json => {
                
//                 console.log("Your session ID:", json)
//                 localStorage.setItem('SessionID', json.session_id)
//                 localStorage.removeItem("guestID")
//                 if (json.success === true) {
//                     alert(json.success)
//                     // document.location.href='/'
//                 }
//                 if (json.success === false) {

//                     alert(json.success)
//                 }
//             })
//             .catch(err => console.error('error:' + err));
//     }
    return (
        <div>
            {/* <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="-space-y-px">
                    {
                        fields.map(field =>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />
                        )
                    }
                </div>
                <FormExtra />
                <FormAction handleSubmit={handleSubmit} text="Login" /> */}
                <button onClick={loginTest}>Test Login</button>
                {/* {isClick ? (
                    newToken && <Authentication tokenn={newToken}/>
                ):(
                    console.log("not clicked")
                )} */}
                
            {/* </form> */}



        </div>
    )
}