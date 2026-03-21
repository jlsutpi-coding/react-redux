import React, { useEffect } from "react";
import {
  fetchPosts,
  getAllPosts,
  getPostsError,
  getPostsStatus,
} from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

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

  const orderdPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

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
              <ReactionButtons post={post} />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default PostsList;
