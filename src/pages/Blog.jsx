import { useState } from "react";
import useTitle from "../components/useTitle";

const demoBlogs = [
  {
    _id: "1",
    title: "How to Decorate Your Party Venue",
    content: "Learn the top tips and tricks to make your party venue look amazing using simple decorations and creative ideas...",
    image: "https://i.ibb.co.com/JFsr7wh4/pexels-thatguycraig000-2306282.jpg",
    publishedAt: "2025-08-10",
  },
  {
    _id: "2",
    title: "Top 10 DJ Tips for Your Event",
    content: "A professional guide to choosing the right DJ and making sure your event has the perfect music...",
    image: "https://i.ibb.co.com/FLDSCMy8/pexels-isabella-mendes-107313-860707.jpg",
    publishedAt: "2025-08-08",
  },
  {
    _id: "3",
    title: "Wedding Planning Checklist",
    content: "Everything you need to plan a stress-free wedding, from venue selection to catering and photography...",
    image: "https://i.ibb.co.com/M5n0WxFh/pexels-luis-zambrano-3782493-16436911.jpg",
    publishedAt: "2025-08-05",
  },
  {
    _id: "4",
    title: "Outdoor Event Ideas",
    content: "Creative ideas to host outdoor events, from birthday parties to corporate gatherings, making them memorable...",
    image: "https://i.ibb.co.com/qLFc2kCT/pexels-pixabay-50675.jpg",
    publishedAt: "2025-08-02",
  },
  {
    _id: "5",
    title: "How to Choose the Perfect Caterer",
    content: "Tips on selecting the best caterer for your event, including menu planning and budgeting advice...",
    image: "https://i.ibb.co.com/PvWHYczs/pexels-panditwiguna-2788492.jpg",
    publishedAt: "2025-07-30",
  },
];

const Blog = () => {
  useTitle("Blog | Festivya");

  const [searchText, setSearchText] = useState("");

  const filteredBlogs = demoBlogs.filter(blog =>
    blog.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="font-roboto py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-2">
          Our Blog
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Read our latest articles and updates
        </p>
      </div>

      {/* 🔍 Search */}
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search blogs by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md px-4 py-2 w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div
              key={blog._id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-black dark:text-white mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                  {blog.content}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Published on: {new Date(blog.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            No blogs found matching "{searchText}"
          </p>
        )}
      </div>
    </section>
  );
};

export default Blog;
