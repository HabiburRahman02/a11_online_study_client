import axios from "axios";
import { useEffect, useState } from "react";
import { FaCircle } from 'react-icons/fa';

import useAuth from "../../hooks/useAuth";

const MySubmitted = () => {
    const { user } = useAuth();
    const [submissions, setSubmissions] = useState([]);
    console.log(submissions);
    useEffect(() => {
        axios.get(`http://localhost:5000/submissionByEmail/${user?.email}`)
            .then(data => {
                setSubmissions(data.data)
            })
    }, [user?.email]);


    return (
        <div className="overflow-x-auto max-w-[1400px] mx-auto">
            <table className="table">
                {/* head */}
                <thead className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-black">
                    <tr>
                        <th className="py-6"> <FaCircle className="text-green-400"></FaCircle></th>
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
                            className="hover:bg-gray-100  transition duration-300 py-4">
                            <th className="py-8">{i + 1}</th>
                            <td className="py-8">
                                {submission.title}
                            </td>
                            <td className="py-8">
                                {submission.status}
                            </td>
                            <td className="py-8">
                                {submission.marks}
                            </td>
                            <td className="py-8">
                                {submission.obtainMarks || 'N/A'}
                            </td>
                            <td className="py-8">
                                {submission.feedback || 'N/A'}
                            </td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MySubmitted;
