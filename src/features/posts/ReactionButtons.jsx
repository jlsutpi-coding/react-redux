import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionEmoji = {
    thumpsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕️",
  };

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        className=" cursor-pointer"
        key={name}
        onClick={() => {
          dispatch(reactionAdded({ postId: post.id, reaction: name }));
        }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div className=" mt-2">{reactionButtons}</div>;
};

export default ReactionButtons;
