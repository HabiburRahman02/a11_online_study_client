import axios from "axios";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const PendingAssignments = () => {
    const { user } = useAuth();
    const [assignments, setAssignments] = useState([]);
    console.log(assignments);

    useEffect(() => {
        axios.get(`http://localhost:5000/pendingAssignments?email=${user?.email}`)
            .then(data => {
                setAssignments(data.data)
            })
    }, []);

    return (
        <div className="max-w-[1400px] mx-auto">
            <h3 className="mb-4 text-xl max-w-xs mx-auto font-semibold text-indigo-600  text-center p-4 border-l-4 border-indigo-400 border-r-4  bg-white shadow-md rounded-md">
                Pending Assignments:
                <span className="text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full ml-2">{assignments.length}</span>
            </h3>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-black">
                        <tr>
                            <th className="py-6"> <FaCircle className="text-green-400"></FaCircle></th>
                            <th className="py-6">Title</th>
                            <th className="py-6">Marks</th>
                            <th className="py-6">Examiner Name || Email</th>
                            <th className="py-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assignments?.map((assignment, i) => <tr
                                key={assignment._id}
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
                                    <Link to={`/giveMark/${assignment._id}`}>
                                        <button className=" bg-customGreen py-2 px-6  text-white font-medium 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-black   hover:text-black hover:bg-transparent duration-500 transition-all rounded-full">
                                            Give Mark
                                        </button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignments;