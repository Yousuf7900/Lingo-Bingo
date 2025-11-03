import { useContext } from "react";
import { FaUser, FaImage } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const { user, updateProfileInfo } = useContext(AuthContext);

    const handleUpdateInfo = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoURL.value;

        updateProfileInfo({ displayName: name, photoURL: photo })
            .then(() => {
                console.log("Profile updated!")
                navigate('/profile')
            })
            .catch((error) => console.log(error));
    };

    const displayName = user?.displayName || "";
    const photoURL = user?.photoURL || "";

    return (
        <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
                Update Profile
            </h2>
            <form onSubmit={handleUpdateInfo} className="space-y-5">
                {user?.email && (
                    <span className="text-gray-700 block mb-1">
                        Current Name: <span className="font-medium">{displayName}</span>
                    </span>
                )}
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <FaUser className="text-gray-400 mr-2 text-lg" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your new name"
                        defaultValue={displayName}
                        className="w-full p-2 outline-none"
                    />
                </div>

                {user?.email && photoURL && (
                    <span className="text-gray-700 block mb-1">
                        Current URL:{" "}
                        <a
                            className="text-blue-700 underline"
                            href={photoURL}
                            target="_blank"
                        >
                            Image
                        </a>
                    </span>
                )}
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                    <FaImage className="text-gray-400 mr-2 text-lg" />
                    <input
                        type="text"
                        name="photoURL"
                        placeholder="Enter photo URL"
                        defaultValue={photoURL}
                        className="w-full p-2 outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
