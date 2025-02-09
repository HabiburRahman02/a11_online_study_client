import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // const updateUserProfile = (name, photoUrl) => {
    //     setLoading(true);
    //     return updateProfile(auth.currentUser, {
    //         displayName: name,
    //         photoURL: photoUrl
    //     })
    // }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('currentUser', currentUser);
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post(`https://a11-group-study-server-rho.vercel.app/jwt`, user, { withCredentials: true })
                    .then(data => {
                        console.log(data.data);
                        setLoading(false);
                    })
            }
            else {
                axios.post('https://a11-group-study-server-rho.vercel.app/logout', {}, { withCredentials: true })
                    .then(data => {
                        console.log(data.data);
                        setLoading(false);
                    })
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const info = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;