import { FaEdit, FaEye } from 'react-icons/fa';
import { RiDeleteBack2Fill } from "react-icons/ri";
const AssignmentTableRow = ({ assignment, handleDelete, i }) => {
    console.log(assignment);
    const { _id, thumbnail, title, marks, difficulty, date } = assignment || {};
    return (
        <tr
            key={i}
            className="hover:bg-gray-100  transition duration-300 py-4">
            <th className="py-8">{i + 1}</th>
            <td className="py-8">
                <div>
                    <img
                        className="h-16 w-16 md:h-20 md:w-20 rounded-full"
                        src={thumbnail}
                        alt="thumbnail" />
                </div>
            </td>
            <td className="py-8">
                {title}
            </td>
            <td className="py-8">
                {marks}
            </td>
            <td className="py-8">
                {difficulty}
            </td>
            <td className="py-8">
                {date}
            </td>
            <th className="py-8">
                <div className=" flex gap-4 items-center">
                    <button className="text-xl text-blue-500 hover:text-blue-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-blue-100 ">
                        <FaEdit />
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={() => handleDelete(_id)}
                        className="text-xl text-red-700 hover:text-red-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-red-100">
                        <RiDeleteBack2Fill />
                    </button>

                    {/* View Button */}
                    <button className="text-xl text-green-700 hover:text-green-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-green-100">
                        <FaEye />
                    </button>
                </div>
            </th>
        </tr>
    );
};

export default AssignmentTableRow;