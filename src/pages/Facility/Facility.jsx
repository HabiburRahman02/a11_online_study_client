import Heading from "../../components/Heading";
import OurCommitment from "./OutCommitment";
import WhyChooseUs from "./WhyChooseUs";

const Facility = () => {
    return (
        <div className="py-12 px-6 md:px-0 dark:text-white">
            <Heading title='Why Choose Us'></Heading>
            <WhyChooseUs></WhyChooseUs>
            <OurCommitment></OurCommitment>
        </div>
    );
};

export default Facility;
