import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useBlog } from "./useBlog";

const BlogPage = () => {

  const blog = useBlog();

  return (
    <>

      <p>BlogPage</p>
      <ul>
        {blog.data.map((post) => (
          <BlogLink key={post.slug} post={post} />
          ))}
      </ul>
      
      <Outlet />
    </>
  );
};

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
};


export { BlogPage };
