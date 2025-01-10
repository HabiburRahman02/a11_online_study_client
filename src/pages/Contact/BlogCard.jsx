import { Fade } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
    const { title, description, image, author, date } = blog
    return (
        <div className=" bg-white rounded-lg dark:bg-gray-700 dark:text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <img
                className="w-full h-48 rounded-lg rounded-b-none object-cover"
                src={image}
                alt={title}
            />
            {/* Content */}
            <div className="p-4 py-8">
                {/* Title */}
                <Fade direction='down' duration={2000}>
                    <h2 className="text-xl dark:text-white font-bold text-gray-800 mb-2">{title}</h2>
                    {/* Description */}
                </Fade>
                <p className="text-gray-600 dark:text-white text-sm mb-4">{description}</p>
                {/* Author and Date */}
                <div className="flex dark:text-white justify-between items-center text-sm text-gray-500">
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
                <Link to='/assignments'>
                    <Fade direction='up' duration={2000}>
                        <button className="flex items-center justify-between duration-500 w-full bg-customGreen py-2 px-12  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-black hover:bg-transparent hover:text-black transition-all rounded-full dark:text-white dark:hover:border-white">
                            <span> See More</span>
                            <FaArrowRightLong></FaArrowRightLong>
                        </button>
                    </Fade>
                </Link>

            </div>
        </div>
    );
};

export default BlogCard;