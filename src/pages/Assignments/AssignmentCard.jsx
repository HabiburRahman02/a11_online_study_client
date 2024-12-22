
const AssignmentCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300">
            {/* Thumbnail */}
            <img
                src="https://via.placeholder.com/300x200"
                alt="Assignment Thumbnail"
                className="w-full h-40 object-cover"
            />

            {/* Content */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Math Assignment
                </h2>
                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Marks:</span> 10
                </p>
                <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Difficulty:</span>{" "}
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">
                        Easy
                    </span>
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center space-x-2">
                    <button className="btn btn-sm w-1/3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        View
                    </button>
                    <button className="btn btn-sm w-1/3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                        Update
                    </button>
                    <button className="btn btn-sm w-1/3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;
