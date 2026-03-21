import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  getAllPosts,
  getPostsError,
  getPostsStatus,
} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const posts = useSelector(getAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  console.log(postsStatus);
  console.log(posts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>loading</p>;
  } else if (postsStatus === "successed") {
    const orderdPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderdPosts.map((post) => {
      return <PostsExcerpt key={post.id} post={post} />;
    });
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <div className=" flex flex-col gap-3 w-95 mx-auto"> {content}</div>
    </div>
  );
};

export default PostsList;
