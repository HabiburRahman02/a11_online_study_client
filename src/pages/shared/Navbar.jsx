import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <nav className=" bg-base-100">
            <div className="navbar max-w-[1400px] mx-auto py-4">
                <div className="flex-1">
                    <Link to='/' className="font-semibold text-2xl">
                        Group<span className="text-green-500">Study</span>
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <div>
                        <>
                            <Link to='/login'>
                                <button className="bg-customGreen hover:bg-[#03816e] text-white px-8 py-2 rounded-full">Login</button>
                            </Link>
                        </>
                    </div>
                    {user &&
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 z-50 mt-3 w-52 p-2 shadow">
                                <li>
                                    <NavLink to='pendingAssignment'>Pending Assignments</NavLink>
                                </li>
                                <li>
                                    <NavLink to='pendingAssignment'>Pending Assignments</NavLink>
                                </li>
                                <li>
                                    <NavLink to='createAssignment'>Create Assignments</NavLink>
                                </li>
                                <li>
                                    <NavLink to='myAssignment'>My Assignments</NavLink>
                                </li>
                                <li>
                                    <Link>
                                        <button
                                            onClick={handleLogout}
                                            className="bg-customGreen hover:bg-[#03816e] text-white px-8 py-2 rounded-full">Logout</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;