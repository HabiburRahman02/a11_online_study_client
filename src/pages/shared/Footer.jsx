import { FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../../assets/footer/logo.jpg'

const Footer = () => {
    return (

        <div style={{ backgroundImage: `url(${logo})` }} className="bg-[#1d181f] mt-20">
            <footer className="footer md:flex justify-between py-20 max-w-[1400px] mx-auto font-bold  text-[#979797] p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="hover:text-white transition-all">Branding</a>
                    <a className="hover:text-white transition-all">Design</a>
                    <a className="hover:text-white transition-all">Marketing</a>
                    <a className="hover:text-white transition-all">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="hover:text-white transition-all">About us</a>
                    <a className="hover:text-white transition-all">Contact</a>
                    <a className="hover:text-white transition-all">Jobs</a>
                    <a className="hover:text-white transition-all">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="hover:text-white transition-all">Terms of use</a>
                    <a className="hover:text-white transition-all">Privacy policy</a>
                    <a className="hover:text-white transition-all">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="flex gap-4">
                        <FaTwitter className="text-2xl text-white"></FaTwitter>
                        <FaLinkedin className="text-2xl text-white"></FaLinkedin>
                    </div>
                </nav>
            </footer>
        </div>

    );
};

export default Footer;