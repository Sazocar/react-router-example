import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { useBlog } from "./useBlog";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blog = useBlog();
  const auth = useAuth();

  const blogpost = blog.data.find(post => post.slug === slug);

  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username

  const returnToBlog = () => {
    navigate('/blog');
  }

  const handleClick = (event) => {
    event.preventDefault();
    blog.deleteBlog(blogpost.title);
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete && (
        <button onClick={handleClick}>Eliminar post</button>
      )}  

      <button onClick={returnToBlog}>Volver a Blog</button>
    </>
  );
}
export { BlogPost };