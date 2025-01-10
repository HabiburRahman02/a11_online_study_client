
import Heading from "../../components/Heading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactContainer = () => {
    return (
        <div className="my-12">
            <div className="max-w-[1400px] mx-auto">
                <Heading title='Contact Us'></Heading>

                <div className="md:flex items-center gap-16 m-4">
                    {/* Left Section */}
                    <ContactInfo></ContactInfo>

                    {/* Right Section */}
                    <div className="md:w-3/5">
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default ContactContainer;