import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, selectPostById, updatePost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const EditPostForm = () => {
  const { postId } = useParams();

  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, postId));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [body, setBody] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  if (!post) {
    return <>post not found</>;
  }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, body, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClick = async () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        await dispatch(
          updatePost({
            id: post.id,
            title,
            body,
            userId,
            reactions: post.reactions,
          }),
        ).unwrap();
        setTitle("");
        setBody("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  // delete post function
  const onDeletePost = async () => {
    try {
      setRequestStatus("pending");
      await dispatch(deletePost({ id: post.id })).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Failed to delete the post", error);
    } finally {
      setRequestStatus("idle");
    }
  };
  return (
    <section>
      <div className=" my-5 w-100 mx-auto ">
        <h2 className=" text-2xl my-5 font-bold">Update Post</h2>
        <form
          className=" flex flex-col gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="title" className=" text-lg">
            Title
          </label>
          <input
            id="title"
            className=" border rounded-lg text-lg p-2"
            type="text"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor="content" className="text-lg">
            Content
          </label>
          <textarea
            id="content"
            className=" border rounded-lg text-lg p-2"
            type="text"
            value={body}
            onChange={onBodyChanged}
          />

          <label htmlFor="author">Author</label>
          <select
            className=" text-lg p-2 mb-5 rounded-lg border "
            name=""
            value={userId}
            onChange={onAuthorChanged}
            id="author"
          >
            <option value=""></option>
            {userOptions}
          </select>
          <div className=" flex items-center gap-3">
            <button
              disabled={!canSave}
              type="submit"
              className={`cursor-pointer bg-black rounded-2xl hover:bg-gray-900 text-white p-3 ${canSave ? " bg-black rounded-2xl hover:bg-gray-900" : "bg-gray-400 cursor-not-allowed"}`}
              onClick={() => onSavePostClick()}
            >
              Save Post
            </button>
            <button
              onClick={onDeletePost}
              className=" bg-red-600 hover:bg-red-500 text-white rounded-2xl p-3 cursor-pointer"
            >
              Delete Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditPostForm;
