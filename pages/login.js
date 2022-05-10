import { LoginPageHeader } from "../components/LoginPage";
import { NextHead } from "../global/NextHead";

const Login = () => {
    return (
        <div>
            <NextHead title="Login - Spotify" />
            <LoginPageHeader />
        </div>
    )
}

export default Login;