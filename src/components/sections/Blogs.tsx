"use client"

import useBlogs from "@/hooks/useBlogs"
import BlogCard from "../ui/BlogCard"

const Blogs = () => {
  const { blogs } = useBlogs()

  return (
    <section className="min-h-screen-minus-56 flex flex-col items-center py-5 md:py-10 gap-10 md:gap-20">
      <div className="flex-[0.2] grid place-items-center">
        <h2 className="text text-slate-300 text-5xl">Blogs</h2>
      </div>
      <div className="flex-[0.8]">
        <div className="flex flex-wrap justify-center items-stretch gap-8 w-full max-w-7xl">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
