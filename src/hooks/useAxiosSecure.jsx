import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: 'https://a11-group-study-server-rho.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        instance.interceptors.response.use(response => {
            return response
        }, error => {
            console.log('in interceptor', error);
            if (error.status === 401 || error.status === 403) {
                logOut()
                    .then(() => {
                        console.log('Logout user successfully')
                        navigate('/login')
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
            return Promise.reject(error)
        })

    }, [logOut, navigate])

    return instance
};

export default useAxiosSecure;