import Work from "./Work";
import work1 from '../../assets/work/work1.webp'
const Works = () => {
    const bgClass1 = 'bg-[#ebecff';
    const bgClass2 = 'bg-gray-5';
    return (
        <div className="my-12 md:px-0 py-6">
            <Work title="What's Our Mission?" subTitle="Our mission is to empower individuals through knowledge and skill development by providing well-structured and meaningful assignments. We aim to foster a deeper understanding of concepts, encourage critical thinking, and promote continuous learning to help everyone achieve their goals one step at a time."
                img={work1}
                bgClass={bgClass1}
            ></Work>
            <Work title="What's Our Vision?" subTitle="Our vision is to foster a world where education is accessible and meaningful for everyone. We aspire to create an environment where learning through assignments empowers individuals to grow, succeed, and achieve their fullest potential, regardless of their background."
                img={work1}
                bgClass={bgClass2}
            ></Work>
        </div>
    );
};

export default Works;