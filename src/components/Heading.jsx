import { Fade } from "react-awesome-reveal";

const Heading = ({ title }) => {
    return (
        <Fade direction='down' duration={2000}>
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
                {title}
            </h2>
        </Fade>
    );
};

export default Heading;