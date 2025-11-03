import { useEffect, useState, createContext } from "react";
import { auth } from "../Firebase/Firebase.config";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import Loading from "../Pages/Loading";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [emailForReset, setEmailForReset] = useState("");

    // create new user
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in with email/password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign in with Google
    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    };

    // sign out
    const logOut = () => {
        return signOut(auth);
    };

    // reset password
    const resetPasswordWithEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    // update profile info
    const updateProfileInfo = (profile) => {
        return updateProfile(auth.currentUser, {
            displayName: profile.displayName,
            photoURL: profile.photoURL
        });
    };

    const AuthInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createNewUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateProfileInfo,
        setEmailForReset,
        emailForReset,
        resetPasswordWithEmail
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={AuthInfo}>
            {loading ? <Loading /> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
