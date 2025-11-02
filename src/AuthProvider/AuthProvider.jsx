import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // creating new user
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in with email and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }
    // sign out a user
    const logOut = () => {
        return signOut(auth);
    }

    const AuthInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createNewUser,
        signIn,
        signInWithGoogle,
        logOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    return <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;