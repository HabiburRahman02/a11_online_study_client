import BlogSection from "./BlogSection";
import Faq from "./Faq";
import Features from "./Features";
import Feedback from "./Feedback";

const Home = () => {
    return (
        <div className="dark:text-white dark:bg-gray-700">
            <Features></Features>
            <Faq></Faq>
            <BlogSection></BlogSection>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;