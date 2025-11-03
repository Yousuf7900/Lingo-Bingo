import { useContext } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { id } = useParams();
    const { user, logOut } = useContext(AuthContext);
    const Public_links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/start-learning'}>Start Learning</Link></li>
        <li><Link to={'/about-us'}>About Us</Link></li>
    </>
    const Private_links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/start-learning'}>Start Learning</Link></li>
        <li><Link to={"/tutorials"}>Tutorial</Link></li>
        <li><Link to={'/about-us'}>About Us</Link></li>
    </>

    const handleLogOut = () => {
        logOut();
        localStorage.removeItem("welcomeMessage");
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                user && user?.email ? Private_links : Public_links
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">Lingo-Bingo</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user && user?.email ? Private_links : Public_links
                        }
                    </ul>
                </div>

                <div className="navbar-end">
                    {user && user?.email ? (
                        <div className="flex items-center gap-3">
                            <Link to={'/profile'}>
                                <div className="flex items-center gap-2">
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt="User Avatar"
                                            className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
                                        />
                                    ) : (
                                        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
                                            {user.email[0].toUpperCase()}
                                        </div>
                                    )}
                                </div>
                            </Link>
                            <button onClick={handleLogOut} className="btn btn-sm bg-red-500 text-white hover:bg-red-600">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">
                                Login
                            </button>
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;