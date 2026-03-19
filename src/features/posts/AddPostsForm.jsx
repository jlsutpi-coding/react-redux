import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postsAdded } from "./postsSlice";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onAddPost = () => {
    dispatch(postsAdded(title, content));
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit" onClick={() => onAddPost()}>
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostsForm;
