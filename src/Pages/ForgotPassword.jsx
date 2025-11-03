import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const { emailForReset, resetPasswordWithEmail } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (emailForReset) setEmail(emailForReset);
    }, [emailForReset]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return toast.error("Please enter your email");

        resetPasswordWithEmail(email)
            .then(() => {
                toast.success("Password reset link sent to your email!", {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: true,
                    theme: "colored",
                });
                navigate('/login');
            })
            .catch((err) => {
                toast.error(err.message || "Something went wrong.", {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: true,
                    theme: "colored",
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Forgot Password
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                        Send Reset Link
                    </button>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Remembered your password?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
