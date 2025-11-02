import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="min-h-screen flex items-start justify-center bg-gradient-to-r from-blue-50 to-white px-4 pt-20">
            <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    Login
                </h2>
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-2 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 text-gray-700">
                            <input type="checkbox" className="accent-blue-600" />
                            Remember Me
                        </label>
                        <a href="#" className="text-blue-600 hover:underline font-medium">
                            Forget Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                        Login
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-4 text-gray-400">or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                <div className="flex gap-4 justify-center">
                    <button className="flex items-center gap-2 px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
                        <FaGoogle className="text-red-500" /> Google
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
                        <FaFacebookF className="text-blue-600" /> Facebook
                    </button>
                </div>

                <p className="mt-6 text-center text-gray-500 text-sm">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
