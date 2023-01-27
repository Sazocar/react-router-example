import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogdata } from "./blogdata";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [data, setData] = useState(blogdata);
  const navigate = useNavigate();

  const deleteBlog = (title) => {
    const newBlogData = [...data];
    const postIndex = newBlogData.findIndex((post) => post.title === title);
    newBlogData.splice(postIndex, 1);

    console.log(postIndex);
    console.log(newBlogData);
    setData(newBlogData);
    navigate('/blog');
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