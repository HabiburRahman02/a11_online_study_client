import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaEye } from 'react-icons/fa';
import { RiDeleteBack2Fill } from "react-icons/ri";

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/assignments')
            .then(data => {
                console.log(data.data);
                setAssignments(data.data)
            })
    }, []);

    return (
        <div className="overflow-x-auto max-w-[1400px] mx-auto">
            <table className="table">
                {/* head */}
                <thead className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-black">
                    <tr>
                        <th>No</th>
                        <th>Thumbnail</th>
                        <th>Title</th>
                        <th>Marks</th>
                        <th>Difficulty</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        assignments.map(assignment => <tr
                            key={assignment._id}
                            className="hover:bg-gray-100  transition duration-300 py-4">
                            <th className="py-8">1</th>
                            <td className="py-8">
                                <div>
                                    <img
                                        className="h-16 w-16 md:h-20 md:w-20 rounded-full"
                                        src={assignment.thumbnail}
                                        alt="thumbnail" />
                                </div>
                            </td>
                            <td className="py-8">
                                {assignment.title}
                            </td>
                            <td className="py-8">
                                {assignment.marks}
                            </td>
                            <td className="py-8">
                                {assignment.difficulty}
                            </td>
                            <td className="py-8">
                                {assignment.date}
                            </td>
                            <th className="py-8">
                                <div className=" flex gap-4 items-center">
                                    <button className="text-xl text-blue-500 hover:text-blue-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-blue-100 ">
                                        <FaEdit />
                                    </button>

                                    {/* Delete Button */}
                                    <button className="text-xl text-red-700 hover:text-red-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-red-100">
                                        <RiDeleteBack2Fill />
                                    </button>

                                    {/* View Button */}
                                    <button className="text-xl text-green-700 hover:text-green-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-green-100">
                                        <FaEye />
                                    </button>
                                </div>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Assignments;
