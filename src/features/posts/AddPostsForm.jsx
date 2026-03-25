import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate } from "react-router-dom";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const navigate = useNavigate();

  const onAddPost = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        await dispatch(addNewPost({ title, body: content })).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navigate("/");
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div className=" my-5 w-100 mx-auto ">
      <h2 className=" text-2xl my-5 font-bold">Add Post</h2>
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
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="content" className="text-lg">
          Content
        </label>
        <textarea
          id="content"
          className=" border rounded-lg text-lg p-2"
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />

        <label htmlFor="author">Author</label>
        <select
          className=" text-lg p-2 mb-5 rounded-lg border "
          name=""
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          id="author"
        >
          <option value=""></option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <button
          disabled={!canSave}
          type="submit"
          className={`cursor-pointer bg-black rounded-2xl hover:bg-gray-900 text-white p-3 ${canSave ? " bg-black rounded-2xl hover:bg-gray-900" : "bg-gray-400 cursor-not-allowed"}`}
          onClick={() => onAddPost()}
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostsForm;
