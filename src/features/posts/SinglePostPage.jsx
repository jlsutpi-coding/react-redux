import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { useParams } from "react-router-dom";

const SinglePostPage = () => {
  // retrieve postId
  const { postId } = useParams();
  console.log(postId);

  const post = useSelector((state) => selectPostById(state, postId));
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
};

export default SinglePostPage;
