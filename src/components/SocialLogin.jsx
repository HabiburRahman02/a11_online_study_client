
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('Login user successfully')
                navigate(location.state || '/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <button
            onClick={handleGoogleLogin}
            className="btn btn-outline hover:text-black w-full hover:bg-gray-100">
            Continue with Google
        </button>
    );
};

export default SocialLogin;