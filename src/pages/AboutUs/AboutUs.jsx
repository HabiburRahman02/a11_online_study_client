import React from "react";

const WhyChooseUs = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 py-12 px-6 text-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold">Why Choose Us</h2>
                    <p className="text-lg mt-2">
                        Discover what makes us the perfect choice for your web development
                        assignments.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Why Choose Us"
                            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-8">
                        {/* Experienced Developers */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white text-blue-600 p-3 rounded-full shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Expert Assignment Help</h3>
                                <p>
                                    Our team consists of experienced developers who specialize in
                                    creating tailored web components and features for academic
                                    assignments.
                                </p>
                            </div>
                        </div>

                        {/* Quality Output */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white text-blue-600 p-3 rounded-full shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Detailed Code</h3>
                                <p>
                                    We ensure clean, optimized, and well-commented code to make
                                    your assignment stand out and help you understand every
                                    component.
                                </p>
                            </div>
                        </div>

                        {/* On-Time Delivery */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white text-blue-600 p-3 rounded-full shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 12v10m0 0h-7m7 0h7"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Timely Submissions</h3>
                                <p>
                                    Deadlines are important! We guarantee the timely delivery of
                                    your assignment components, ensuring no last-minute stress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
