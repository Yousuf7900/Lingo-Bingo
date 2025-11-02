import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../Pages/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    console.log(user, loading);
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;