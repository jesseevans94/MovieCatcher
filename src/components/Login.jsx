import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Login() {
    const [loginState, setLoginState] = useState(fieldsState);
    const [sessionID, setSessionID] = useState('')

    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () => {



        const url = 'https://api.themoviedb.org/3/authentication/session/new';
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
            },
            body: JSON.stringify({ request_token: '8de14e82624cb3fec61c398642848cf90d946912' })
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));

            
    }

    //     const generatesessionID = () => {
    //         const url = 'https://api.themoviedb.org/3/authentication/token/new';
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 accept: 'application/json',
    //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
    //             }
    //         };

    //         fetch(url, options)
    //             .then(res => res.json())
    //             .then(json => {
    //                 setSessionID(json.request_token)
    //                 console.log("SessionID:", json.request_token)
    //                 window.open(`https://www.themoviedb.org/authenticate/${sessionID}?redirect_to=http://localhost:5173/login`, '_blank')
    //             })
    //             .catch(err => console.error('error:' + err));
    //     }

    //     const createSessionHandler = () => {
    //         const url = 'https://api.themoviedb.org/3/authentication/token/validate_with_login';
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     accept: 'application/json',
    //     'content-type': 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
    //   },
    //   body: JSON.stringify({
    //     loginFields,
    //     request_token: '546bd3ef13761a2af0897656ba7ba53840d7b492'
    //   })
    // };


    // fetch(url, options)
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log("Create sessionhandler:",json)
    //     console.log("field:",loginFields)
    // })
    //   .catch(err => console.error('error:' + err));
    //     }


    return (
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
            {/* <button onClick={createSessionHandler}>Create Session</button> */}


            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />
            {/* <button onClick={generatesessionID}>sessionID {sessionID}</button> */}

        </form>
    )
}