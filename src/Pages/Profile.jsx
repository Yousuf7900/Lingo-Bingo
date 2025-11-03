import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            {
                user && user?.email ? <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
                    <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 mb-6"
                    />
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Welcome, {user.displayName}!
                    </h2>
                    <p className="text-gray-600 mb-6">Your Profile Information</p>

                    <div className="space-y-3 text-left">
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Name:</span>
                            <span className="text-gray-800">{user.displayName}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Email:</span>
                            <span className="text-gray-800">{user.email}</span>
                        </div>
                    </div>

                    <Link to={'/updateProfile'}>
                        <button
                            className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Update Profile
                        </button>
                    </Link>
                </div> : ""
            }
        </div>
    );
};

export default Profile;
