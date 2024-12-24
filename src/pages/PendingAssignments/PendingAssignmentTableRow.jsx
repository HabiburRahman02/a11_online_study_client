import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const PendingAssignmentTableRow = ({ assignment, i }) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const sameEmail = assignment.email !== user?.email

    const handleNavigate = () => {
        if (sameEmail) {
            navigate(`/giveMark/${assignment._id}`)
        }
        else {
            toast.error('You can not mark your own assignment')
            return
        }
    }

    return (
        <tr
            className="hover:bg-gray-100  transition duration-500 hover:text-black py-4">
            <th className="py-8 md:py-12">{i + 1}</th>
            <td className="py-8 md:py-12">
                {assignment.title}
            </td>
            <td className="py-8 md:py-12">
                {assignment.marks}
            </td>
            <td className="py-8 md:py-12">
                {assignment.examiner_name || assignment.email}
            </td>
            <td className="py-8 md:py-12">
                {/* <Link to={`/giveMark/${assignment._id}`}> */}
                <button
                    onClick={handleNavigate}
                    className=" bg-customGreen py-2 px-6  text-white font-medium 
            border-[2px]
            border-transparent hover:border-[2px] hover:border-black   hover:text-black hover:bg-transparent duration-500 transition-all rounded-full">
                    Give Mark
                </button>
                {/* </Link> */}
            </td>
        </tr>
    );
};

export default PendingAssignmentTableRow;