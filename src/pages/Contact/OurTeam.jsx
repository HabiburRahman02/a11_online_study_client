import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Heading from "../../components/Heading";

const OurTeam = () => {
    const teamMembers = [
        {
            name: "Harry Perry",
            role: "CEO",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvVagU-05q2wf2swrVAWdFXPuHD06OpMaig&s",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        },
        {
            name: "Jane Smith",
            role: "COO",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYO9-rSPlbXBETxjIEknYtj6PpkyLi50nCg&s",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        },
        {
            name: "Maron Carty",
            role: "CTO",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkleVzHgzcc-btnmsz3B8jvS69AXp7ZaJU5w&s",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        },
        {
            name: "Harry Brook",
            role: "CPO",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxAmpalwU30owGw1nw3nL-Jlf1OnR7d4oHQ&s",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                instagram: "#"
            }
        }
    ];

    return (
        <div id="team" className="mb-20">
            <Heading title='Meet Our Team'></Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.name} className="p-6 bg-white hover:bg-gray-50  shadow hover:shadow-lg transition duration-300 text-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="rounded-full object-cover w-32 h-32 mx-auto mb-4 border-4 border-blue-500 shadow-xl"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                        <p className="text-gray-600 mb-4">{member.role}</p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a href={member.socialLinks.facebook} className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110">
                                <FaFacebook size={24} />
                            </a>
                            <a href={member.socialLinks.twitter} className="text-blue-400 hover:text-blue-600 transition duration-300 transform hover:scale-110">
                                <FaTwitter size={24} />
                            </a>
                            <a href={member.socialLinks.instagram} className="text-pink-500 hover:text-pink-700 transition duration-300 transform hover:scale-110">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;