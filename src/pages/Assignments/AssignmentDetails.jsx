import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
    const assignment = useLoaderData();
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
            <img className="h-64 w-full object-cover rounded-lg mb-4" src={assignment.thumbnail} alt="" />
            <h1 className="text-2xl font-bold mb-4 text-center">Assignment Details</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Title: {assignment.title}</h2>
                <p className="text-gray-600">Description: {assignment.description}</p>
            </div>

            <div className="mb-4">
                <p><strong>Created By:</strong> {assignment.email} || {assignment.displayName}</p>
                <p><strong> Date:</strong> {assignment.date}</p>
            </div>

            <Link to={`/assignmentSubmission/${assignment._id}`}>
                <button className="font-semibold bg-customGreen hover:bg-[#03816e] text-white px-8 py-2 rounded-full">Take Assignment</button>
            </Link>
        </div>
    );
};

export default AssignmentDetails;
