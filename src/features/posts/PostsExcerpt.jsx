import React from "react";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <article className=" border rounded-2xl p-2">
      <h3 className=" ">{post.title}</h3>
      <p>{post.content}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
