import { useLoaderData } from "react-router-dom";


const GiveMark = () => {
    const marks = useLoaderData();
    console.log(marks?.marks);

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className="p-6 max-w-xl mx-auto bg-white border border-gray-200 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">Evaluate Assignment</h2>

            <div className="mb-6">
                <p className="text-sm font-semibold">Assignment Title:</p>
                {/* <p className="text-gray-700">{assignment.title}</p> */}
            </div>

            <div className="mb-6">
                <p className="text-sm font-semibold">Examinee Notes:</p>
                {/* <p className="text-gray-700">{assignment.notes}</p> */}
            </div>

            <div className="mb-6">
                <a
                    // href={assignment.googleDocs}
                    href="sdd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    View Google Docs
                </a>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="marks" className="block text-sm font-medium text-gray-700">
                        Marks:
                    </label>
                    <input
                        type="number"
                        id="marks"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Enter marks"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                        Feedback:
                    </label>
                    <textarea
                        id="feedback"
                        rows="4"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Enter feedback"
                    />
                </div>

                <button type="submit" className=" bg-customGreen hover:bg-[#03816e] text-white px-8 py-4 rounded-lg w-full ">
                    Give Mark
                </button>
            </form>
        </div>
    );
};

export default GiveMark;
