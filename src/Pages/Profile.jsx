import React from "react";

const Profile = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        photo: "https://i.ibb.co/3mC9QvP/user-avatar.png",
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
                <img
                    src={user.photo}
                    alt={user.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 mb-6"
                />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Welcome, {user.name}!
                </h2>
                <p className="text-gray-600 mb-6">Your Profile Information</p>

                <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Name:</span>
                        <span className="text-gray-800">{user.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Email:</span>
                        <span className="text-gray-800">{user.email}</span>
                    </div>
                </div>

                <button
                    className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    onClick={() => alert("Redirect to update profile page")}
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;
