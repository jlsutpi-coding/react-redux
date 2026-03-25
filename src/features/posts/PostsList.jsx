import { useSelector } from "react-redux";
import { getPostsError, getPostsStatus, selectPostIds } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  // const posts = useSelector(getAllPosts);
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>loading</p>;
  } else if (postsStatus === "successed") {
    content = orderedPostIds.map((postId) => {
      return <PostsExcerpt key={postId} postId={postId} />;
    });
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <div>
      <div className=" flex flex-col gap-3 w-95 mx-auto mt-10"> {content}</div>
    </div>
  );
};

export default PostsList;
