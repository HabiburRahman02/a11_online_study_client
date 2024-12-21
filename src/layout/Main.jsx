import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import Banner from "../pages/Home/Banner";

const Main = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>

            <div>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;