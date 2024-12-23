import Faq from "./Faq";
import Features from "./Features";

const Home = () => {
    return (
        <div className="dark:text-white dark:bg-gray-700">
            <Features></Features>
            <Faq></Faq>
        </div>
    );
};

export default Home;