import React from "react";
import { selectAllPost } from "./postsSlice";
import { useSelector } from "react-redux";

const PostsList = () => {
  const posts = useSelector(selectAllPost);
  console.log(posts);
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </article>
        );
      })}
    </div>
  );
};

export default PostsList;
