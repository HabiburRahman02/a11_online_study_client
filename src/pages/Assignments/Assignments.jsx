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
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    console.log(search, filter);

    useEffect(() => {
        axios.get(`http://localhost:5000/assignmentBySearch?search=${search}&filter=${filter}`)
            .then(data => {
                setAssignments(data.data)
            })
    }, [search, filter]);

    const handleDelete = id => {
        const assignmentToDelete = assignments.find(ass => ass._id === id);
        // console.log(assignmentToDelete?.email);
        if (assignmentToDelete?.email !== user?.email) {
            toast.error("You are not authorized to delete this assignment!");
            return;
        }

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
        <div className="max-w-[1400px] mx-auto">
            <div className="md:flex space-y-4 md:space-y-0 items-center justify-between gap-6 py-6 px-4 md:px-20">
                <h3 className="md:w-1/6 text-center md:text-left font-medium text-indigo-700 text-lg">
                    <span className="text-indigo-700 dark:text-white">Assignments: {assignments.length}</span>
                </h3>

                <div className="md:w-2/6">
                    <input
                        type="text"
                        name="title"
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Enter assignment title"
                        className="w-full dark:text-black px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                    />
                </div>

                <div className="md:w-1/6">
                    <select
                        name="difficulty"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        className="w-full dark:text-black  px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                    >
                        <option value='' disabled>Filter by difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto ">
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
                                className="hover:bg-gray-100  transition duration-300 py-4 hover:text-black">
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
                                            <button className="text-xl text-green-500 hover:text-green-500 hover:scale-110 transform transition duration-300 ease-in-out p-2 rounded-full hover:bg-green-100">
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
        </div>
    );
};

export default Assignments;
