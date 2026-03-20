import React from "react";
import { selectAllPost } from "./postsSlice";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPost);

  const orderdPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  console.log(posts);
  return (
    <div>
      <h2>Posts</h2>
      <div className=" flex flex-col gap-3 w-95 mx-auto">
        {orderdPosts.map((post) => {
          return (
            <article className=" border rounded-2xl p-2" key={post.id}>
              <h3 className=" ">{post.title}</h3>
              <p>{post.content}</p>
              <p>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default PostsList;
