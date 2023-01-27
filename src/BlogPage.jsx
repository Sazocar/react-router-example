import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";

const BlogPage = () => {
  return (
    <>

      <p>BlogPage</p>
      <ul>
        {blogdata.map((post) => (
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
