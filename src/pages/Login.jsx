import { Link } from "react-router-dom"
import Header from "../components/Header"
import Login from "../components/Login"

const LoginPage = () =>  {
    
    return(<>
        <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
                <Login/>
                
        <Link to='/'>
            <button>Go back </button>
        </Link>
        
    </>)
}
export default LoginPage