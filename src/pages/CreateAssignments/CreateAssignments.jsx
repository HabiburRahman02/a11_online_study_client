import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CreateAssignments = () => {
    const { user } = useAuth();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        axiosSecure.post('/assignments', data)
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    toast.success('Assignment created successfully')
                    navigate('/assignments')
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-4xl w-full bg-white shadow-xl border border-gray-200  dark:text-black rounded-lg overflow-hidden p-8 my-">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Assignment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Assignment Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter assignment title"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                        </div>

                        {/* Marks */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Marks</label>
                            <input
                                type="number"
                                name="marks"
                                placeholder="Enter total marks"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                        </div>

                        {/* Thumbnail URL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
                            <input
                                type="url"
                                name="thumbnail"
                                placeholder="Enter thumbnail URL"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                            />
                        </div>

                        {/* Difficulty Level */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Difficulty Level</label>
                            <select
                                name="difficulty"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 select select-bordered w-full mt-1"
                            >
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        {/* User Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">User Name</label>
                            <input
                                type="text"
                                name="name"
                                readOnly
                                defaultValue={user?.displayName}
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 bg-gray-100 cursor-not-allowed"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                readOnly
                                defaultValue={user?.email}
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1 bg-gray-100 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Date */}
                    <div className="mt-6 w-full">
                        <label className="block text-sm font-medium text-gray-700">Date</label>
                        <div className="relative w-full">
                            <DatePicker
                                name="date"
                                className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 input input-bordered w-full mt-1"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                wrapperClassName="w-full"
                            />
                        </div>
                    </div>


                    {/* Description */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter assignment description"
                            className="focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 textarea textarea-bordered w-full mt-1"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-8">
                        <button type="submit" className="font-semibold bg-customGreen hover:bg-[#03816e] text-white px-8 py-4 rounded-lg w-full ">
                            Submit Assignment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignments;

