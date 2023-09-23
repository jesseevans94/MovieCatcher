import { Link } from "react-router-dom"

const LoginPage = () =>  {
    return(<>
        <h1>Login Page</h1>
        <Link to='/'>
            <button>Go back </button>
        </Link>
    </>)
}
export default LoginPage