import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useLoaderData, useNavigate } from "react-router-dom";

const AssignmentSubmission = () => {
    const submission = useLoaderData();
    const navigate = useNavigate();
    const { user } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.title = submission.title
        data.marks = submission.marks
        data.examiner_name = submission.name
        data.submission_id = submission._id
        data.submission_email = submission.email;
        console.log(data)
        axios.post('https://a11-group-study-server-rho.vercel.app/submissions', data)
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    toast.success('Assignments submitted')
                    navigate('/assignments')
                }
                form.reset();
            })
            .catch(error => toast.error(error.message))
    };

    return (
        <div className="font-semibold p-6 max-w-2xl mx-auto bg-white dark:text-black border border-gray-200 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Submit Your Assignment</h2>

            <div className="mb-4 text-center text-green-500"></div>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="googleDocsLink" className="block text-sm font-medium text-gray-700 mb-1">
                        Google Docs Link:
                    </label>
                    <input
                        type="url"
                        name="googleDocsLink"
                        required
                        className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter Google Docs link"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="quickNote" className="block text-sm font-medium text-gray-700 mb-1">
                        Quick Note:
                    </label>
                    <textarea
                        name="quickNote"
                        rows="4"
                        className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter a quick note (optional)"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                        Status:
                    </label>
                    <input
                        type="text"
                        name="status"

                        readOnly
                        defaultValue={'Pending'}
                        className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 w-full px-3 py-2 border border-gray-300 cursor-not-allowed rounded-md bg-gray-100"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                        email:
                    </label>
                    <input
                        type="email"
                        name="email"

                        readOnly
                        defaultValue={user?.email}
                        className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 w-full px-3 py-2 border border-gray-300 cursor-not-allowed rounded-md bg-gray-100"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-customGreen text-white py-3 rounded-md hover:bg-[#03816e]"
                >
                    Submit Assignment
                </button>
            </form>
        </div>
    );
};

export default AssignmentSubmission;
