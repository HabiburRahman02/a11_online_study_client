
import { useEffect, useState } from "react";
import { FaCircle } from 'react-icons/fa';

import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MySubmitted = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [submissions, setSubmissions] = useState([]);
    // console.log(submissions);
    useEffect(() => {
        axiosSecure.get(`/submissionByEmail/${user?.email}`)
            .then(data => {
                setSubmissions(data.data)
            })
    }, [user?.email, axiosSecure]);


    return (
        <div className="max-w-[1400px] mx-auto py-12">
            <h3 className="mb-4 text-xl max-w-xs mx-auto font-semibold text-indigo-600  text-center p-4 border-l-4 border-indigo-400 border-r-4  bg-white shadow-md rounded-md">
                My Assignments:
                <span className="text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full ml-2">{submissions.length}</span>
            </h3>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-black">
                        <tr className="text-center">
                            <th className="py-6 "> <FaCircle className="text-green-400 mx-auto"></FaCircle></th>
                            <th className="py-6">Title</th>
                            <th className="py-6">Assignment Status</th>
                            <th className="py-6">Assignment Marks</th>
                            <th className="py-6">Obtained Marks</th>
                            <th className="py-6">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submissions?.map((submission, i) => <tr
                                key={submission._id}
                                className="hover:bg-gray-100 text-center  transition duration-500 hover:text-black py-4">
                                <th className="py-8 md:py-12">{i + 1}</th>
                                <td className="py-8 md:py-12">
                                    {submission.title}
                                </td>
                                <td className="py-8 md:py-12">
                                    <span
                                        className={`inline-block w-28  py-1 text-center rounded-3xl font-medium  ${submission.status === "Pending"
                                            ? "bg-orange-100 text-orange-700 border  border-orange-300"
                                            : "bg-green-100 text-green-700 border  border-green-300"
                                            }`}
                                    >
                                        {submission.status}
                                    </span>


                                </td>
                                <td className="py-8 md:py-12">
                                    {submission.marks}
                                </td>
                                <td className="py-8 md:py-12">
                                    {submission.obtained_marks || 'N/A'}
                                </td>
                                <td className="py-8 md:py-12">
                                    {submission.feedback || 'N/A'}
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySubmitted;
