import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blogpost = blogdata.find(post => post.slug === slug);

  const returnToBlog = () => {
    navigate('/blog');
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      <button onClick={returnToBlog}>Volver a Blog</button>
    </>
  );
}
export { BlogPost };