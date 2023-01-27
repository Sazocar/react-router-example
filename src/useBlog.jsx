import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogdata } from "./blogdata";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [data, setData] = useState(blogdata);
  const navigate = useNavigate();

  const deleteBlog = (slug) => {
    const newBlogData = [...data];
    // const postIndex = newBlogData.findIndex((post) => post.slug === slug);
    // newBlogData.splice(postIndex, 1);
    // console.log(postIndex);

    setData(newBlogData.filter(post => post.slug != slug));
    navigate('/blog');
    console.log(newBlogData);
  };

  const blog = {
    data,
    deleteBlog,
  }

  return (
    <BlogContext.Provider value={blog}>
      {children}
    </BlogContext.Provider>
  )
};

const useBlog = () => {
  const blog = useContext(BlogContext);
  return blog;
}

export { BlogProvider, useBlog }