import React from "react";

// Sample Blog Data
const blogData = [
  {
    id: 1,
    title: "The Art of Wedding Photography",
    author: "Ravi Studio",
    date: "December 1, 2024",
    image: "https://via.placeholder.com/800x400?text=Wedding+Photography",
    excerpt:
      "Wedding photography is more than just taking photos. It’s about capturing the essence of the love and joy of one of the most important days in a couple’s life.",
  },
  {
    id: 2,
    title: "How to Choose the Best Wedding Videographer",
    author: "Ravi Studio",
    date: "November 15, 2024",
    image: "https://via.placeholder.com/800x400?text=Wedding+Videography",
    excerpt:
      "Choosing the right wedding videographer can make or break your wedding day experience. Here’s everything you need to know before making that decision.",
  },
  {
    id: 3,
    title: "5 Tips for a Picture-Perfect Wedding Day",
    author: "Ravi Studio",
    date: "October 30, 2024",
    image: "https://via.placeholder.com/800x400?text=Picture+Perfect+Wedding",
    excerpt:
      "Planning your wedding is exciting, but it can also be overwhelming. Here are five essential tips to make your wedding day picture-perfect.",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-[#171717] text-white py-16">
      <div className="max-w-screen-xl mx-auto px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Ravi Studio Blog
        </h1>
        <p className="text-lg sm:text-xl text-center mb-8">
          Stay updated with the latest photography and videography tips, trends,
          and news from Ravi Studio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="bg-[#2A3335] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  By {post.author} | {post.date}
                </p>
                <p className="text-lg mb-6">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-[#ff9f00] hover:text-[#e68900] text-lg font-semibold"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
