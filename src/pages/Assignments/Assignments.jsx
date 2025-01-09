import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import AssignmentCard from "./AssignmentCard";
import { Fade } from "react-awesome-reveal";

const Assignments = () => {
    const { user } = useAuth();
    const [assignments, setAssignments] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get(`https://a11-group-study-server-rho.vercel.app/assignmentBySearch?search=${search}&filter=${filter}`)
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
                axios.delete(`https://a11-group-study-server-rho.vercel.app/assignments/${id}`)
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
        <div className="max-w-[1400px] mx-auto py-12">
            <Fade duration={2000} direction="down">
                <div className="md:flex space-y-4 md:space-y-0 items-center justify-between gap-6 pb-6 px-6 md:px-20">
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
            </Fade>

            {/* Card Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    assignments?.map(assignment => <AssignmentCard
                        assignment={assignment}
                        key={assignment._id}
                        handleDelete={handleDelete}
                    ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;
