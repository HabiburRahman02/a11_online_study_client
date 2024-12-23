
const Filter = () => {

    const handleSearch = e => {
        console.log(e.target.value);
    }

    return (
        <div className="md:flex space-y-4 md:space-y-0 items-center justify-between gap-6 py-6 px-4 md:px-20">
            <h3 className="md:w-1/6 text-center md:text-left font-bold text-indigo-700 text-lg">
                <span className="text-indigo-900">Assignments: {assignments.length}</span>
            </h3>

            <div className="md:w-2/6">
                <input
                    type="text"
                    name="title"
                    onChange={handleSearch}
                    placeholder="Enter assignment title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
            </div>

            <div className="md:w-1/6">
                <select
                    name="difficulty"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;