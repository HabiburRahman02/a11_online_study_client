import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaEye } from 'react-icons/fa';
import { RiDeleteBack2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Assignments = () => {
    const { user } = useAuth();
    const [assignments, setAssignments] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/assignmentBySearch?search=${search}&filter=${filter}`)
            .then(data => {
                setAssignments(data.data);
            })
    }, [search, filter]);

    const handleDelete = id => {
        const assignmentToDelete = assignments.find(ass => ass._id === id);
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
                    .catch(error => toast.error(error.message));
            }
        });
    }

    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="md:flex space-y-4 md:space-y-0 items-center justify-between gap-6 py-6 px-6 md:px-20">
                <h3 className="mb-4 text-xl max-w-xs md:mx-0 mx-auto font-semibold text-indigo-600 text-center p-3 border-l-4 border-indigo-400 border-r-4 bg-white shadow-md rounded-md">
                    All Assignments:
                    <span className="text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full ml-2">{assignments.length}</span>
                </h3>

                <div className="md:w-2/6">
                    <input
                        type="text"
                        name="title"
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Enter assignment title"
                        className="w-full dark:text-black px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
                    />
                </div>

                <div className="md:w-1/6">
                    <select
                        name="difficulty"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                        className="w-full dark:text-black px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400"
                    >
                        <option value='' disabled>Filter by difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </div>

            {/* Card Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    assignments?.map((assignment) => (
                        <div key={assignment._id} className="space-y-2 bg-white border shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform duration-500 ease-in-out mx-6 md:mx-0  hover:scale-105 dark:bg-gray-700 dark:shadow-2xl">
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    className="w-full h-60 rounded-lg object-cover"
                                    src={assignment.thumbnail}
                                    alt="Thumbnail"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-indigo-800 dark:text-white">{assignment.title}</h4>
                            <p className="text-sm text-gray-700 mt-2 dark:text-white">Total Marks: <span className="font-semibold text-indigo-600 dark:text-white">{assignment.marks}</span></p>

                            <p className="text-sm text-gray-700 dark:text-white">Difficulty:  <div className="badge badge-secondary">{assignment.difficulty}</div></p>
                            <p className="text-sm text-gray-700 dark:text-white">Date: <span className="font-semibold text-gray-900 dark:text-white">{assignment.date}</span></p>


                            {/* Actions */}
                            <div className=" flex gap-4 justify-center">
                                <Link to={`/updateAssignment/${assignment._id}`}>
                                    <button
                                        className="text-xl text-blue-500 hover:text-blue-700 p-2 rounded-full hover:bg-blue-100 transition duration-300 ease-in-out"
                                    >
                                        <FaEdit />
                                    </button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(assignment._id)}
                                    className="text-xl text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition duration-300 ease-in-out"
                                >
                                    <RiDeleteBack2Fill />
                                </button>
                                <Link to={`/assignmentDetails/${assignment._id}`}>
                                    <button
                                        className="text-xl text-green-500 hover:text-green-700 p-2 rounded-full hover:bg-green-100 transition duration-300 ease-in-out"
                                    >
                                        <FaEye />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Assignments;
