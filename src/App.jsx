import React from "react";
import PostsList from "./features/posts/PostsList";
import AddPostsForm from "./features/posts/AddPostsForm";

const App = () => {
  return (
    <div>
      <AddPostsForm />
      <PostsList />
    </div>
  );
};

export default App;
