import axios from "axios";
import { useEffect, useState } from "react";
import { FaCircle, FaEdit, FaEye } from 'react-icons/fa';
import { RiDeleteBack2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Assignments = () => {
    const { user } = useAuth();
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/assignments')
            .then(data => {
                setAssignments(data.data)
            })
    }, []);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const assignmentToDelete = assignments.find(ass => ass._id === id);
                console.log(assignmentToDelete?.email);
                if (assignmentToDelete?.email !== user?.email) {
                    toast.error("You are not authorized to delete this assignment!");
                    return;
                }

                axios.delete(`http://localhost:5000/assignments/${id}`)
                    .then(data => {
                        console.log(data.data)
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Deleted assignment successfully",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1000
                            });
                            const remaining = assignments.filter(ass => ass._id !== id);
                            setAssignments(remaining);
                        }
                    })
                    .catch(error => toast.error(error.message))
            }
        });
    }


    return (
        <div className="overflow-x-auto max-w-[1400px] mx-auto">
            <table className="table">
                {/* head */}
                <thead className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-black">
                    <tr>
                        <th className="py-6"> <FaCircle className="text-green-400"></FaCircle></th>
                        <th className="py-6">Thumbnail</th>
                        <th className="py-6">Title</th>
                        <th className="py-6">Marks</th>
                        <th className="py-6">Difficulty</th>
                        <th className="py-6">Date</th>
                        <th className="py-6">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        assignments?.map((assignment, i) => <tr
                            key={assignment._id}
                            className="hover:bg-gray-100  transition duration-300 py-4">
                            <th className="py-8">{i + 1}</th>
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
                                    <Link to={`/updateAssignment/${assignment._id}`}>
                                        <button
                                            className="text-xl text-blue-500 hover:text-blue-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-blue-100 ">
                                            <FaEdit />
                                        </button>
                                    </Link>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDelete(assignment._id)}
                                        className="text-xl text-red-700 hover:text-red-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-red-100">
                                        <RiDeleteBack2Fill />
                                    </button>

                                    {/* View Button */}
                                    <Link to={`/assignmentDetails/${assignment._id}`}>
                                        <button className="text-xl text-green-700 hover:text-green-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-green-100">
                                            <FaEye />
                                        </button>
                                    </Link>
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
