import React from "react";
import { selectAllPost } from "./postsSlice";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
  const posts = useSelector(selectAllPost);
  console.log(posts);
  return (
    <div>
      <h2>Posts</h2>
      <div className=" flex flex-col gap-3 w-95 mx-auto">
        {posts.map((post) => {
          return (
            <article className=" border rounded-2xl p-2" key={post.id}>
              <h3 className=" ">{post.title}</h3>
              <p>{post.content}</p>
              <p>
                <PostAuthor userId={post.userId} />
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default PostsList;
