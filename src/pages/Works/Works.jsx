import Work from "./Work";
import work1 from '../../assets/work/work1.webp'
const Works = () => {
    const bgClass1 = 'bg-[#ebecff';
    const bgClass2 = 'bg-gray-5';
    return (
        <div className="my-12 md:px-0 py-6">
            <Work title="What's Our Mission?" subTitle="Our mission is to bring warmth and dignity to those in need by collecting and distributing gently used clothing. We are committed to ensuring that no one goes without basic clothing, and we strive to make a difference one donation at a time."
                img={work1}
                bgClass={bgClass1}
            ></Work>
            <Work title="What's Our Vision?" subTitle="Our vision is to create a world where no one has to suffer from a lack of basic clothing. We aspire to build a future where every individual has access to warmth, dignity, and comfort, regardless of their circumstances."
                img={work1}
                bgClass={bgClass2}
            ></Work>
        </div>
    );
};

export default Works;