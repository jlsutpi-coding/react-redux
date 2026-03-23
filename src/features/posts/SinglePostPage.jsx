import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const SinglePostPage = () => {
  // retrieve postId
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, postId));
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <article className=" w-95 mx-auto mt-10 border rounded-2xl p-2">
      <h3 className=" ">{post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/post/edit/${post.id}`} className=" underline">
        {" "}
        Edit Post
      </Link>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
