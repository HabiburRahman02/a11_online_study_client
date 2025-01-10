import { Fade } from "react-awesome-reveal";
import Heading from "../../components/Heading";

const OurCommitment = () => {
    return (
        <section className="text-gray-800 dark:text-white py-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <Heading title='Our Commitment'></Heading>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Text Content - Left Side */}
                    <div className="md:w-1/2 space-y-8">
                        {/* 24/7 Support */}
                        <Fade direction="up" duration={2000}>
                            <div className="flex items-start gap-4">
                                <div className="bg-white text-green-600 p-3 rounded-full shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8"
                                    >
                                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-10h2v6h-2zm-2 0h2v2h-2z" />
                                    </svg>



                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold dark:text-white ">24/7 Support</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Our team is available around the clock to assist with any questions or issues you may have. Whether its a minor inquiry or urgent help, we are just a call or click away!
                                    </p>
                                </div>
                            </div>
                        </Fade>

                        {/* Dedicated Team */}
                        <Fade direction="up" duration={2000}>
                            <div className="flex items-start gap-4">
                                <div className="bg-white text-blue-600 p-3 rounded-full shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8"
                                    >
                                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                        <path d="M12 8c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 4c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1zM8 13h8v2H8zm0 4h8v2H8z" />
                                    </svg>

                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold dark:text-white">Dedicated Team</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Our team consists of dedicated experts who work tirelessly to provide tailored solutions that best suit your needs. You can count on us for expertise and guidance at every step.
                                    </p>
                                </div>
                            </div>
                        </Fade>

                        {/* New Commitment Section */}
                        <Fade direction="up" duration={2000}>
                            <div className="flex items-start gap-4">
                                <div className="bg-white text-yellow-600 p-3 rounded-full shadow-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8"
                                    >
                                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                        <path d="M10 7h4v2h-4zM10 11h4v2h-4zM10 15h4v2h-4z" />
                                    </svg>

                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold dark:text-white">Tailored Solutions</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        We understand that every customer is unique. That’s why we offer personalized solutions to meet your specific needs, ensuring optimal outcomes that fit your goals.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Image - Right Side */}
                    <div className="md:w-1/2">
                        <img
                            src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Support"
                            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCommitment;
