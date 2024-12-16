import React from "react";
import blog1 from "../../Components/assets/blog/blog.png";
import blog2 from "../../Components/assets/blog/blog0.png";
import blog3 from "../../Components/assets/blog/blog1.png";
import Gallery from "react-photo-gallery";
// Sample Blog Data
const photos = [
  { key: 1, src: blog1, width: 200, height: 150 },
  { key: 2, src: blog2, width: 300, height: 200 },
  { key: 3, src: blog3, width: 250, height: 180 },
  { key: 4, src: blog1, width: 350, height: 250 },
  { key: 5, src: blog2, width: 400, height: 300 },
  { key: 6, src: blog3, width: 200, height: 250 },
  { key: 7, src: blog1, width: 4, height: 3 },
  { key: 8, src: blog2, width: 1, height: 1 },
  { key: 3, src: blog3, width: 3, height: 4 },
  { key: 9, src: blog1, width: 4, height: 3 },
  { key: 10, src: blog2, width: 1, height: 1 },
  { key: 11, src: blog3, width: 3, height: 4 },
];

const BlogPage = () => {
  return (
    <div className="bg-[#171717] text-white py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-center py-12 text-transparent bg-clip-text bg-gradient-to-r from-[#ff9f00] to-[#ff5700]">
          Ravi Studio Blog
        </h1>
        <Gallery photos={photos.map((photo) => ({ ...photo }))} />
      </div>
    </div>
  );
};

export default BlogPage;
