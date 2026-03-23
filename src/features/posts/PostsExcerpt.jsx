import { Link } from "react-router-dom";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <article className=" border rounded-2xl p-2">
      <h3 className=" ">{post.title}</h3>
      <p>{post.body}</p>
      <Link className=" cursor-pointer underline " to={`/post/${post.id}`}>
        post detail
      </Link>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
