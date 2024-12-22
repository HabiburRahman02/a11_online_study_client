import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logout user successfully')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <nav className=" bg-base-100">
            <div className="navbar max-w-[1400px] mx-auto py-4">
                <div className="flex-1">
                    <Link to='/' className="font-semibold text-2xl">
                        Online<span className="text-green-500">Study</span>
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <ul className="flex gap-4 font-medium ">
                        <li>
                            <NavLink to='/' className={`hover:text-customGreen duration-500`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='assignments' className={`hover:text-customGreen duration-500`}>Assignments</NavLink>
                        </li>
                    </ul>
                    <div>
                        {!user &&
                            <>
                                <Link to='/login'>
                                    <button className="bg-customGreen hover:bg-[#03816e] text-white px-8 py-2 rounded-full">Login</button>
                                </Link>
                            </>
                        }
                    </div>
                    {user &&
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        title={user?.displayName}
                                        alt="Image"
                                        src={`${user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}`} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 z-50 mt-3 w-52 p-2 shadow">
                                <li>
                                    <NavLink to='/createAssignments'>Create Assignments</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/mySubmitted'>My Assignments</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/pendingAssignments'>Pending Assignments</NavLink>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="bg-customGreen hover:bg-[#03816e] text-white my-2 px-8 py-2 rounded-full">Logout</button>
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