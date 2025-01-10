import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";


const AssignmentCard = ({ assignment, handleDelete }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { _id, title, marks, difficulty, date, thumbnail, email } = assignment || {}

    const sameEmail = (email === user?.email)

    const handleNavigateToUpdatePage = () => {
        if (sameEmail) {
            navigate(`/updateAssignment/${_id}`)
        }
        else {
            toast.error('You can not update other user created assignment')
            return
        }

    }
    return (

        <div key={assignment._id} className="w-full space-y-2 bg-white dark:border shadow-lg rounded-lg hover:bg-gray-50 p-4 hover:shadow-xl  duration-500 ease-in-out dark:bg-gray-700 dark:shadow-2xl">

            <div className="relative flex items-center justify-center mb-4">
                <div className="absolute top-2 right-2 bg-pink-500 text-white px-4 py-1 rounded-md">{difficulty}</div>
                <img
                    className="w-full h-40 rounded-lg object-cover"
                    src={thumbnail}
                    alt="Thumbnail"
                />
            </div>
            <Fade duration={1000} direction="up">
                <h4 className="text-xl font-semibold text-indigo-800 dark:text-white">{title}</h4>
            </Fade>
            <Fade duration={1000} direction="up">
                <p className="text-sm text-gray-700 mt-2 dark:text-white">Total Marks: <span className="font-semibold text-indigo-600 dark:text-white">{marks}</span></p>
            </Fade>
            {/* <Fade duration={1000} direction="up">
                <div className="text-sm text-gray-700 dark:text-white">Difficulty:  <div className="badge badge-secondary">{difficulty}</div></div>
            </Fade> */}
            <Fade duration={1000} direction="up">
                <p className="text-sm text-gray-700 dark:text-white">Date: <span className="font-semibold text-gray-900 dark:text-white">{date}</span></p>
            </Fade>

            {/* Actions */}
            <Fade duration={1000} direction="up">
                <div className=" flex gap-4 justify-center">
                    {/* <Link to={`/updateAssignment/${_id}`}> */}
                    <button
                        onClick={handleNavigateToUpdatePage}
                        className="text-xl text-blue-500 hover:text-blue-700 p-2 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out"
                    >
                        <FaEdit />
                    </button>
                    {/* </Link> */}
                    <button
                        onClick={() => handleDelete(_id)}
                        className="text-xl text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition duration-300 ease-in-out"
                    >
                        <RiDeleteBack2Fill />
                    </button>
                    <Link to={`/assignmentDetails/${_id}`}>
                        <button
                            className="text-xl text-green-500 hover:text-green-700 p-2 rounded-full hover:bg-green-100 transition duration-300 ease-in-out"
                        >
                            <FaEye />
                        </button>
                    </Link>
                </div>
            </Fade>
        </div>
    );
};

export default AssignmentCard;