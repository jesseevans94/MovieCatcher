import { useEffect, useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import Verification from '../pages/Verification';

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const [newToken, setNewtoken] = useState()

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    useEffect(() => {
        generateTokenID();
    }, [newToken]);

    const authenticateUser = () => {
        createSessionHandler()
        // generateSessionID()
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
                setNewtoken(json.request_token)
                openAuthPage(json.request_token)
                console.log("new token:", newToken)
            })
            .catch(err => console.error('error:' + err));
    }

    const openAuthPage = (newTokenId) => {
        if (newToken) {
            console.log("TokenID :", newTokenId)
            window.open(`https://www.themoviedb.org/authenticate/${newTokenId}`)
        }
    }
    const createSessionHandler = () => {
        console.log("creating session")
        const url = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({
                username: loginState.username,
                password: loginState.password,
                request_token: newToken,
            }),
        };

        console.log("options with credintials:", options)
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                generateSessionID(json.request_token)
                console.log("authenticate token with credentials", json)
                
                
            })
            .catch(err => console.error('error:' + err));

    }
    const generateSessionID = (request_token1) => {
        console.log("request token:", request_token1)
        const url = 'https://api.themoviedb.org/3/authentication/session/new';
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({
                request_token: request_token1
            })
        };
        console.log("Generate session ID options:", options)
        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log("Session ID ", json)
                localStorage.setItem('SessionID', json.session_id)
                console.log("Your session ID:", json.session_id)
                if(json.success===true){
                    alert(json.success)
                    Verification().userNameHandler()
                }
                
            })
            .catch(err => console.error('error:' + err));
    }
    return (
        <div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
            <FormAction handleSubmit={handleSubmit} text="Login" />
        </form>
                
                
            
        </div>
    )
}