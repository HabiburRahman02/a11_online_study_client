import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
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