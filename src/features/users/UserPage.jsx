import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "./usersSlice";
import { getAllPosts } from "../posts/postsSlice";

const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) => {
    const allPosts = getAllPosts(state);
    return allPosts.filter((post) => post.userId === Number(userId));
  });

  const postTitles = postsForUser.map((post) => {
    return (
      <li key={post.id}>
        <Link className=" underline hover:bg-red-500" to={`/post/${post.id}`}>
          {post.title}
        </Link>
      </li>
    );
  });
  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
