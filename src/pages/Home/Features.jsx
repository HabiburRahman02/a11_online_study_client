import { FaTasks, FaRegCheckCircle, FaChartBar, FaUsers } from 'react-icons/fa';

const featuresData = [
    {
        id: 1,
        icon: <FaTasks className="text-blue-500 text-4xl mb-4" />,
        title: 'Create Assignments',
        description: 'Effortlessly create assignments with deadlines, points, and detailed descriptions.',
    },
    {
        id: 2,
        icon: <FaRegCheckCircle className="text-green-500 text-4xl mb-4" />,
        title: 'Submit Assignments',
        description: 'Seamlessly submit completed assignments and get instant feedback.',
    },
    {
        id: 3,
        icon: <FaChartBar className="text-yellow-500 text-4xl mb-4" />,
        title: 'Track Progress',
        description: 'Monitor your progress with visual analytics for better productivity.',
    },
    {
        id: 4,
        icon: <FaUsers className="text-purple-500 text-4xl mb-4" />,
        title: 'Collaborative Workspace',
        description: 'Interact with friends, share resources, and study together in real-time.',
    },
];

const Features = () => {
    return (
        <div className='my-20'>
            <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    Explore Our Unique Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-[1400px] mx-auto">
                    {featuresData.map(feature => (
                        <div
                            key={feature.id}
                            className="p-6 bg-white rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
                        >
                            {feature.icon}
                            <h3 className="text-2xl font-bold text-gray-700 mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;