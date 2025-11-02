
import { useContext } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
    const { createNewUser, signInWithGoogle } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        // const photo_url = e.target.photo_url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const checked = e.target.terms.checked;

        createNewUser(email, password)
            .then(response => {
                console.log(response.user);
            })
    }

    const provider = new GoogleAuthProvider();
    const handleGoogleSignUp = () => {
        signInWithGoogle(provider)
            .then(response => {
                console.log(response.user);
            })
    }
    return (
        <div className="min-h-screen flex items-start justify-center bg-gradient-to-r from-blue-50 to-white px-4 pt-20">
            <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    Register
                </h2>
                <form onSubmit={handleSignUp} className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-2 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-2 font-medium">Photo URL</label>
                        <input
                            type="text"
                            name="photo_url"
                            placeholder="Enter photo URL"
                            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-2 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
                        />
                    </div>

                    <label className="flex items-center gap-2 text-gray-700 text-sm">
                        <input name="terms" type="checkbox" className="accent-blue-600" />
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Terms & Conditions
                        </a>
                    </label>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                        Signup
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-4 text-gray-400">or</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                <div className="flex gap-4 justify-center">
                    <button onClick={handleGoogleSignUp} className="flex items-center gap-2 px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
                        <FaGoogle className="text-red-500" /> Google
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
                        <FaFacebookF className="text-blue-600" /> Facebook
                    </button>
                </div>

                <p className="mt-6 text-center text-gray-500 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
