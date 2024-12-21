import { Link } from "react-router-dom";

const Navbar = () => {
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
                        <Link>
                            <button className="bg-[#1ba590] hover:bg-[#03816e] text-white px-8 py-2 rounded-full">login</button>
                        </Link>
                    </div>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;