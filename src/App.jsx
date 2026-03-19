import React from "react";
import PostsList from "./features/posts/PostsList";
import AddPostsForm from "./features/posts/AddPostsForm";

const App = () => {
  return (
    <div>
      {/* <Counter /> */} <PostsList />
      <AddPostsForm />
    </div>
  );
};

export default App;
