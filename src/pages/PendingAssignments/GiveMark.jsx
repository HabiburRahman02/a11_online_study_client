import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const GiveMark = () => {
    const { id } = useParams();
    const [assignment, setAssignment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://a11-group-study-server-rho.vercel.app/giveMarkSpecificUser/${id}`)
            .then(data => {
                setAssignment(data.data)
            })
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const obtained_marks = form.marks.value;
        const feedback = form.feedback.value;
        const giveMarkData = {
            obtained_marks: obtained_marks,
            feedback,
            status: 'Completed'
        };

        // same user validation
        // if (assignment?.email === user?.email) {
        //     toast.error('You can not mark you assignment')
        //     return navigate('/pendingAssignments')
        // }

        axios.patch(`https://a11-group-study-server-rho.vercel.app/markData/${id}`, giveMarkData)
            .then(data => {
                if (data.data.modifiedCount) {
                    navigate('/pendingAssignments')
                    toast.success('Given marks')
                }
                console.log(data.data);
            })
            .catch(error => toast.error(error.message))

    };

    return (
        <div className="bg-white dark:text-black p-8 max-w-2xl mx-auto rounded-xl shadow-md space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">
                    Assignment Evaluation
                </h2>
                <p className="text-sm text-gray-500">
                    Review and grade the assignment below.
                </p>
            </div>

            <div className="space-y-4">
                {/* Assignment Title */}
                <div className="border-l-4 border-blue-500 pl-4 bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-bold text-gray-700">Assignment Title:</h3>
                    <p className="text-gray-600 text-base">{assignment.title}</p>
                </div>

                {/* Examinee Notes */}
                <div className="border-l-4 border-green-500 pl-4 bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-bold text-gray-700">Examinee Notes:</h3>
                    <p className="text-gray-600 text-base italic">
                        {assignment.quickNote || "No additional notes provided."}
                    </p>
                </div>

                {/* total marks */}
                <div className="border-l-4 border-fuchsia-500 pl-4 bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-bold text-gray-700">Total Marks:</h3>
                    <p className="text-gray-600 text-base italic">
                        {assignment.marks}
                    </p>
                </div>

                {/* Google Docs Link */}
                <div className="text-center">
                    <a
                        href={assignment.googleDocsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        View Google Docs
                    </a>
                </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="marks" className="block text-sm font-medium text-gray-700">
                        Marks:
                    </label>
                    <input
                        type="number"
                        id="marks"
                        required
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Enter marks"
                    />
                </div>

                <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                        Feedback:
                    </label>
                    <textarea
                        id="feedback"
                        rows="4"
                        required
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Provide feedback"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-customGreen hover:bg-[#03816e] text-white font-semibold text-lg rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Submit Marks
                </button>
            </form>
        </div>


    );
};

export default GiveMark;
