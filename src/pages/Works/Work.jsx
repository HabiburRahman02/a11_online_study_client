import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Work = ({ img, title, subTitle, bgClass }) => {
    return (
        <div className={`hero  mt-10 ${bgClass}`}>
            <div className="md:hero-content px-2  flex-col lg:flex-row">
                <div className="md:w-1/2">
                    <img className=" h-96 object-cover w-full" src={img} alt="" />
                </div>
                <div className="md:w-1/2">
                    <Fade duration={2000} direction="down">
                        <h1 className="text-5xl font-bold">{title}</h1>
                    </Fade>
                    <p className="py-6 text-base">
                        {subTitle}
                    </p>
                    <Fade duration={2000} direction="up">
                        <Link to='/facility'>
                            <button className=" duration-500 bg-customGreen py-3 px-12  text-white font-bold  border-[2px] border-transparent hover:border-[2px] hover:border-black hover:bg-transparent hover:text-black transition-all rounded-full dark:text-white dark:hover:border-white">
                                <span>More Info</span>
                            </button>
                        </Link>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Work;