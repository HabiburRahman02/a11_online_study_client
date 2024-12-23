import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import Banner from "../pages/Home/Banner";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter =
        location.pathname.includes('/login') ||
        location.pathname.includes('/register')
    const showBanner = location.pathname === '/'
    return (
        <div>
            <div>
                {noHeaderFooter || <Navbar></Navbar>}
                {showBanner && <Banner></Banner>}
            </div>

            <div className="min-h-64">
                <Outlet></Outlet>
            </div>

            <div>
                {noHeaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;