import { Fade } from "react-awesome-reveal";


const ContactForm = () => {

    return (
        <div>
            <form className="card-body bg-white dark:text-gray-300 rounded-xl shadow-lg hover:shadow-xl duration-500 transition-all dark:bg-gray-800 ">
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="text-xl font-medium ">
                            Your Name
                        </span>
                    </label>
                    <Fade direction="up" duration={1000}>
                        <input
                            name="user_name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-gray-800"
                            required
                        />
                    </Fade>
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="text-xl font-medium ">
                            Your Email
                        </span>
                    </label>
                    <Fade direction="up" duration={1000}>
                        <input
                            name="user_email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-gray-800"
                            required
                        />
                    </Fade>
                </div>

                <div className="form-control mb-6">
                    <label className="label">
                        <span className="text-xl font-medium">
                            Your Message
                        </span>
                    </label>
                    <Fade direction="up" duration={1000}>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Enter your message"
                            className="w-full border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-gray-800"
                            required
                        ></textarea>
                    </Fade>
                </div>

                <div className="form-control">
                    <Fade direction='up' duration={2000}>
                        <button className=" duration-500 w-full bg-customGreen py-3 px-12  text-white font-bold  border-[2px] border-transparent hover:border-[2px] hover:border-black hover:bg-transparent hover:text-black transition-all rounded-full dark:text-white dark:hover:border-white">
                            <span> Send Message</span>
                        </button>
                    </Fade>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;