import Heading from "../../components/Heading";
import BlogCard from "../Contact/BlogCard";

const BlogSection = () => {

    const blogs = [
        {
            id: 1,
            title: "How to Manage Assignments Effectively",
            description: "Explore proven strategies to organize and manage your assignments like a pro...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlJIxiiseJWh-tMVxUC78tXrRQ94bIe6Vvw&s",
        },
        {
            id: 2,
            title: "Top Tools for Assignment Success",
            description: "Discover the best tools to help you complete assignments efficiently and on time...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-uZlFTGIQ-DgESD5ENcF7Vg0YLTjVkW8t1A&s",
        },
        {
            id: 3,
            title: "How to Write Impressive Assignment Reports",
            description: "Learn how to structure and write assignment reports that stand out...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17BgJGPjoPXZ5-9ljX9B0eYMW8Zs_qooSTQ&s",
        },
        {
            id: 4,
            title: "Avoid Common Mistakes in Assignments",
            description: "Find out the most common mistakes students make and how to avoid them...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnBx4VBO2U3ENHuWjK5oVkvspLpu3uHyFCA&s",
        },
    ];


    return (
        <section id="blogs" className="py-12">
            <Heading
                title='Our Latest Blogs'
            ></Heading>
            <div className="max-w-[1400px] mx-auto px-8 sm:px-6 lg:px-8">


                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {blogs.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}
                    ></BlogCard>)}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;