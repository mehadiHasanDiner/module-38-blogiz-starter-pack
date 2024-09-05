import BlogDetails from '@/components/ui/BlogDetails';
import React from 'react';

type BlogId = {
    params: {
        blogId: string
    }
}

export const generate 

const BlogDetailsPage = async ({ params }: BlogId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
        cache: "no-store"
    })
    const blog = await res.json();
    console.log(blog)
    return (
        <div className='my-10'>
            <BlogDetails key={blog.id} blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;