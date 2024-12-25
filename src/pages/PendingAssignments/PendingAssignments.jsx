import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import PendingAssignmentTableRow from "./PendingAssignmentTableRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PendingAssignments = () => {
    const { user } = useAuth();
    const [assignments, setAssignments] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/pendingAssignments?email=${user?.email}`)
            .then(data => {
                setAssignments(data.data)
            })
    }, [user?.email, axiosSecure]);



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
                        <tr className="text-center">
                            <th className="py-6"> <FaCircle className="text-green-400 mx-auto"></FaCircle></th>
                            <th className="py-6">Title</th>
                            <th className="py-6">Marks</th>
                            <th className="py-6">Examiner Name || Email</th>
                            <th className="py-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assignments?.map((assignment, i) => <PendingAssignmentTableRow
                                key={assignment._id}
                                i={i}
                                assignment={assignment}
                            ></PendingAssignmentTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignments;