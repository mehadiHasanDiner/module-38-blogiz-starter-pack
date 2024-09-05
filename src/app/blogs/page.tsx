"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { TBlog } from "@/types";

const BlogsPage = () => {
  //   const res = await fetch("http://localhost:5000/blogs", { cache: "no-store" });
  //   const blogs = await res.json();

  const { data:blogs, isLoading, isError, error } = useGetBlogsQuery("");
  console.log(blogs);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center my-5">
        Latest Blogs from <span className="text-cyan-500">Blogiz</span>
      </h1>
      <p className="text-xl w-2/4 mx-auto text-center">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-10">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
