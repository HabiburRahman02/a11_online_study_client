import Heading from "../../components/Heading/Heading";
import BlogCard from "../Blogs/BlogCard";

const Blogs = () => {

    const blogs = [
        {
            id: 1,
            title: "How to Start a Successful Campaign",
            description: "Learn the essential steps to kickstart your campaign and make it a success...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAG_oaL_3oqO0wkobQcm6H-rqDgLKHuNHd7A&s"
        },
        {
            id: 2,
            title: "Top 10 Fundraising Tips",
            description: "Discover expert tips to make your fundraising campaigns more effective...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmqJUddnlFylUWMJ8aRziPng3xmsYpMVR-w&s"
        },
        {
            id: 3,
            title: "Success Stories from Our Campaigns",
            description: "Get inspired by real-life success stories from our top campaigns...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsq9onfqtXaLB0LTmzEk560KEampqSASxmlQ&s",
        },
    ];

    return (
        <section id="blogs" className="py-20">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
                {/* Section Title */}
                <Heading
                    title='Our Blogs'
                ></Heading>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}
                    ></BlogCard>)}
                </div>
            </div>
        </section>
    );
};

export default Blogs;